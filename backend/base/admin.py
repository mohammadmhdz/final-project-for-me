from django.contrib import admin
from .models import Job , Company , Skills, Category

# Register your models here.
admin.site.register(Job)
admin.site.register(Company)
admin.site.register(Skills)
admin.site.register(Category)
