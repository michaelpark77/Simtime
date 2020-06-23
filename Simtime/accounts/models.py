from django.db import models
from django.contrib.auth.models import AbstractUser


class Gender(models.TextChoices):
    Male = 'M'
    Female = 'F'
    Custom = "C"  # Custom

# Create your models here.


class Account(AbstractUser):
    date_of_birth = models.DateField(null=True)
    gender = models.CharField(
        max_length=6, choices=Gender.choices, default=Gender.Custom)
