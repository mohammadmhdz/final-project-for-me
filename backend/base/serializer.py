from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Job , Company ,Employee , Education , WorkExperience , Skills ,Category, City ,Apply , Language ,Verification


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username','first_name','last_name', 'email', 'name', 'isAdmin','last_login']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username','first_name','last_name', 'email', 'name', 'isAdmin','last_login', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class JobSerializer(serializers.ModelSerializer):
    Company = serializers.SerializerMethodField(read_only=True)
    city = serializers.SerializerMethodField(read_only=True)
    category = serializers.SerializerMethodField(read_only=True)
    skills = serializers.SerializerMethodField(read_only=True)
 
    class Meta:
        model = Job
        fields = '__all__'

    def get_city(self, obj):
        city = obj.city
        serializer = CitySerializer(city, many=False)
        return serializer.data  
    
    def get_category(self, obj):
        category = obj.category
        serializer = CategorySerializer(category, many=False)
        return serializer.data  
    

    def get_Company(self, obj):
        Company = obj.Company
        serializer = CompanySerializer(Company, many=False)
        return serializer.data  
    
    def get_skills(self, obj):
        skills = obj.skills
        serializer = SkillSerializer(skills, many=True)
        return serializer.data 

class CompanySerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    city = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Company
        fields = '__all__'


    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data
    

        
    def get_city(self, obj):
        city = obj.city
        serializer = CategorySerializer(city, many=False)
        return serializer.data  




    city = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Company
        fields = '__all__'

    

        
    def get_city(self, obj):
        city = obj.city
        serializer = CitySerializer(city, many=False)
        return serializer.data  


class ApplySerializer(serializers.ModelSerializer):
    Company = serializers.SerializerMethodField(read_only=True)
    job = serializers.SerializerMethodField(read_only=True)
    employee = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Apply
        fields = '__all__'
    
    def get_Company(self, obj):
        Company = obj.Company
        serializer = CompanySerializer(Company, many=False)
        return serializer.data  
    
    def get_job(self, obj):
        job = obj.job
        serializer = JobSerializer(job, many=False) 
        return serializer.data

    def get_employee(self, obj):
        employee = obj.employee
        serializer = EmployeeSerializer(employee, many=False)
        return serializer.data




class EmployeeApplySerializer(serializers.ModelSerializer):
    Company = serializers.SerializerMethodField(read_only=True)
    job = serializers.SerializerMethodField(read_only=True)

    
    class Meta:
        model = Apply
        fields = '__all__'
    
    def get_Company(self, obj):
        Company = obj.Company
        serializer = CompanySerializer(Company, many=False)
        return serializer.data  
    
    def get_job(self, obj):
        job = obj.job
        serializer = JobSerializer(job, many=False) 
        return serializer.data




class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ['title']     

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']   

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['name']        




class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['institute','degree','from_date','to_date']     



class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'
        # fields = ['title','company_name','from_date','to_date']    

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    Education = serializers.SerializerMethodField(read_only=True)
    Language = serializers.SerializerMethodField(read_only=True)
    skills = serializers.SerializerMethodField(read_only=True)
    Experiences = serializers.SerializerMethodField(read_only=True)
    city = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)



    class Meta:
        model = Employee
        fields = '__all__'

    def get_Experiences(self, obj):
        Experiences = obj.workexperience_set.all()
        serializer = ExperienceSerializer(Experiences, many=True)
        return serializer.data
    
    
    def get_Education(self, obj):
        Educations = obj.education_set.all()
        serializer = EducationSerializer(Educations, many=True)
        return serializer.data
    

    def get_Language(self, obj):
        Languages = obj.language_set.all()
        serializer = LanguageSerializer(Languages, many=True)
        return serializer.data

    def get_skills(self, obj):
        skills = obj.skills
        serializer = SkillSerializer(skills, many=True)
        return serializer.data  

    def get_city(self, obj):
        city = obj.city
        serializer = CitySerializer(city, many=False)
        return serializer.data  

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data        




class VerificationSerializer(serializers.ModelSerializer):
    Company = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Verification
        fields = '__all__'


    def get_Company(self, obj):
        Company = obj.Company
        serializer = CompanySerializer(Company, many=False)
        return serializer.data    