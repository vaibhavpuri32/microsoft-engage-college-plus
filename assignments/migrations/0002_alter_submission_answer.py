# Generated by Django 3.2.9 on 2021-11-26 20:31

import assignments.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assignments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submission',
            name='answer',
            field=models.FileField(upload_to=assignments.models.get_upload_path),
        ),
    ]
