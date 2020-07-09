from rest_framework.renderers import JSONRenderer
from rest_framework import permissions, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_simplejwt.models import TokenUser
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView

from .tokenSerializers import MyTokenObtainPairSerializer, MyTokenVerifySerializer
from .serializers import AccountSerializer, UserSerializer,RelationshipSerializer
from .models import Account, Relationship



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

    # def post(self, request, format='json'):
    #     serializer = RelationshipSerializer(data=request.data)
    #     if serializer.is_valid():
    #         relationship = serializer.save()
    #         if relationship:
    #             json = serializer.data
    #             response = Response(json, status=status.HTTP_201_CREATED)    
    #             return response
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request):
        print("gre", request.data)
        serializer = RelationshipSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save(account=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    
    def get_object(self, pk):
        try:
            return Relationship.objects.get(pk=pk)
        except Relationship.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        relationship = self.get_object(pk)
        serializer = RelationshipSerializer(relationship)
        return Response(serializer.data)

    def put(self, request, pk):
        relationship = self.get_object(pk)
        serializer = RelationshipSerializer(relationship, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        relationship = self.get_object(pk)
        relationship.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)