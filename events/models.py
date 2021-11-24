from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=30) 
    start_time = models.DateTimeField() 
    end_time = models.DateTimeField()
    description = models.TextField(max_length=600)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
