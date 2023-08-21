from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework import status 
from  django.shortcuts import render 
from django.shortcuts import get_object_or_404
from rest_framework.request import Request
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Job , Company , Employee , WorkExperience , Education , Language  , Verification , Skills , Category , Review , Request
from django.contrib.auth.models import User
from .serializer import JobSerializer , CompanySerializer , UserSerializer, UserSerializerWithToken ,EmployeeSerializer , EducationSerializer , ExperienceSerializer ,LanguageSerializer ,RequestSerializer , VerificationSerializer , SkillSerializer , CategorySerializer , ReviewSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status


# Create your views here


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer





@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'خطا': 'این ایمیل قبلا ثبت نام شده است'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)




@api_view(['GET'])
# @permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)





@api_view(['GET'])
# @permission_classes([IsAdminUser])
def getEmployees(request):
    Employees = Employee.objects.all()
    serializer = EmployeeSerializer(Employees, many=True)
    return Response(serializer.data)









class JobViewSet(viewsets.ViewSet):
    def list(self,request):
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs , many = True)
        return Response(serializer.data)
    

        
    def retrieve(self, request, pk=None):
        jobs = Job.objects.all()
        job = get_object_or_404(jobs, pk=pk)
        serializer = JobSerializer(job)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        job = get_object_or_404(Job.objects.all(), pk=pk)
        serializer = JobSerializer(job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        job = Job.objects.get(pk=id)
        job.delete()
        return Response({'msg':'Data Deleted'})
    

    @action(detail=True, methods=['get'], name='get applies')
    def applies(self,request, pk):
        job = Job.objects.get(pk=pk)
        applies = job.request_set.all()
        serializer =RequestSerializer(applies ,many=True )
        return Response(serializer.data)
    

class CompanyViewSet(viewsets.ViewSet):
    def list(self,request):
        Companies = Company.objects.all()
        serializer = CompanySerializer(Companies , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        Companies = Company.objects.all()
        company = get_object_or_404(Companies, pk=pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        Company = get_object_or_404(Company.objects.all(), pk=pk)
        serializer = CompanySerializer(Company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        Company = Company.objects.get(pk=id)
        Company.delete()
        return Response({'msg':'Data Deleted'})    

    @action(detail=True, methods=['get'], name='Get jobs')
    def get_jobs(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        jobs = company.job_set.all()
        serializer = JobSerializer(jobs ,many=True )
        return Response(serializer.data)
    

    @action(detail=True, methods=['get'], name='Get pending jobs')
    def pending_jobs(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        jobs = company.job_set.filter(status='درانتظار تایید')
        serializer = JobSerializer(jobs ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='Get active jobs')
    def active_jobs(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        jobs = company.job_set.filter(status='فعال')
        serializer = JobSerializer(jobs ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='Get completed jobs')
    def completed_jobs(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        jobs = company.job_set.filter(status='تکمیل شده')
        serializer = JobSerializer(jobs ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='Get Expired jobs')
    def expired_jobs(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        jobs = company.job_set.filter(status='منقضی شده')
        serializer = JobSerializer(jobs ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='Get verification')
    def get_verification(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        verification = company.verification_set.all()
        serializer = VerificationSerializer(verification ,many=True )
        return Response(serializer.data)

    @action(detail=True, methods=['get'], name='get favorite employee')
    def retrieve_favorite_employee(self,request, pk=None):
        company = get_object_or_404(Company, pk=pk)
        favorite_employee = company.favorite_employee.all()
        serializer = EmployeeSerializer(favorite_employee ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='Get reviews')
    def get_reviews(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        reviews = company.review_set.all()
        serializer = ReviewSerializer(reviews ,many=True )
        return Response(serializer.data)    

class EmployeeViewSet(viewsets.ViewSet):
    # @permission_classes([IsAdminUser])
    def list(self,request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees , many = True)
        return Response(serializer.data)

        
    def retrieve(self, request, pk=None):
        employees = Employee.objects.all()
        employee = get_object_or_404(employees, pk=pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        employee = get_object_or_404(Employee.objects.all(), pk=pk)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        employee = Employee.objects.get(pk=id)
        employee.delete()
        return Response({'msg':'Data Deleted'})
    

    @action(detail=True, methods=['get'], name='get favorite jobs')
    def retrieve_favorite_jobs(self,request, pk=None):
        employee = get_object_or_404(Employee, pk=pk)
        favorite_jobs = employee.favorite_jobs.all()
        serializer = JobSerializer(favorite_jobs ,many=True )
        return Response(serializer.data)



    @action(detail=True, methods=['get'], name='get applies')
    def applies(self,request, pk):
        employee = Employee.objects.get(pk=pk)
        applies = employee.request_set.all()
        serializer =RequestSerializer(applies ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='get unchecked applies')
    def unchecked_applies(self,request, pk):
        employee = Employee.objects.get(pk=pk)
        applies = employee.request_set.filter(status='در انتظار بررسی')
        serializer =RequestSerializer(applies ,many=True )
        return Response(serializer.data)

    @action(detail=True, methods=['get'], name='get viewed applies')
    def viewed_applies(self,request, pk):
        employee = Employee.objects.get(pk=pk)
        applies = employee.request_set.filter(status='بررسی شده')
        serializer =RequestSerializer(applies ,many=True )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], name='get Rejected applies')
    def rejected_applies(self,request, pk):
        employee = Employee.objects.get(pk=pk)
        applies = employee.request_set.filter(status='رد شده')
        serializer =RequestSerializer(applies ,many=True )
        return Response(serializer.data)

class WorkExperienceViewSet(viewsets.ViewSet):



    def list(self,request):
        WorkExperiences = WorkExperience.objects.all()
        serializer = ExperienceSerializer(WorkExperiences , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        workExperiences = WorkExperience.objects.all()
        workExperience = get_object_or_404(workExperiences, pk=pk)
        serializer = ExperienceSerializer(workExperience)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = ExperienceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        workExperience = get_object_or_404(WorkExperience.objects.all(), pk=pk)
        serializer = ExperienceSerializer(workExperience, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        workExperience = WorkExperience.objects.get(pk=id)
        workExperience.delete()
        return Response({'msg':'Data Deleted'})    
    


class EducationViewSet(viewsets.ViewSet):




    def list(self,request):
        education = Education.objects.all()
        serializer = EducationSerializer(education , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        educations = Education.objects.all()
        education = get_object_or_404(educations, pk=pk)
        serializer = EducationSerializer(education)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = EducationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        education = get_object_or_404(Education.objects.all(), pk=pk)
        serializer = EducationSerializer(education, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        education = Education.objects.get(pk=id)
        education.delete()
        return Response({'msg':'Data Deleted'})      
    



class LanguageViewSet(viewsets.ViewSet):


    def list(self,request):
        language = Language.objects.all()
        serializer = LanguageSerializer(language , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        languages = Language.objects.all()
        language = get_object_or_404(languages, pk=pk)
        serializer = LanguageSerializer(language)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = LanguageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        language = get_object_or_404(Language.objects.all(), pk=pk)
        serializer = LanguageSerializer(language, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        language = Language.objects.get(pk=id)
        language.delete()
        return Response({'msg':'Data Deleted'})   
    


class ApplyViewSet(viewsets.ViewSet):


    def list(self,request):
        apply = Request.objects.all()
        serializer =RequestSerializer(apply , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        allapply = Request.objects.all()
        apply = get_object_or_404(allapply, pk=pk)
        serializer =RequestSerializer(apply)
        return Response(serializer.data)
        

    def create(self,request):
        serializer =RequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        apply = get_object_or_404(Request.objects.all(), pk=pk)
        serializer =RequestSerializer(apply, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        apply = Request.objects.get(pk=id)
        apply.delete()
        return Response({'msg':'Data Deleted'}) 




class VerificationViewSet(viewsets.ViewSet):


    def list(self,request):
        verification = Verification.objects.all()
        serializer = VerificationSerializer(verification , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        verifications = Verification.objects.all()
        verification = get_object_or_404(verifications, pk=pk)
        serializer = VerificationSerializer(verification)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = VerificationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        verification = get_object_or_404(Verification.objects.all(), pk=pk)
        serializer = VerificationSerializer(verification, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        verification = Verification.objects.get(pk=id)
        verification.delete()
        return Response({'msg':'Data Deleted'}) 


class SkillsViewSet(viewsets.ViewSet):


    def list(self,request):
        skill = Skills.objects.all()
        serializer = SkillSerializer(skill , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        skills = Skills.objects.all()
        skill = get_object_or_404(skills, pk=pk)
        serializer = SkillSerializer(skill)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = SkillSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        skill = get_object_or_404(Skills.objects.all(), pk=pk)
        serializer = SkillSerializer(skill, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        skill = Skills.objects.get(pk=id)
        skill.delete()
        return Response({'msg':'Data Deleted'}) 



class CategoryViewSet(viewsets.ViewSet):


    def list(self,request):
        category = Category.objects.all()
        serializer = CategorySerializer(category , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        categories = Category.objects.all()
        category = get_object_or_404(categories, pk=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        category = get_object_or_404(Category.objects.all(), pk=pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request,pk):
        id=pk
        category = Category.objects.get(pk=id)
        category.delete()
        return Response({'msg':'Data Deleted'})     
    


class ReviewViewSet(viewsets.ViewSet):

    def list(self,request):
        review = Review.objects.all()
        serializer = ReviewSerializer(review , many = True)
        return Response(serializer.data)
    
        
    def retrieve(self, request, pk=None):
        reviews = Review.objects.all()
        review = get_object_or_404(reviews, pk=pk)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

 