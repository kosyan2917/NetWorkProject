from rest_framework import serializers
from .models import *


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ['name', 'description', 'image']


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'header', 'description', 'image', 'date']


class PostsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['header', 'description', 'image', 'date', 'text']
