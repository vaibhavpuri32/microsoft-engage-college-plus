from django.db import models
from django.contrib.auth.models import User


class Test(models.Model):
    title = models.CharField(max_length=30)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)


class Question(models.Model):
    title = models.CharField(max_length=200)
    c1 = models.CharField(max_length=200, default='')
    c2 = models.CharField(max_length=200, default='')
    c3 = models.CharField(max_length=200, default='')
    c4 = models.CharField(max_length=200, default='')
    correct_answer = models.CharField(max_length=200, default='c1')
    max_score = models.IntegerField(default=0)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class UserAssesment(models.Model): 
    student = models.ForeignKey(User, on_delete=models.CASCADE) 
    test = models.ForeignKey(Test, on_delete=models.CASCADE) 
    answer_list = models.CharField(max_length=100) 
    submitted = models.BooleanField(default=False)

    def total_score(self):
        question_list = Question.objects.filter(test = self.test.id).order_by("id") 
        answer_list = self.answer_list.split(',')  
        if len(question_list) != len(answer_list):
            return 0 
        total_score = 0
        for id,question in enumerate(question_list):
            if answer_list[id] == question.correct_answer:
                total_score = total_score + question.max_score
        return total_score
         
    def update_answer(self, selected_option):
        self.answer_list = selected_option 

    
## 1- each model 
## test and question - model viewset 
## Creating a userassesment Object,       
        
    







