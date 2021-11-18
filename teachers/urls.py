from django.urls import path
from . import views
urlpatterns = [
  path('', views.index, name = "all-teachers/"), # our-domain.com/meetups 
  path('newform/', views.new_teacher, name = "new-teacher-form")
]