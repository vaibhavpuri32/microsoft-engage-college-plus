from django.shortcuts import render
from .forms import EventForm 
from .models import Event  
# Create your views here.

def new_event(request):
    form = EventForm()
    return render(request, 'events/new-event.html', {'form': form})



def index(request): 
    if(request.method == 'POST'):
        form = EventForm(request.POST)
        form.save()    
    events = Event.objects.all()
    return render(request, 'events/index.html', {'events' : events}) 
