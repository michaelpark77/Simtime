from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from imagekit.models import ImageSpecField
from imagekit.processors import Thumbnail


def user_path(instance, filename):  # instance는 Photo 클래스의 객체, filename은 업로드할 파일의 파일이름
    from random import choice   # string으로 나온 결과에서 하나의 문자열만 뽑아냄
    import string               # 무작위 문자열을 뽑아내기 위한 용도
    arr = [choice(string.ascii_letters) for _ in range(8)]  # 무작위로 8글자를 뽑아줌
    pid = filename.split('.')[0] + "-" + (''.join(arr))       # 파일 아이디생성
    extension = filename.split('.')[-1]  # 파일이름으로부터 확장자명가져오기
    # ex) honux/asfqqwer.png
    return '%s/profile/%s.%s' % (instance.host, pid, extension)


class Gender(models.TextChoices):
    Male = 'male'
    Female = 'female'
    Custom = "custom"  # Custom
    Unknwon = "unknwon"

# Create your models here.


class Account(AbstractUser):
    gender = models.CharField(
        max_length=7, choices=Gender.choices, default=Gender.Unknwon)
    birthday = models.CharField(max_length=4, null=True)  # 0906
    brthyear = models.CharField(max_length=4, null=True)  # 1990
    # +00 00-0000-0000 또는 +00 00 0000 0000
    phone_number = models.CharField(max_length=16, null=True)
    nickname = models.CharField(max_length=16, null=True)
    profile_image = models.ImageField(
        upload_to=user_path, default='user_basic.png')
    thumbnail_image = ImageSpecField(  # CACHE에 저장된다. (object_create시가 아니라 필요할 때)
        source='profile_image',
        processors=[Thumbnail(100, 100)],  # 처리할 작업 목룍
        format='JPEG',					# 최종 저장 포맷
        options={'quality': 60}
    )  		# 저장 옵션


class FriendGroup(models.Model):
    account = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='FriendGroups')
    group_name = models.CharField(max_length=16, null=False, blank=False)


# 서로 친구맺기는 구현 전.
class Relationship(models.Model):
    account = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='friends')
    friend = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='friendOf')
    # friends can block the user. (=수신동의)
    subscribe = models.BooleanField(null=False, default=True)   # 수신여부
    dispatch = models.BooleanField(
        null=False, default=True)    # 발신여부 (false면 보내지않음)
    is_friend = models.BooleanField(null=False, default=True)

    # Status = 0;본인 1;request 2.confirm 3; A blocks B 4;B blocks A 5; block each others.

    class Meta:
        constraints = [models.UniqueConstraint(
            fields=['account', 'friend'], name='af_compositeKey')]


# 한 명의 친구는 여러 그룹을 가질 수 있음
class Relationship_FriendGroup_MAP(models.Model):  # Which Group
    group = models.ForeignKey(
        FriendGroup, on_delete=models.CASCADE, related_name='relationships')
    relationship = models.ForeignKey(
        Relationship, on_delete=models.CASCADE, related_name='groups')

    class Meta:
        constraints = [models.UniqueConstraint(
            fields=['group', 'relationship'], name='gr_compositeKey')]
