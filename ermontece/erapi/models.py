from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from ckeditor.fields import RichTextField


class Games(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=300)
    image = models.ImageField()
    post = models.ForeignKey('GamesPosts', on_delete=models.CASCADE)


class GamesPosts(models.Model):
    text = RichTextUploadingField(blank=True, null=True)


class Posts(models.Model):
    header = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to='images')
    date = models.DateField()
    text = RichTextUploadingField(blank=True, null=True)
