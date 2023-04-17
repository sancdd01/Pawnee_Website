from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Gov_Employee(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255, null=False, blank=False)
    department = models.CharField(max_length=255, null=False, blank=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name} | {self.email}"
