from rest_framework import serializers
from .models import *


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class UserAssesmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAssesment
        fields = ('student', 'test')

    def save(self):
        user_assesment = UserAssesment(student=self.validated_data['student'],
                                       test=self.validated_data['test'], 
                                       answer_list = ""
                                       )
        num = len(Question.objects.filter(test=user_assesment.test))
        answer_list = ','*(num-1)
        user_assesment.answer_list = answer_list
        saved_assesment = user_assesment.save()
        return saved_assesment
    


    

