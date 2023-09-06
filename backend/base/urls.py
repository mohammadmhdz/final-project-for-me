from django.urls import path
from .views.Employeeviews import EmployeeUpdateView
from .views import Employeeviews , Employeedeailsview , Employerviews , views
from rest_framework.routers import DefaultRouter,SimpleRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,


)










router = SimpleRouter()
router.register('jobs' , Employerviews.JobViewSet , basename="jobs")
router.register('companies' , Employerviews.CompanyViewSet , basename="companies")
router.register('experience' , Employeedeailsview.WorkExperienceViewSet , basename="experience")
router.register('education' , Employeedeailsview.EducationViewSet , basename="education")
router.register('employees' , Employeeviews.EmployeeViewSet , basename="employees")
router.register('apply' , views.ApplyViewSet , basename="apply")
router.register('verification' , Employerviews.VerificationViewSet , basename="verification")
router.register('skills' , views.SkillsViewSet , basename="skills")
router.register('categories' , views.CategoryViewSet , basename="categories")
router.register('language' , Employeedeailsview.LanguageViewSet , basename="language")
router.register('reviews' , views.ReviewViewSet , basename="reviews")
router.register('portfolio' , Employeedeailsview.PortfolioViewSet , basename="portfolio")
router.register('gallery' , Employeedeailsview.GalleryViewSet , basename="gallery")
router.register('image' , Employeedeailsview.ImageViewSet , basename="image")
router.register('users' , views.UserViewSet , basename="users")



urlpatterns = router.urls


urlpatterns += [
     path('login/', views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    #  path('user/register/', views.registerUser, name='register'),
     path('dropdown/',views.Dropdown, name='dropdown'),
     path('getusers/',views.getUsers, name='getusers'),
     path('register/',views.registerUser, name='register'),
     path('employees/<int:pk>/update/', EmployeeUpdateView.as_view(), name='employee-update'),
      

]

   



