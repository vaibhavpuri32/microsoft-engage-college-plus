from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from django.core.management.base import BaseCommand, CommandError
import datetime
from events.models import Event
#from api.models import Project
#
# # Code to add permission to group ???
# #ct = ContentType.objects.get_for_model(Project)

# # Now what - Say I want to add 'Can add project' permission to new_group?
# #permission = Permission.objects.create(codename='can_add_project',
#                                        name='Can add project',
#                                        content_type=ct)
# #new_group.permissions.add(permission)


class Command(BaseCommand):
    def handle(self, *args, **options):
        new_group, created = Group.objects.get_or_create(name='students')
        new_group, created = Group.objects.get_or_create(name='teachers')
