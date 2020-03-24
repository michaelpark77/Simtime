from rest_framework.renderers import JSONRenderer
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView

from .tokenSerializers import MyTokenObtainPairSerializer
from .serializers import AccountSerializer


#tokens
class ObtainTokenPair(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

#Account
class AccountCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = AccountSerializer(data=request.data)

        if serializer.is_valid():
            account = serializer.save()
            if account:
                json = serializer.data
                response = Response(json, status=status.HTTP_201_CREATED)
                # username = serializer.data['username']
                # response.set_cookie('username', username, httponly=True, max_age=3600)    
                return response
        

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)