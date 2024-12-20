from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import views, generics
from .serializers import *
from rest_framework.permissions import IsAdminUser
from .paginations import *


class GamesView(generics.ListAPIView):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer


class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all().order_by('-id')
    serializer_class = PostsSerializer
    pagination_class = PostsPagination


class PostsViewMain(generics.ListAPIView):
    queryset = Posts.objects.all().order_by('-id')
    serializer_class = PostsSerializer


class PostsViewDetail(generics.RetrieveAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsDetailSerializer


def index(request, pk=None):
    return render(request, 'index.html')