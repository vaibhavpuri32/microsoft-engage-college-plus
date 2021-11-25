from django.db import router
from django.urls.conf import include
from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import AssignmentView, SubmissionView

router = DefaultRouter()
router.register("assignment", AssignmentView)
router.register("submission", SubmissionView)
urlpatterns = [
    path("", include(router.urls))
]
