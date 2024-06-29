# Generated by Django 4.2.13 on 2024-06-20 16:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NotificationModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('live_link', models.CharField(blank=True, max_length=100)),
                ('discription', models.TextField(blank=True, max_length=200)),
                ('date', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
    ]
