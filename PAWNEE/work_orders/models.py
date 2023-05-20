from django.db import models

# Create your models here.


class Work_Order(models.Model):
    title = models.CharField(
        max_length=255, unique=True, blank=False, null=False)
