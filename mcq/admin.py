from django.contrib import admin
from .models import *
# Register your models here.


class UserAssesmentAdmin(admin.ModelAdmin):
    pass

class TestAdmin(admin.ModelAdmin):
    pass

class QuestionAdmin(admin.ModelAdmin):
    pass

admin.site.register(Question, QuestionAdmin) 
admin.site.register(Test, TestAdmin) 
admin.site.register(UserAssesment, UserAssesmentAdmin)
