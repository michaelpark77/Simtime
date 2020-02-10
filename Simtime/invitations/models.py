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


class Invitation(CustomizedModel):
    objects = models.Manager()
    host = models.ForeignKey(
        User, related_name="invitations", max_length=50,  on_delete=models.CASCADE, null=True)
    status = models.CharField(max_length=50,
                              choices=EventStatus.choices,
                              default=EventStatus.OPEN,
                              blank=True,
                              null=True)

    event_at = models.DateTimeField(blank=True, null=True)
    guests = ArrayField(models.CharField(max_length=50))
    message = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


# class Event(CustomizedModel):
#     objects = models.Manager()
#     # related_name: User가 가지고 있는 invitations들을 조회, user.invitations.all()이 가능해짐
#     event_at = models.DateTimeField(blank=True, null=True)
#     status = models.CharField(max_length=50,
#                               choices=EventStatus.choices,
#                               default=EventStatus.OPEN,
#                               blank=True,
#                               null=True)
#     message = models.CharField(max_length=500, blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     guests = models.ManyToManyField(User,
#                                     through='Invitation',
#                                     through_fields=('Event', 'guest_user',))


# # Create your models here.
# class Invitation(CustomizedModel):
#     objects = models.Manager()
#     host = models.ForeignKey(User, on_delete=models.CASCADE)
#     event = models.ForeignKey(Event, on_delete=models.CASCADE)
#     guest_user = models.ForeignKey(User, on_delete=models.CASCADE)
