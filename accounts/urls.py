from django.urls import path
from . import models, views
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('register', views.registerUser, name="register-user"),
    path('login/', obtain_auth_token)
]
