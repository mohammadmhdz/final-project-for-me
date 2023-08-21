from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.core import validators
from django.core.validators import FileExtensionValidator



# Create your models here.




JOB_TYPE = (
    ('تمام وقت','تمام وقت'),
    ('پاره وقت','پاره وقت'),
)

Gender = (
    ('خانوم','خانوم'),
    ('آقا','آقا'),
)


degree = (
    ('دیپلم','دیپلم'),
    ('کاردانی','کاردانی'),
    ('کارشناسی','کارشناسی'),
    ('کارشناسی ارشد','کارشناسی ارشد'),
    ('دکترا','دکترا'),
)

Rate = (
    ('100','100'),
    ('90','90'),
    ('80','80'),
    ('70','70'),
    ('60','60'),
    ('50','50'),
    ('40','40'),
    ('30','30'),
    ('20','20'),
    ('10','10'),
)

Requststatus = (
    ('در انتظار بررسی','در انتظار بررسی'),
    ('بررسی شده','بررسی شده'),
    ('رد شده','رد شده'),
    

)

JobStatus = (
    ('فعال','فعال'),
    ('درانتظار تایید','درانتظار تایید'),
    ('تکمیل شده','تکمیل شده'),
    ('منقضی شده','منقضی شده'),
 
)

reviewStatus = (
    ('فعال','فعال'),
    ('درانتظار تایید','درانتظار تایید'),
    ('حذف شده شده','حذف شده شده'),
 
)


# cityy = (
#     ('اراک','اراک'),
#     ('اصفهان','اصفهان'),
#     ('ایلام','ایلام'),
#     ('بجنورد','بجنورد'),
#     ('بندرعباس','بندرعباس'),
#     ('بوشهر','بوشهر'),
#     ('تبریز','تبریز'),
#     ('تهران','تهران'),
#     ('خرم‌آباد','خرم‌آباد'),
#     ('رشت','رشت'),
#     ('ساری','ساری'),
#     ('سمنان','سمنان'),
#     ('سنندج','سنندج'),
#     ('شهرکرد','شهرکرد'),
#     ('شیراز','شیراز'),
#     ('قزوین','قزوین'),
#     ('قم','قم'),
#     ('کرج','کرج'),
#     ('کرمان','کرمان'),
#     ('کرمانشاه','کرمانشاه'),
#     ('گرگان','گرگان'),
#     ('مشهد','مشهد'),
#     ('همدان','همدان'),
#     ('یاسوج','یاسوج'),
#     ('زاهدان','زاهدان'),
#     ('زنجان','زنجان'),
#     ('اردبیل','اردبیل'),
#     ('ارومیه','ارومیه'),
#     ('اهواز','اهواز'),
# )


Population = (
    ('1-10','1-10'),
    ('10-50','10-50'),
    ('50-100','50-100'),
    ('100-500','100-500'),
    ('بیشتر از 500','بیشتر از 500'),
    
)

Days = (
    ('شنبه','شنبه'),
    ('یکشنبه','یکشنبه'),
    ('دوشنبه','دوشنبه'),
    ('سه شنبه','سه شنبه'),
    ('چهارشنبه','چهارشنبه'),
    ('پنج شنبه','پنج شنبه'),
    ('جمعه','جمعه'),
)

Experience = (
    ('بدون محدودیت','بدون محدودیت'),
    ('کمتر از ۲ سال','کمتر از ۲ سال'),
    ('۲ تا ۵ سال','۲ تا ۵ سال'),
    ('بیشتر از ۵ سال','بیشتر از ۵ سال'), 
)



Level = (
    ('intern(کاراموز)','intern(کاراموز)'),
    ('Junior(جوان)','Junior(جوان)'),
    ('Senior(ارشد)','Senior(ارشد)'), 
    ('Lead(راهبر)','Lead(راهبر)'),
)

Salary_Type = (
    ('توافقی','توافقی'),
    ('مشخص','مشخص'),
)




class state(models.Model):
    name = models.CharField(max_length=50, unique=True , null=True)

    def __str__(self):
        return self.name



class City(models.Model):
    name = models.CharField(max_length=50, null=True)
    country = models.ForeignKey(state , on_delete=models.SET_NULL,null=True)

    def __str__(self):
        return self.name   



class Company(models.Model):  
     user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
     Name = models.CharField(max_length=100)
     image = models.ImageField(null=True, blank=True)
     about  = models.TextField(max_length=1000)
    #  join_at = models.DateTimeField(auto_now=True)
     founded_at =  models.DateField(auto_now_add=True)
     city = models.ForeignKey(City ,on_delete=models.SET_NULL,null=True)
     population =models.CharField(max_length=15 , choices=Population)
     Owner_name =models.CharField(max_length=100)
     Email = models.EmailField(max_length = 254)
     Website= models.URLField(max_length = 200 , null=True , blank= True)
     facebook =models.URLField(max_length = 200 , null=True , blank= True)
     linkdin = models.URLField(max_length = 200 , null=True , blank= True)
     instagram = models.URLField(max_length = 200 , null=True , blank= True)
     Phone = models.CharField(max_length=100)
     Adress = models.TextField(max_length=1000)
     Working_days_from = models.CharField(max_length=15 , choices=Days)
     Working_days_to = models.CharField(max_length=15 , choices=Days , default='16;00')
     working_hours_from = models.TimeField()
     working_hours_to = models.TimeField()
     favorite_employee = models.ManyToManyField('Employee')

    


     def __str__(self):
        return self.Name

 

class Verification(models.Model):
     Company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
     registrationـnumber =models.CharField(max_length=15)
     registration_file = models.ImageField(null=True, blank=True)
     status = models.BooleanField(default=False)

     
     def __str__(self):
          return f'{self.registrationـnumber}  is registration number of:  { self.Company.Name}'
     





class Review(models.Model):
    employee = models.ForeignKey('Employee', on_delete=models.CASCADE, null=True)
    Company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    content = models.TextField(max_length=1000)
    date =models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=15 , choices=reviewStatus, default="در انتظار بررسی")

    def __str__(self):
        return self.content




class Category(models.Model):
    title = models.CharField(max_length=200) 

    def __str__(self):
        return self.title
    

class Skills(models.Model):
    title = models.CharField(max_length=200) 

    def __str__(self):
        return self.title    

class Job(models.Model):
    Company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    title        = models.CharField(max_length=100)  
    published_at = models.DateTimeField(auto_now=True)
    job_type     = models.CharField(max_length=15 , choices=JOB_TYPE)
    isremote = models.BooleanField(default=False)
    city = models.ForeignKey(City ,on_delete=models.SET_NULL,null=True)
    experience   = models.CharField(max_length=15 , choices=Experience ,  default='بدون محدودیت')
    level   = models.CharField(max_length=15 , choices=Level,  default='Junior(جوان)')
    salary_type   = models.CharField(max_length=15 , choices=Salary_Type ,  default='توافقی')
    salary_amount       = models.CharField(max_length=100 , null=True, blank=True) 
    description  = models.TextField(max_length=1000)               
    skills = models.ManyToManyField(Skills)
    category     = models.ForeignKey('Category',on_delete=models.CASCADE, default=1)
    status = models.CharField(max_length=15 , choices=JobStatus)
    # maplocation


    def __str__(self):
        return self.title
    


    



     






class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    perfession_title = models.CharField(max_length=100, null=True)  
    cooperation_type=  models.CharField(max_length=15 , choices=JOB_TYPE ,  null=True)
    image = models.ImageField(null=True, blank=True)
    about=models.TextField(max_length=1000 ,  null=True)  
    gender=models.CharField(max_length=15 , choices=Gender , default='خانوم')
    city = models.ForeignKey(City ,on_delete=models.SET_NULL,null=True)
    skills = models.ManyToManyField(Skills)
    cv = models.FileField( null=True, blank=True, validators=[FileExtensionValidator(allowed_extensions=["pdf"])])
    favorite_jobs = models.ManyToManyField(Job)
    

    def __str__(self):
        return self.user.username
    

class WorkExperience(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    from_date = models.DateField()
    to_date = models.DateField()

    def __str__(self):
          return f'{self.employee.user.username} Experience :  { self.title}'
     


class Education(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    institute = models.CharField(max_length=100)
    degree = models.CharField(max_length=15 , choices=degree)
    from_date = models.DateField()
    to_date = models.DateField()


    def __str__(self):
          return f'{self.employee.user.username} Education :  { self.degree}'



class Language(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    language = models.CharField(max_length=100)
    rate = models.CharField(max_length=15 , choices=Rate)


    def __str__(self):
         return self.language
    











class Apply(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, null=True)
    message  = models.TextField(max_length=1000)
    send_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=15 , choices=Requststatus)
    status_change_date = models.DateTimeField(auto_now=True)


    @property
    def company_name(self):
        return self.company.name if self.company else None
    
    @property
    def job_title(self):
        return self.job.title if self.job else None


    def __str__(self):
        return self.message


    

