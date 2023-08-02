from rest_framework import serializers
from django.contrib.auth.models import User
# from rest_framework_simplejwt.tokens import RefreshToken
from .models import Job


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'