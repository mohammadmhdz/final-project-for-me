from django.db import models
from django.contrib.auth.models import User
# Create your models here.

JOB_TYPE = (
    ('تمام وقت','تمام وقت'),
    ('پاره وقت','پاره وقت'),
)




City = (
    ('اراک','اراک'),
    ('اصفهان','اصفهان'),
    ('ایلام','ایلام'),
    ('بجنورد','بجنورد'),
    ('بندرعباس','بندرعباس'),
    ('بوشهر','بوشهر'),
    ('تبریز','تبریز'),
    ('تهران','تهران'),
    ('خرم‌آباد','خرم‌آباد'),
    ('رشت','رشت'),
    ('ساری','ساری'),
    ('سمنان','سمنان'),
    ('سنندج','سنندج'),
    ('شهرکرد','شهرکرد'),
    ('شیراز','شیراز'),
    ('قزوین','قزوین'),
    ('قم','قم'),
    ('کرج','کرج'),
    ('کرمان','کرمان'),
    ('کرمانشاه','کرمانشاه'),
    ('گرگان','گرگان'),
    ('مشهد','مشهد'),
    ('همدان','همدان'),
    ('یاسوج','یاسوج'),
    ('زاهدان','زاهدان'),
    ('زنجان','زنجان'),
    ('اردبیل','اردبیل'),
    ('ارومیه','ارومیه'),
    ('اهواز','اهواز'),
)


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


class Company(models.Model):  
     user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
     Name = models.CharField(max_length=100)
     image = models.ImageField(null=True, blank=True)
     about  = models.TextField(max_length=1000)
    #  join_at = models.DateField()
     founded_at =  models.DateField(auto_now_add=True)
     city = models.CharField(max_length=15 , choices=City , default='تهران')
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


     def __str__(self):
        return self.Name



class Category(models.Model):
    title = models.CharField(max_length=200) 

    def __str__(self):
        return self.title



class Skills(models.Model):
    title = models.CharField(max_length=200) 

    def __str__(self):
        return self.title    




class Job(models.Model):  
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    Company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    title        = models.CharField(max_length=100)  
    published_at = models.DateTimeField(auto_now=True)
    job_type     = models.CharField(max_length=15 , choices=JOB_TYPE)
    isremote = models.BooleanField(default=False)
    city = models.CharField(max_length=15 , choices=City ,  default='تهران')
    experience   = models.CharField(max_length=15 , choices=Experience ,  default='بدون محدودیت')
    level   = models.CharField(max_length=15 , choices=Level,  default='Junior(جوان)')
    salary_type   = models.CharField(max_length=15 , choices=Salary_Type ,  default='توافقی')
    salary_amount       = models.CharField(max_length=100 , null=True, blank=True) 
    description  = models.TextField(max_length=1000)
    skills_required = models.ForeignKey('Skills',on_delete=models.CASCADE, default=1)
    category     = models.ForeignKey('Category',on_delete=models.CASCADE, default=1)
    status = models.BooleanField(default=False)
    # maplocation
        
        
    def __str__(self):
        return self.title
    



