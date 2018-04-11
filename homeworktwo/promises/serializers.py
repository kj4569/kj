from rest_framework import serializers
from promises.models import Promise, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User


class PromiseSerializer(serializers.ModelSerializer):
    user1 = serializers.ReadOnlyField(source='user1.id')
    sinceWhen = serializers.DateTimeField()
    tilWhen = serializers.DateTimeField()

    class Meta:
        model = Promise
        user1 = serializers.ReadOnlyField(source='user1.id')
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user1', 'user2')

    def validate(self, data):
        """
        Check that the sinceWhen is before the tilWhen and user2 is different from user1.
        """
        user1 = self.context['request'].user
        
        if data['sinceWhen'] > data['tilWhen']:
            raise serializers.ValidationError("sinceWhen must precede after tilWhen")

        if user1  == data['user2']:
            raise serializers.ValidationError("user2 must be a different user")
        
        return data



class PromiseUpdateSerializer(PromiseSerializer):
    "should only be able to update status"

    class Meta:
        model = Promise
        read_only_fields = ['id', 'created', 'user1', 'user2']
        fields = ['sinceWhen', 'tilWhen']


    def validate(self, data):
        """
        Check that the sinceWhen is before the tilWhen.
        """

        if data['sinceWhen'] > data['tilWhen']:
            raise serializers.ValidationError("sinceWhen must precede after tilWhen")
    
        return data


class UserSerializer(serializers.ModelSerializer):
    promises_as_inviter = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())
    promises_as_invitee = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'promises_as_inviter', 'promises_as_invitee', 'password')


    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        username=validated_data['username']
        user.set_password(validated_data['password'])

        user.save()

        return user


class UserAllSerializer(serializers.ModelSerializer):
    whole_promises = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_whole_promises(self, user):
        queryset = Promise.objects.filter(user1=user)
        queryset = queryset | Promise.objects.filter(user2=user)
        queryset = queryset.distinct()
        serializer = PromiseSerializer(instance=queryset, many=True)
        
        if (len(serializer.data)>0):
            temp = []
            for i in serializer.data:
                temp.append(i['id'])
            return temp
        else:
            return []
 

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'whole_promises')
