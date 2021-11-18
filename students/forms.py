from django.db import models
from django.db.models import fields
from .models import Student 
from django import forms 

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student 
        fields =['email','name','phone']
        

