from rest_framework import serializers
from django.contrib.auth.models import Group
from django.contrib.auth.models import User


class AccountCreationSerializer(serializers.ModelSerializer):
    is_teacher = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email',
                  'username', 'password', 'is_teacher')
        extra_kwargs = {'password': {'write_only': True}}

    def save(self):
        user = User(email=self.validated_data['email'],
                    first_name=self.validated_data['first_name'], last_name=self.validated_data['last_name'],
                    username=self.validated_data['username'], password=self.validated_data['password']
                    )

        user.set_password(self.validated_data['password'])
        saved_user = user.save()
        if(self.validated_data['is_teacher']):
            group = Group.objects.get(name='teachers')
            user.groups.add(group)
        else:
            group = Group.objects.get(name='students')
            user.groups.add(group)

        # print(self.validated_data)
        return saved_user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
