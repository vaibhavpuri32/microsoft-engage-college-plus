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
@csrf_exempt
def start_test(request):
    print(request.data)
    print(request.user)
    serializer = UserAssesmentSerializer(data=request.data)
    if(serializer.is_valid()):
        if len(UserAssesment.objects.filter( student=request.user.id, test=request.data["test"])) == 0: 
            serializer.save()
        else:
            userassesment = UserAssesment.objects.filter( student=request.user.id, test=request.data["test"])[0]
            if userassesment.submitted : 
                return Response({"message": "Test Taken"})
        return Response({"message": "You have started the test"})
    else:
        print("Invalid")
        return Response({"message": "Invalid"})


@api_view(["GET"]) 
@csrf_exempt
def calculate_user_score(request, pk):
    user_assesment = UserAssesment.objects.filter(
        student=request.user.id, test=pk)[0]
    return Response({"score": user_assesment.total_score()})

@api_view(["POST"]) 
@csrf_exempt
def update_answer(request):
    test = request.data["test"]
    answer_list = request.data["answer_list"]  
    user_assesment = UserAssesment.objects.filter(
        student=request.user.id, test=test)[0]
    user_assesment.update_answer(answer_list)
    print(user_assesment.answer_list)
    user_assesment.submitted = True
    user_assesment.save()
    return Response({"message" : "You have succeded"})

@api_view(["GET"]) 
@csrf_exempt
def get_questions(request,test_id): 
    questions = Question.objects.filter(test = test_id).order_by("id") 
    serializer = QuestionSerializer(questions, many=True)
    return JsonResponse(serializer.data, safe=False)



