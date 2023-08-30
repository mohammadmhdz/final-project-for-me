from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Job , Company ,Employee , Education , WorkExperience , Skills ,Category, City  , Language ,Verification , Review , Request ,Portfolio , Gallery , Image ,state


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

# class JobSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Job
#         fields = '__all__'  
#  
        # fields = [
        #     'id', 'company', 'title', 'published_at', 'job_type', 'isremote', 'city', 'experience',
        #     'level', 'salary_type', 'salary_amount', 'description', 'skills', 'category', 'status',
        #     'num_requests','completed_request_user',
        # ]

class JobSerializer(serializers.ModelSerializer):
    company = serializers.SerializerMethodField(read_only=True)
    city = serializers.SerializerMethodField(read_only=True)
    category = serializers.SerializerMethodField(read_only=True)
    skills = serializers.SerializerMethodField(read_only=True)
    num_requests = serializers.SerializerMethodField()
    completed_request_user = serializers.SerializerMethodField()
 
    class Meta:
        model = Job
        fields = '__all__'
<<<<<<< HEAD
        fields = [
          'id', 'company', 'title', 'published_at', 'job_type', 'isremote', 'city', 'experience',
          'level', 'salary_type', 'salary_amount', 'description', 'skills', 'category', 'status',
         'num_requests','completed_request_user',
        ]
=======
        # fields = [
        #     'id', 'company', 'title', 'published_at', 'job_type', 'isremote', 'city', 'experience',
        #     'level', 'salary_type', 'salary_amount', 'description', 'skills', 'category', 'status',
        #     'num_requests','completed_request_user',
        # ]
>>>>>>> 9fab5992ed66782bcff785672212c0dd3106c35e

    def get_completed_request_user(self, obj):
        completed_request = obj.request_set.filter(status='استخدام شده', employee__user__isnull=False).first()
        if completed_request:
            employee = completed_request.employee
            user = employee.user
            return {
                'first_name': user.first_name,
                'last_name': user.last_name,
                'id': employee.id
            }
        return None
    
    def get_num_requests(self, obj):
        return obj.request_set.count()

    def get_city(self, obj):
        city = obj.city
        serializer = CitySerializer(city, many=False)
        return serializer.data  
    
    def get_category(self, obj):
        category = obj.category
        serializer = CategorySerializer(category, many=False)
        return serializer.data  
    

    def get_company(self, obj):
        company = obj.Company
        serializer = CompanySerializer(company, many=False)
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
        serializer = CitySerializer(city, many=False)
        return serializer.data  

 


class RequestSerializer(serializers.ModelSerializer):


    
    class Meta:
        model = Request
        fields = '__all__'
    

class PortfolioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Portfolio
        fields = '__all__'






class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'     

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'   

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'     

        

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = state
        fields = '__all__'


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
    class Meta:
        model = Verification
        fields = '__all__'




class ReviewSerializer(serializers.ModelSerializer):
    users_name = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ('id', 'employee', 'Company', 'content', 'date', 'status', 'users_name')
        read_only_fields = ('id',)

    def get_users_name(self, obj):
        return obj.users_name
    



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields =  ('id' , 'image')

class GallerySerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Gallery
        fields = '__all__'
    
    def get_images(self, obj):
        images = obj.image_set.all()
        serializer = ImageSerializer(images, many=True)
        return serializer.data 

