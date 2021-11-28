from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.viewsets import ModelViewSet
from .serializers import AssignmentSerializer, SubmissionSerializer
from .models import Submission, Assignment 
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


class AssignmentView(ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


class SubmissionView(ModelViewSet):
    serializer_class = SubmissionSerializer
    queryset = Submission.objects.all()
    def filter_submissions(request, assignment_id):
        submissions = Submission.objects.all()
        filtered_submissions = submissions.filter(assignment=assignment_id)
        serializer = SubmissionSerializer(filtered_submissions, many = True)
        return JsonResponse(serializer.data, safe=False)
