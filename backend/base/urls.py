from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter,SimpleRouter


router = SimpleRouter()
router.register('jobs' , views.JobViewSet , basename="jobs")


urlpatterns = router.urls

# urlpatterns = [
#     path('jobs/' , views.getJobs , name="jobs"),
#     # path('jobs/<str:pk>/' , views.getJob , name="job"),
# ]