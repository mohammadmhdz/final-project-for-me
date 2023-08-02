from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status 
from  django.shortcuts import render 
from django.shortcuts import get_object_or_404
from rest_framework.request import Request
from rest_framework.decorators import api_view, permission_classes
from .products import products
from .models import Job
from .serializer import JobSerializer


# Create your views here.
# @api_view(['GET'])
# def getProducts(request):
#     return Response(products)


# @api_view(['GET'])
# def getProduct(request , pk):
#     product = None
#     for i in products:
#         if i['_id'] == pk:
#             product = i
#             break
#     return Response(product)


# @api_view(['GET'])
# def getJobs(request):
#     jobs = Job.objects.all()
#     serializer = JobSerializer(jobs , many = True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def getJob(request , pk):
#     job = Job.objects.get(_id=pk)
#     serializer = JobSerializer(jobs , many = False)
#     return Response(serializer.data)


class JobViewSet(viewsets.ViewSet):
    def list(self,request):
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs , many = True)
        return Response(serializer.data)
    
    # def retreive(self, request, pk=None):
    #     id=pk
    #     if id is not None:
    #         job = Job.objects.get(id=id)
    #         serializer = JobSerializer(jobs)
    #         return  Response(serializer.data)
        
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

    def destroy(self, request,pk):
        id=pk
        job = Job.objects.get(pk=id)
        job.delete()
        return Response({'msg':'Data Deleted'})