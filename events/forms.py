from django.db import models
from django.db.models import fields
from django.forms import widgets
from .models import Event 
from django import forms 

class DateInput(forms.DateInput):
    input_type = 'date'


class EventForm(forms.ModelForm):
    class Meta:
        model = Event  
        fields = '__all__'
        widgets = {
            'start_time': DateInput(), 
            'end_time': DateInput()
        } 

       
        

