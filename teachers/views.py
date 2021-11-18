from django.shortcuts import render
from .models import Teacher
from .forms import TeacherForm
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
# Create your views here.


def new_teacher(request):
    form = TeacherForm()
    return render(request, 'teachers/new_teacher.html', {'form': form})


def index(request):
    if(request.method == 'POST'):
        form = TeacherForm(request.POST)
        if(form.is_valid()):
            # user = form.save()

            # Teacher.objects.create(user=user)
            user = User.objects.create(
                email=form.cleaned_data['email'],
                username=form.cleaned_data['email'])
            group = Group.objects.get(name='Teacher')
            user.groups.add(group)
            user_profile = Teacher.objects.create(user=user,
                                                  name=form.cleaned_data['name'],
                                                  email=form.cleaned_data['email'],
                                                  phone=form.cleaned_data['phone'])

    teachers = Teacher.objects.all()
    return render(request, 'teachers/index.html', {'teachers': teachers})
