
from django.contrib import admin
from django.urls import path, include
from erapi.views import *
from django.conf.urls.static import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/games/', GamesView.as_view()),
    path('api/new_posts/', PostsViewMain.as_view()),
    path('api/posts/', PostsView.as_view()),
    path('api/posts/<int:pk>', PostsViewDetail.as_view()),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('news', index),
    path('news/<int:pk>', index),
    path('', index),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
