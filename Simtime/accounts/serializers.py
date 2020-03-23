from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Account


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        norm_email = value.lower()

        if value == "":
            raise serializers.ValidationError(
                "This field may not be blank.")

        if Account.objects.filter(email=norm_email).exists():
            raise serializers.ValidationError("Not unique email")
        return norm_email

    def create(self, validate_data):
        user = Account.objects.create_user(
            validate_data['username'], validate_data['email'], validate_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
