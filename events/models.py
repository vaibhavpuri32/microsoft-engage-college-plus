from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=30) 
    start_time = models.DateField() 
    end_time = models.DateField() 
    description = models.TextField(max_length=600)
