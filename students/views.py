from django.shortcuts import render
from .models import Student
from .forms import StudentForm
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
# Create your views here.


def new_student(request):
    form = StudentForm()
    return render(request, 'students/new_student.html', {'form': form})


def index(request):
    if(request.method == 'POST'):
        form = StudentForm(request.POST)
        if(form.is_valid()):
            # user = form.save()

            # Student.objects.create(user=user)
            user = User.objects.create(
                email=form.cleaned_data['email'],
                username=form.cleaned_data['email'])
            group = Group.objects.get(name='Student')
            user.groups.add(group)
            user_profile = Student.objects.create(user=user,
                                                  name=form.cleaned_data['name'],
                                                  email=form.cleaned_data['email'],
                                                  phone=form.cleaned_data['phone'])

    students = Student.objects.all()
    #json.dump(students)
    return render(request, 'students/index.html', {'students': students})

