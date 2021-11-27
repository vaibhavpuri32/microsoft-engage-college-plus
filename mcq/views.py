from django.http import response
from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *


class QuestionView(ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class TestView(ModelViewSet):
    serializer_class = TestSerializer
    queryset = Test.objects.all()


# def create_test(request):
#     serializer = UserAssesmentSerializer(data=request.data)
#     if serializer.is_valid():
#         print('Account Successfully Created')
#         serializer.save()
#         return Response({'message': 'Test Created'})


@api_view(["POST"])
def start_test(request):
    serializer = UserAssesmentSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
        return Response({"message": "You have started the test"})
    else:
        return Response({"message": "Invalid"})


@api_view(["GET"])
def calculate_user_score(request, pk):
    user_assesment = UserAssesment.objects.filter(
        student=request.user.id, test=pk)[0]
    return Response({"score": user_assesment.total_score()})

@api_view(["POST"])
def update_answer(request):
    test = request.data["test"]
    answer_list = request.data["answer_list"]  
    user_assesment = UserAssesment.objects.filter(
        student=request.user.id, test=test)[0]
    user_assesment.update_answer(answer_list)
    return Response({"message" : "You have succeded"})


