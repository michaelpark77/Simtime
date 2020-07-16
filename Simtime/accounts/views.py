from rest_framework.renderers import JSONRenderer
from rest_framework import permissions, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_simplejwt.models import TokenUser
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView

from .tokenSerializers import MyTokenObtainPairSerializer, MyTokenVerifySerializer
from .serializers import AccountSerializer, UserSerializer, RelationshipSerializer, GroupSerializer, RGMapSerializer
from .models import Account, Relationship, FriendGroup, Relationship_FriendGroup_MAP



#tokens
class ObtainTokenPair(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

# Create
class AccountCreateAPI(APIView):
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


#Account
class AccountDetailAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get_object(self, pk):
        try:
            return Account.objects.get(pk=pk)
        except Account.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        account = self.get_object(pk)
        serializer = AccountSerializer(account)
        return Response(serializer.data)

    def put(self, request, pk):
        account = self.get_object(pk)
        serializer = AccountSerializer(account, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        account = self.get_object(pk)
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AccountSearchAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, field, keyword):
        query = {"%s__contains" % field: keyword }
        results = Account.objects.filter(**query).order_by('username')
        data = []
        for item in results:
             serializer = UserSerializer(item)
             data.append(serializer.data)

        return Response(data)


class AccountLoadAPI(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

    def get_queryset(self):
        account = self.get_object()
        serializer = UserSerializer(account)
        print(serializer.data)
        return Response(serializer.data)


class TokenVerify(TokenVerifyView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenVerifySerializer

    def get_object(self):
        return self.request.user

    def get_queryset(self):
        account = self.get_object()
        serializer = UserSerializer(account)
        print(serializer.data)
        return Response(serializer.data)

#Relationship
class RelationshipAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        serializer = RelationshipSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save(account=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):     
        res = self.request.user.friends.select_related('friend')
        friends = []
        for i in res:
            friends.append(i.friend)
        serializer = UserSerializer(friends, many=True)
        return Response(serializer.data)

    # def put(self, request, pk):
    #     relationship = self.get_object(pk)
    #     serializer = RelationshipSerializer(relationship, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, request, pk):
    #     relationship = self.get_object(pk)
    #     relationship.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)



#Relationship-Group
class RGMapAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        print("RGMap", request.data)
        serializer = RGMapSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#add,get group
class GroupAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self, pk):
        try:
            return FriendGroup.objects.get(pk=pk)
        except FriendGroup.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = GroupSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        groups = self.request.user.FriendGroups.all()
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data)

#groupDetail
class GroupDetailAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self, pk):
        try:
            return FriendGroup.objects.get(pk=pk)
        except FriendGroup.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        group = self.get_object(pk)
        serializer = GroupSerializer(group)
        return Response(serializer.data)

    def delete(self, request, pk):
        group = self.get_object(pk)
        group.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

