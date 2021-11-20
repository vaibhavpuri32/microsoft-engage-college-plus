from django.contrib import admin
from .models import Event
# Register your models here.

class EventAdmin(admin.ModelAdmin):
  list_display = ('name', 'start_time', 'end_time')
  


admin.site.register(Event,EventAdmin)