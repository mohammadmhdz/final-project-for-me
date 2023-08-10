from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter,SimpleRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = SimpleRouter()
router.register('jobs' , views.JobViewSet , basename="jobs")
router.register('companies' , views.CompanyViewSet , basename="companies")
router.register('experience' , views.WorkExperienceViewSet , basename="experience")
router.register('education' , views.WorkExperienceViewSet , basename="education")
router.register('employees' , views.EmployeeViewSet , basename="employees")
router.register('apply' , views.ApplyViewSet , basename="apply")
router.register('verification' , views.VerificationViewSet , basename="verification")
router.register('skills' , views.SkillsViewSet , basename="skills")
router.register('categories' , views.CategoryViewSet , basename="categories")

# router.register('language' , views.LanguageViewSet , basename="language")
# router.register('companies' , views.getUsers , basename="users")
# router.register('login' , views.MyTokenObtainPairView , basename="token_obtain_pair")
# router.register('users/login', TokenObtainPairView.as_view(), basename='token_obtain_pair')
urlpatterns = router.urls


urlpatterns += [
     path('login/', views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    #  path('users/', views.getUsers, name="users"),
     path('register/', views.registerUser, name='register'),
    #  path('employees/', views.getEmployees, name="Employees"),
]

