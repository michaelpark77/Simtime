from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = Account
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # password = validated_data.pop('password', None)
        password = validated_data['password']
        account = self.Meta.model(**validated_data)  
        # as long as the fields are the same, we can just use this
        # or Use : instance = Account(email=validated_data['email'],username=validated_data['username'])
        if password is not None:
            account.set_password(password)
        account.save() #deserialized : json -> object(Account 모델 타입)으로 변환된 객체를 불러온다.
        return account



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

