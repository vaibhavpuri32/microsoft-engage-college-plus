# Generated by Django 3.2.9 on 2021-11-16 06:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Studnet',
            new_name='Student',
        ),
    ]