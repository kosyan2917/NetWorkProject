# Generated by Django 4.2.3 on 2023-07-22 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('erapi', '0003_posts_date_posts_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='header',
            field=models.CharField(max_length=300),
        ),
    ]
