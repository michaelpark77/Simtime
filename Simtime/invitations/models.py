from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User


# Model의 관계
# https://nachwon.github.io/django-relationship/


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


# class Invitation(CustomizedModel):
#     objects = models.Manager()
#     host = models.ForeignKey(
#         User, related_name="invitations", max_length=50,  on_delete=models.CASCADE, null=True)
#     status = models.CharField(max_length=50,
#                               choices=EventStatus.choices,
#                               default=EventStatus.OPEN,
#                               blank=True,
#                               null=True)

#     event_at = models.DateTimeField(blank=True, null=True)
#     guests = ArrayField(models.CharField(max_length=50))
#     message = models.CharField(max_length=500, blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)


class Event(CustomizedModel):
    # 추후에 EvnetType 테이블 정의, ForeignKey
    objects = models.Manager()
    # related_name: User가 가지고 있는 invitations들을 조회, user.event.all()이 가능해짐
    host = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event')
    event_name = models.CharField(max_length=200, blank=False)
    event_at = models.DateTimeField(blank=False)
    status = models.CharField(max_length=10,
                              choices=EventStatus.choices,
                              default=EventStatus.OPEN)

    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
class Invitation(CustomizedModel):
    objects = models.Manager()
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name = 'invitation')
    guest = models.ForeignKey(User, on_delete=models.CASCADE)
    attendance = models.CharField(max_length=25, choices=Attendance.choices, default=Attendance.Unknown)
