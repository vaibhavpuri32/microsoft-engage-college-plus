from django.contrib import admin
from .models import Assignment, Submission
# Register your models here.

class AssignmentAdmin(admin.ModelAdmin):
  list_display = ('title', 'deadline', 'author') 

class  SubmissionAdmin(admin.ModelAdmin):
  list_display = ('author', 'assignment')
  
admin.site.register(Assignment,AssignmentAdmin) 
admin.site.register(Submission,SubmissionAdmin)