from django.urls import path
from . import models, views
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('register', views.registerUser, name="register-user"), 
    path('me/', views.me, name="me"),
    path('login/', obtain_auth_token),
    path("get-user-data/<int:user_id>", views.getUserData)
]
