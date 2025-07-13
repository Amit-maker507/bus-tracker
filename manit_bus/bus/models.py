from django.db import models
from django.contrib.auth.models import User

class Bus(models.Model):
    number = models.CharField(max_length=20)
    driver = models.ForeignKey(User, on_delete=models.CASCADE)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.number