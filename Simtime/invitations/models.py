from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.conf import settings
# from django.contrib.auth.models import User as User

# Model의 관계
# https://nachwon.github.io/django-relationship/


def user_path(instance, filename):  # instance는 Photo 클래스의 객체, filename은 업로드할 파일의 파일이름
    from random import choice   # string으로 나온 결과에서 하나의 문자열만 뽑아냄
    import string               # 무작위 문자열을 뽑아내기 위한 용도
    arr = [choice(string.ascii_letters) for _ in range(8)]  # 무작위로 8글자를 뽑아줌
    pid = filename.split('.')[0] + "-" + (''.join(arr))       # 파일 아이디생성
    extension = filename.split('.')[-1]  # 파일이름으로부터 확장자명가져오기
    # ex) honux/asfqqwer.png
    return '%s/%s.%s' % (instance.host, pid, extension)

# Modify Table Name


class CustomizedModelBase(models.base.ModelBase):
    def __new__(cls, name, bases, attrs, **kwargs):
        if name != "CustomizedModel":
            class MetaB:
                db_table = name

            attrs["Meta"] = MetaB

        r = super().__new__(cls, name, bases, attrs, **kwargs)
        return r


class CustomizedModel(models.Model, metaclass=CustomizedModelBase):
    class Meta:
        abstract = True


# Create your models here.
class EventStatus(models.TextChoices):
    CLOSED = 'CLOSED'
    OPEN = 'OPEN'
    PENDING = 'PENDING'


class Attendance(models.TextChoices):
    Yes = 'Yes'
    No = 'No'
    Unknown = "Waiting for a response"


class Event(CustomizedModel):

    # 추후에 EvnetType 테이블 정의, ForeignKey
    objects = models.Manager()
    # related_name: User가 가지고 있는 invitations들을 조회, user.event.all()이 가능해짐
    host = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='events')
    event_name = models.CharField(max_length=200, blank=False)
    event_at = models.DateTimeField(blank=False)
    status = models.CharField(max_length=10,
                              choices=EventStatus.choices,
                              default=EventStatus.OPEN)

    message = models.TextField(blank=True, null=True)
    photo = models.ImageField(
        # upload_to='photos/events/%Y%m%d', default='photos/no_image.png'
        upload_to=user_path, default='no_image.png')

    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
class Invitation(CustomizedModel):
    objects = models.Manager()
    event = models.ForeignKey(
        Event, on_delete=models.CASCADE, related_name='invitations')
    guest = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='invitations')
    attendance = models.CharField(
        max_length=25, choices=Attendance.choices, default=Attendance.Unknown)
