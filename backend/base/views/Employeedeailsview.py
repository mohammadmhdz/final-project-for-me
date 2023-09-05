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
from rest_framework.parsers import MultiPartParser


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
    











class PortfolioViewSet(viewsets.ViewSet):
    # parser_classes = [MultiPartParser]

    


    def list(self, request):
        portfolios = Portfolio.objects.all()
        serializer = PortfolioSerializer(portfolios, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        portfolios = Portfolio.objects.all()
        portfolio = get_object_or_404(portfolios, pk=pk)
        serializer = PortfolioSerializer(portfolio)
        return Response(serializer.data)

    def create(self, request):
        serializer = PortfolioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        portfolio = get_object_or_404(Portfolio.objects.all(), pk=pk)
        serializer = PortfolioSerializer(portfolio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        portfolio = Portfolio.objects.get(pk=pk)
        portfolio.delete()
        return Response({'msg': 'Data Deleted'})
    



class ImageViewSet(viewsets.ViewSet):
    def list(self, request):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        images = Image.objects.all()
        image = get_object_or_404(images, pk=pk)
        serializer = ImageSerializer(image)
        return Response(serializer.data)

    def create(self, request):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        image = get_object_or_404(Image.objects.all(), pk=pk)
        serializer = ImageSerializer(image, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        image = Image.objects.get(pk=pk)
        image.delete()
        return Response({'msg': 'Data Deleted'})

class GalleryViewSet(viewsets.ViewSet):
    def list(self, request):
        galleries = Gallery.objects.all()
        serializer = GallerySerializer(galleries, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        galleries = Gallery.objects.all()
        gallery = get_object_or_404(galleries, pk=pk)
        serializer = GallerySerializer(gallery)
        return Response(serializer.data)

    def create(self, request):
        serializer = GallerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        gallery = get_object_or_404(Gallery.objects.all(), pk=pk)
        serializer = GallerySerializer(gallery, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        gallery = Gallery.objects.get(pk=pk)
        gallery.delete()
        return Response({'msg': 'Data Deleted'})    