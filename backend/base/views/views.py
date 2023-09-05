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
@permission_classes([IsAdminUser])
def getEmployees(request):
    Employees = Employee.objects.all()
    serializer = EmployeeSerializer(Employees, many=True)
    return Response(serializer.data)




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['delete'])
    def delete_by_associated_id(self, request):
        associated_id = request.query_params.get('associated_id')
        if not associated_id:
            return Response({'error': 'associated_id parameter is required.'}, status=400)

        try:
            user = User.objects.get(associated_id=associated_id)
            user.delete()
            return Response({'success': 'User deleted successfully.'}, status=200)
        except User.DoesNotExist:
            return Response({'error': f'User with associated_id {associated_id} does not exist.'}, status=404)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    def destroy(self, request,pk):
        id=pk
        user = User.objects.get(pk=id)
        user.delete()
        return Response({'msg':'Data Deleted'})  
    


@api_view(['GET'])
def Dropdown(request):
    states = state.objects.all()
    cities = City.objects.all()
    categories = Category.objects.all()
    skills = Skills.objects.all()

    state_serializer = StateSerializer(states, many=True)
    city_serializer = CitySerializer(cities, many=True)
    category_serializer = CategorySerializer(categories, many=True)
    skills_serializer = SkillSerializer(skills, many=True)

    data = {
        'states': state_serializer.data,
        'cities': city_serializer.data,
        'categories': category_serializer.data,
        'skills': skills_serializer.data
    }

    return Response(data)





    


class ApplyViewSet(viewsets.ViewSet):


    def list(self, request):
        queryset = Request.objects.all()
        serializer = RequestSerializer(queryset, many=True)
        data = serializer.data

        for item in data:
            instance = Request.objects.get(id=item['id'])
            company_name = instance.company_name
            job_title = instance.job_title
            employee_user = instance.employee_user
            item['company_name'] = company_name
            item['job_title'] = job_title
            item['employee_user']=employee_user

        return Response(data)
    
        
    def retrieve(self, request, pk=None):
        allapply = Request.objects.all()
        apply = get_object_or_404(allapply, pk=pk)
        company_name = apply.company_name
        job_title = apply.job_title
        employee_user = apply.employee_user
        serializer =RequestSerializer(apply)
        data = serializer.data
        data['company_name'] = company_name
        data['job_title']=job_title
        data['employee_user']=employee_user
        return Response(data)
        

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
        serializer = CategorySerializer(category, data=request.data, partial=True)  
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
        # review = Review.objects.all()
        queryset = Review.objects.all()
        serializer = ReviewSerializer(queryset , many = True)
        data = serializer.data
        
        for item in data:
            instance = Review.objects.get(id=item['id'])
            users_name = instance.users_name          
            item['users_name'] = users_name

        return Response(data)       
    
        
    def retrieve(self, request, pk=None):
        reviews = Review.objects.all()
        review = get_object_or_404(reviews, pk=pk)
        users_name =review.users_name
        serializer = ReviewSerializer(review)
        data = serializer.data
        data['users_name'] = users_name
        return Response(data)
    
    def create(self,request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data  created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    

 






