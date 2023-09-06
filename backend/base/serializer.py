from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Job , Company ,Employee , Education , WorkExperience , Skills ,Category, City  , Language ,Verification , Review , Request ,Portfolio , Gallery , Image ,state
from datetime import timedelta




class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    role = serializers.SerializerMethodField(read_only=True)
    associated_id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id', 'username', 'first_name', 'last_name', 'email', 'name', 'isAdmin', 'last_login', 'role','associated_id']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

    def get_role(self, obj):
        try:
            _ = obj.employee  # Check if the user is an employee
            return 'employee'
        except Employee.DoesNotExist:
            pass

        try:
            _ = obj.company  # Check if the user is associated with a company
            return 'employer'
        except Company.DoesNotExist:
            pass

        return None
    
    def get_associated_id(self, obj):
        try:
            employee = obj.employee
            return employee.id
        except Employee.DoesNotExist:
            pass

        try:
            company = obj.company
            return company.id
        except Company.DoesNotExist:
            pass

        return None


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username','first_name','last_name', 'email', 'name', 'isAdmin','last_login', 'token' , 'role','associated_id']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)



class JobSerializer(serializers.ModelSerializer):
    company = serializers.SerializerMethodField(read_only=True)
    job_city = serializers.SerializerMethodField(read_only=True)
    job_category = serializers.SerializerMethodField(read_only=True)
    job_skills = serializers.SerializerMethodField(read_only=True)
    num_requests = serializers.SerializerMethodField()
    completed_request_user = serializers.SerializerMethodField()
    due_to = serializers.SerializerMethodField()
    # image =serializers.SerializerMethodField(read_only=True)
 
    class Meta:
        model = Job
        fields = '__all__'



        # fields = [
        #   'id', 'company', 'title', 'published_at', 'job_type', 'isremote', 'city', 'experience',
        #   'level', 'salary_type', 'salary_amount', 'description', 'skills', 'category', 'status',
        #  'num_requests','completed_request_user',
        # ]


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

    def get_job_city(self, obj):
        job_city = obj.city
        serializer = CitySerializer(job_city, many=False)
        return serializer.data  
    
    def get_job_category(self, obj):
        job_category = obj.category
        serializer = CategorySerializer(job_category, many=False)
        return serializer.data  
    
    def get_due_to(self, obj):
        return obj.published_at + timedelta(days=60)
    

    def get_company(self, obj):
        company = obj.Company
        serializer = CompanySerializer(company, many=False)
        return serializer.data  
    
    def get_job_skills(self, obj):
        job_skills = obj.skills
        serializer = SkillSerializer(job_skills, many=True)
        return serializer.data 
    
    # def get_image(self, obj):
    #     return obj.Company.image

class CompanySerializer(serializers.ModelSerializer):
    userr = serializers.SerializerMethodField(read_only=True)
    city = serializers.SerializerMethodField(read_only=True)
    

    class Meta:
        model = Company
        fields = '__all__'


    def get_userr(self, obj):
        userr = obj.user
        serializer = UserSerializer(userr, many=False)
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
        fields = '__all__'     



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
    # experiences = ExperienceSerializer(many=True)
    # educations = EducationSerializer(many=True)
    # languages = LanguageSerializer(many=True)




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
    company_name = serializers.SerializerMethodField()


    class Meta:
        model = Review
        fields = ('id', 'employee', 'Company', 'content', 'date', 'status', 'users_name' , 'company_name')
        read_only_fields = ('id',)

    def get_users_name(self, obj):
        return obj.users_name
    
    def get_company_name(self, obj):
        return obj.Company.Name

    



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







class EmployeepostSerializer(serializers.ModelSerializer):
    work_experiences = ExperienceSerializer(many=True)
    educations = EducationSerializer(many=True)
    languages = LanguageSerializer(many=True)

    class Meta:
        model = Employee
        fields = '__all__'