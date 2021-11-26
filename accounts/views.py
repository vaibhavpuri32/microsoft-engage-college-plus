from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
import rest_framework
from rest_framework import response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.fields import JSONField
from rest_framework.response import Response
from rest_framework import serializers, status
from .serializers import AccountCreationSerializer, UserSerializer
from rest_framework.permissions import AllowAny
from django.forms.models import model_to_dict
import json

@api_view(['POST'])
@permission_classes([AllowAny])
def registerUser(request):
    serializer = AccountCreationSerializer(data=request.data)
    if serializer.is_valid():
        print('Account Successfully Created')
        serializer.save()
        return Response({'message': 'Account Successfully Created'})
    else:
        return Response(serializer.errors)


@api_view(['GET'])
def me(request):
    # print(request.user)
    # print(request.user.first_name)
    # print(request.user.last_name)
    # print(request.user.email)
    # print(request.user.username)
    return Response({ "id" : request.user.id,
                    "username": request.user.username,
                     "first_name": request.user.first_name,
                     "last_name": request.user.last_name,
                     "email": request.user.email, 
                      "is_teacher": request.user.groups.filter(name="teachers").exists()
                     })
    # dict_obj = model_to_dict(request.user)
    # serialized = json.dumps(dict_obj) 
    # return serialized 
@api_view(['GET'])
def getUserData(request, user_id):
    user = User.objects.all() 
    filtered_user = user.filter(id = user_id)[0] 
    serializer = UserSerializer(filtered_user) 
    return JsonResponse(serializer.data)

