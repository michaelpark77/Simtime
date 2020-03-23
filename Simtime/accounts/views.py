from django.shortcuts import render
from rest_framework import permissions
# djsr/authentication/views.py
from rest_framework_simplejwt.views import TokenObtainPairView
from .tokenSerializers import MyTokenObtainPairSerializer

class ObtainTokenPair(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

    