# Generated by Django 4.1.3 on 2023-08-29 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('erapi', '0007_alter_gamesposts_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='image',
            field=models.ImageField(upload_to='images'),
        ),
    ]