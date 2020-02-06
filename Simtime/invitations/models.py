from django.db import models
from django.contrib.postgres.fields import ArrayField
# from django.contrib.auth.models import User

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
    host = models.CharField(max_length=50, unique=False, blank=False)
    status = models.CharField(max_length=50,
                              choices=EventStatus.choices,
                              default=EventStatus.OPEN,
                              blank=True,
                              null=True)

    event_at = models.DateTimeField(blank=True, null=True)
    guests = ArrayField(models.CharField(max_length=50))
    message = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

# Create your models here.
