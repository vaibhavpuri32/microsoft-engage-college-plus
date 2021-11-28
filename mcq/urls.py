from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register("question", views.QuestionView)
router.register("test", views.TestView)
urlpatterns = [
    path("", include(router.urls)),
    path("start-test", views.start_test, name="start-test/"),
    path('update-answer', views.update_answer, name="update-answer/"), 
    path('get-questions/<int:test_id>',views.get_questions, name = 'get-questions'),
    path('calculate-user-score/<int:pk>', views.calculate_user_score, name="calculate-user-score/")
    #path('newevent/', views.new_event, name = "new-event-form")
]
