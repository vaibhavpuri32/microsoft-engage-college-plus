from django.urls import path
from . import api
from .api import views
urlpatterns = [
  path('', api.views.events_list, name = "all-events/"),
  path('<int:pk>', api.views.event_operations, name = "event-operations/")
  #path('newevent/', views.new_event, name = "new-event-form")
]