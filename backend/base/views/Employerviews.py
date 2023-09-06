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
from ..models import Job , Company , Employee , WorkExperience , Education , Language  , Verification , Skills , Category , Review , Request ,Portfolio , Gallery , Image , state ,City
from django.contrib.auth.models import User
from ..serializer import JobSerializer , CompanySerializer , UserSerializer, UserSerializerWithToken ,EmployeeSerializer , EducationSerializer , ExperienceSerializer ,LanguageSerializer ,RequestSerializer , VerificationSerializer , SkillSerializer , CategorySerializer , ReviewSerializer ,PortfolioSerializer , GallerySerializer , ImageSerializer ,StateSerializer ,SkillSerializer ,CitySerializer , EmployeepostSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.views import APIView
from django.core.files.base import ContentFile
from PIL import Image
import base64



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
        serializer = JobSerializer(job, data=request.data, partial=True)
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
      
    def list(self, request):
        companies = Company.objects.all()
        response_data = []
        
        for company in companies:
            all_jobs_count = Job.objects.filter(Company=company).count()
            completed_jobs_count = Job.objects.filter(Company=company, status='تکمیل شده').count()
            active_jobs_count = Job.objects.filter(Company=company, status='فعال').count()
            
            serializer = CompanySerializer(company)
            company_data = {
                'company_data': serializer.data,    
                'all_jobs_count': all_jobs_count,
                'completed_jobs_count': completed_jobs_count,
                'active_jobs_count': active_jobs_count
            }
            
            response_data.append(company_data)
        
        return Response(response_data)

    def retrieve(self, request, pk=None):
        company = get_object_or_404(Company.objects.all(), pk=pk)
        all_jobs_count = Job.objects.filter(Company=company).count()
        completed_jobs_count = Job.objects.filter(Company=company, status='تکمیل شده').count()
        active_jobs_count = Job.objects.filter(Company=company, status='فعال').count()
        
        serializer = CompanySerializer(company)
        response_data = {
            'company_data': serializer.data,
            'all_jobs_count': all_jobs_count,
            'completed_jobs_count': completed_jobs_count,
            'active_jobs_count': active_jobs_count
        }
        return Response(response_data)
    
    def create(self,request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    


    def update(self, request, pk=None):
        company = get_object_or_404(Company.objects.all(), pk=pk)
        serializer = CompanySerializer(company, data=request.data)
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
    
    @action(detail=True, methods=['get'], name='Get galleries')
    def get_galleries(self, request, pk=None):
        company = Company.objects.get(pk=pk)
        galleries = company.gallery_set.all()
        serializer = GallerySerializer(galleries, many=True)
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
    
    @action(detail=True, methods=['post'])
    def toggle_favorite_employee(self, request, pk=None):
        # employee = self.get_object()
        company = get_object_or_404(Company, pk=pk)
        employee_id = request.data.get('employee_id')

        try:
            employee = Employee.objects.get(pk=employee_id)
            if employee in company.favorite_employee.all():
                company.favorite_employee.remove(employee)
            else:
                company.favorite_employee.add(employee)
            # serializer = self.get_serializer(employee)
            serializer = CompanySerializer(company)
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response({'error': 'employee does not exist.'}, status=400)  
    




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



