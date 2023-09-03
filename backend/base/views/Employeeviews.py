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
        serializer = EmployeepostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

    def update(self, request, pk=None):
        employee = get_object_or_404(Employee.objects.all(), pk=pk)
        serializer = EmployeepostSerializer(employee, data=request.data , partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




    def destroy(self, request,pk):
        id=pk
        employee = Employee.objects.get(pk=id)
        employee.delete()
        return Response({'msg':'Data Deleted'})
    

    @action(detail=True, methods=['get'], name='Get portfolio')
    def get_portfolio(self, request, pk=None):
        employee = Employee.objects.get(pk=pk)
        portfolio = employee.portfolio_set.all()
        serializer = PortfolioSerializer(portfolio ,many=True )
        return Response(serializer.data)

    @action(detail=True, methods=['get'], name='get favorite jobs')
    def retrieve_favorite_jobs(self,request, pk=None):
        employee = get_object_or_404(Employee, pk=pk)
        favorite_jobs = employee.favorite_jobs.all()
        serializer = JobSerializer(favorite_jobs ,many=True )
        return Response(serializer.data)

    

    @action(detail=True, methods=['post'])
    def add_favorite_job(self, request, pk=None):
        employee = self.get_object()
        job_id = request.data.get('job_id')

        try:
            job = Job.objects.get(pk=job_id)
            employee.favorite_jobs.add(job)
            serializer = self.get_serializer(employee)
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response({'error': 'Job does not exist.'}, status=400)
        

    @action(detail=True, methods=['post'])
    def remove_favorite_job(self, request, pk=None):
        employee = self.get_object()
        job_id = request.data.get('job_id')

        try:
            job = Job.objects.get(pk=job_id)
            employee.favorite_jobs.remove(job)
            serializer = self.get_serializer(employee)
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response({'error': 'Job does not exist.'}, status=400)

    @action(detail=True, methods=['post'])
    def toggle_favorite_job(self, request, pk=None):
        # employee = self.get_object()
        employee = get_object_or_404(Employee, pk=pk)
        job_id = request.data.get('job_id')

        try:
            job = Job.objects.get(pk=job_id)
            if job in employee.favorite_jobs.all():
                employee.favorite_jobs.remove(job)
            else:
                employee.favorite_jobs.add(job)
            # serializer = self.get_serializer(employee)
            serializer = EmployeeSerializer(employee)
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response({'error': 'Job does not exist.'}, status=400)                

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





class EmployeeUpdateView(APIView):
    def patch(self, request, *args, **kwargs):
        employee_data = request.data

        # Get the employee instance
        employee_id = employee_data.get('id')
        try:
            employee = Employee.objects.get(id=employee_id)
        except Employee.DoesNotExist:
            return Response(f"Employee with ID {employee_id} does not exist.", status=status.HTTP_404_NOT_FOUND)

        # Update the employee fields
        employee_serializer = EmployeeSerializer(employee, data=employee_data, partial=True)
        if employee_serializer.is_valid():
            employee_serializer.save()
        else:
            return Response(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Update work experiences
        work_experiences_data = employee_data.get('work_experience')
        if work_experiences_data is not None:
            for work_exp_data in work_experiences_data:
                work_exp_data['employee'] = employee.id
                work_exp_id = work_exp_data.get('id')
                if work_exp_id:
                    try:
                        work_exp = WorkExperience.objects.get(id=work_exp_id, employee=employee)
                        work_exp_serializer = ExperienceSerializer(work_exp, data=work_exp_data, partial=True)
                    except WorkExperience.DoesNotExist:
                        # Create work experience record using WorkExperienceViewSet create method
                        work_experience_viewset = WorkExperienceViewSet()
                        request._request.data = work_exp_data  # Set request data for the create method
                        response = work_experience_viewset.create(request._request)
                        if response.status_code != status.HTTP_201_CREATED:
                            return response
                        continue  # Skip further processing for this iteration
                else:
                    work_exp_serializer = ExperienceSerializer(data=work_exp_data)

                if work_exp_serializer.is_valid():
                    work_exp_serializer.save()
                else:
                    return Response(work_exp_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Update education records
        educations_data = employee_data.get('Education')
        if educations_data is not None:
            for education_data in educations_data:
                education_data['employee'] = employee.id
                education_id = education_data.get('id')
                if education_id:
                    try:
                        education = Education.objects.get(id=education_id, employee=employee)
                        education_serializer = EducationSerializer(education, data=education_data, partial=True)
                    except Education.DoesNotExist:
                        # Create education record using EducationViewSet create method
                        education_viewset = EducationViewSet()
                        request._request.data = education_data  # Set request data for the create method
                        response = education_viewset.create(request._request)
                        if response.status_code != status.HTTP_201_CREATED:
                            return response
                        continue  # Skip further processing for this iteration
                else:
                    education_serializer = EducationSerializer(data=education_data)

                if education_serializer.is_valid():
                    education_serializer.save()
                else:
                    return Response(education_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Update language skills
        languages_data = employee_data.get('languages')
        if languages_data is not None:
            for language_data in languages_data:
                language_data['employee'] = employee.id
                language_id = language_data.get('id')
                if language_id:
                    try:
                        language = Language.objects.get(id=language_id, employee=employee)
                        language_serializer = LanguageSerializer(language, data=language_data, partial=True)
                    except Language.DoesNotExist:
                        # Create language record using LanguageViewSet create method
                        language_viewset = LanguageViewSet()
                        request._request.data = language_data  # Set request data for the create method
                        response = language_viewset.create(request._request)
                        if response.status_code != status.HTTP_201_CREATED:
                            return response
                        continue  # Skip further processing for this iteration
                else:
                    language_serializer = LanguageSerializer(data=language_data)

                if language_serializer.is_valid():
                    language_serializer.save()
                else:
                    return Response(language_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response("Employee data updated successfully.", status=status.HTTP_200_OK)
    





    





