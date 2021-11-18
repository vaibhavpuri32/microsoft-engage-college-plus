from django.contrib import admin
from .models import Teacher
# Register your models here.
class TeacherAdmin(admin.ModelAdmin):
  list_display = ('name', 'email', 'phone')

admin.site.register(Teacher,TeacherAdmin)