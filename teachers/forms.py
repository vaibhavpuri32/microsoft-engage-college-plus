from django.db import models
from django.db.models import fields
from .models import Teacher 
from django import forms 

class TeacherForm(forms.ModelForm):
    class Meta:
        model = Teacher 
        fields =['email','name','phone']
        

