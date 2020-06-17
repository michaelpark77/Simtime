from django.shortcuts import render

# Create your views here.
import base64
import hashlib
import hmac
import os
import time
import boto3
from rest_framework import permissions, status, authentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from .models import FileItem
from django.conf import settings





class FileUploadCompleteHandler(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]
    
    def post(self, request, *args, **kwargs):
        file_id = request.POST.get('file')
        size = request.POST.get('fileSize')
        data = {}
        type_ = request.POST.get('fileType')
        if file_id:
            obj = FileItem.objects.get(id=int(file_id))
            obj.size = int(size)
            obj.uploaded = True
            obj.type = type_
            obj.save()
            data['id'] = obj.id
            data['saved'] = True
        return Response(data, status=status.HTTP_200_OK)

class FilePolicyAPI(APIView):
    """
    This view is to get the AWS Upload Policy for our s3 bucket.
    What we do here is first create a FileItem object instance in our
    Django backend. This is to include the FileItem instance in the path
    we will use within our bucket as you'll see below.
    """
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]


    def post(self, request, *args, **kwargs):
        """
        The initial post request includes the filename
        and auth credientails. In our case, we'll use
        Session Authentication but any auth should work.
        """
        filename_req = request.data.get('filename')
        if not filename_req:
                return Response({"message": "A filename is required"}, status=status.HTTP_400_BAD_REQUEST)
        policy_expires = int(time.time()+5000)
        user = request.user
        username_str = str(request.user.username)
        """
        Below we create the Django object. We'll use this
        in our upload path to AWS. 

        Example:
        To-be-uploaded file's name: Some Random File.mp4
        Eventual Path on S3: <bucket>/username/2312/2312.mp4
        """
        file_obj = FileItem.objects.create(user=user, name=filename_req)
        file_obj_id = file_obj.id
        upload_start_path = "{username}/{file_obj_id}/".format(
                    username = username_str,
                    file_obj_id=file_obj_id
            )       
        _, file_extension = os.path.splitext(filename_req)
        filename_final = "{file_obj_id}{file_extension}".format(
                    file_obj_id= file_obj_id,
                    file_extension=file_extension

                )
        """
        Eventual file_upload_path includes the renamed file to the 
        Django-stored FileItem instance ID. Renaming the file is 
        done to prevent issues with user generated formatted names.
        """
        final_upload_path = "{upload_start_path}{filename_final}".format(
                                 upload_start_path=upload_start_path,
                                 filename_final=filename_final,
                            )
        if filename_req and file_extension:
            """
            Save the eventual path to the Django-stored FileItem instance
            """
            file_obj.path = final_upload_path
            file_obj.save()

        policy_document_context = {
            "expire": policy_expires,
            "bucket_name": settings.S3["AWS_UPLOAD_BUCKET"],
            "key_name": "",
            "acl_name": "private",
            "content_name": "",
            "content_length": 524288000,
            "upload_start_path": upload_start_path,
            }
        policy_document = """
        {"expiration": "2019-01-01T00:00:00Z",
          "conditions": [ 
            {"bucket": "%(bucket_name)s"}, 
            ["starts-with", "$key", "%(upload_start_path)s"],
            {"acl": "%(acl_name)s"},
            
            ["starts-with", "$Content-Type", "%(content_name)s"],
            ["starts-with", "$filename", ""],
            ["content-length-range", 0, %(content_length)d]
          ]
        }
        """ % policy_document_context
        aws_secret = str.encode(settings.S3["AWS_UPLOAD_SECRET_KEY"])
        policy_document_str_encoded = str.encode(policy_document.replace(" ", ""))
        url = 'https://{bucket}.s3-{region}.amazonaws.com/'.format(
                        bucket=settings.S3["AWS_UPLOAD_BUCKET"],  
                        region=settings.S3["AWS_UPLOAD_REGION"],
                        )
        policy = base64.b64encode(policy_document_str_encoded)
        signature = base64.b64encode(hmac.new(aws_secret, policy, hashlib.sha1).digest())
        data = {
            "policy": policy,
            "signature": signature,
            "key": settings.S3["AWS_UPLOAD_ACCESS_KEY_ID"],
            "file_bucket_path": upload_start_path,
            "file_id": file_obj_id,
            "filename": filename_final,
            "url": url,
            "username": username_str,
        }
        return Response(data, status=status.HTTP_200_OK)


# #S3
# S3 = {
#     "AWS_UPLOAD_BUCKET"         : get_secret("AWS_UPLOAD_BUCKET"),
#     "AWS_UPLOAD_USERNAME"       : get_secret("AWS_UPLOAD_USERNAME"),
#     "AWS_UPLOAD_GROUP"          : get_secret("AWS_UPLOAD_GROUP"),
#     "AWS_UPLOAD_REGION"         : get_secret("AWS_UPLOAD_REGION"),
#     "AWS_UPLOAD_ACCESS_KEY_ID"  : get_secret("AWS_UPLOAD_ACCESS_KEY_ID"),
#     "AWS_UPLOAD_SECRET_KEY"     : get_secret("AWS_UPLOAD_SECRET_KEY"),
# }

class FileToURL(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]

    S3= settings.S3
    s3_client = boto3.client(
        's3',
        aws_access_key_id={S3["AWS_UPLOAD_ACCESS_KEY_ID"]},
        aws_secret_access_key={S3["AWS_UPLOAD_SECRET_KEY"]}
    )

    def post(self, request):
        for file in request.FILES.getlist('file'):
            self.s3_client.upload_fileobj(
                file,
                {S3["AWS_UPLOAD_BUCKET"]},
                file.name,
                ExtraArgs={
                    "ContentType": file.content_type
                }
            )

        return Response({'files': file}, status=200)