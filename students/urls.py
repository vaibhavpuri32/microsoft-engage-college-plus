from django.urls import path
from . import views
urlpatterns = [
  path('', views.index, name = "all-students/"), # our-domain.com/meetups 
  path('newform/', views.new_student, name = "new-student-form")
]