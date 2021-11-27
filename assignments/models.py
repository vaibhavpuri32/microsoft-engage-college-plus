from django.db import models
from django.contrib.auth.models import User
import os


def get_upload_path(instance, filename):
    return os.path.join("uploads",
        "assignment_%d" % instance.assignment.id, instance.author.username + "." + filename.split(".")[-1])


class Assignment(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    deadline = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'


class Submission(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.FileField(upload_to=get_upload_path)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.author} {self.assignment}  {self.answer}'



