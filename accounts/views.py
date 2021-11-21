from django.http.response import HttpResponse
from django.shortcuts import render
import rest_framework
from rest_framework import response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import serializers, status
from .serializers import AccountCreationSerializer
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
    return Response({"username": request.user.username,
                     "first_name": request.user.first_name,
                     "last_name": request.user.last_name,
                     "email": request.user.email})
    # dict_obj = model_to_dict(request.user)
    # serialized = json.dumps(dict_obj) 
    # return serialized
