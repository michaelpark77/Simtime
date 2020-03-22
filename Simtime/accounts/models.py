from django.db import models
from django.contrib.auth.models import AbstractUser

class Gender(models.TextChoices):
    Male = 'Male'
    Female = 'Female'
    Custom = "Custom"

# Create your models here.
class Account(AbstractUser):
        date_of_birth = models.DateField()
        gender = models.CharField(max_length=6, choices=Gender.choices, default=Gender.Custom)
