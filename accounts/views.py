from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, status
from .serializers import AccountCreationSerializer


@api_view(['POST'])
def registerUser(request):
    serializer = AccountCreationSerializer(data=request.data)
    if serializer.is_valid():
        print('Account Successfully Created')
        serializer.save()
        return Response({'message': 'Account Successfully Created'})
    else:
        return Response(serializer.errors)
