from django.db import models
from django.contrib.auth.models import User


class Teacher(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=100)
    phone = models.BigIntegerField()
    user=models.OneToOneField(User,on_delete=models.CASCADE, null=True)    


    def __str__(self):
        return f'{self.name} {self.email} {self.phone}'
