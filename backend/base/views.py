from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status 
from  django.shortcuts import render 
from django.shortcuts import get_object_or_404
from rest_framework.request import Request
from rest_framework.decorators import api_view, permission_classes
from .models import Job , Company
from .serializer import JobSerializer , CompanySerializer


# Create your views here

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