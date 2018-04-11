from promises.models import Promise
from promises.serializers import PromiseSerializer, PromiseUpdateSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from promises.serializers import UserSerializer, UserAllSerializer
from rest_framework import permissions
from promises.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers



class PromiseList(generics.ListCreateAPIView):
    queryset = Promise.objects.all()
    serializer_class = PromiseSerializer

    def perform_create(self, serializer):
        serializer.save(user1=self.request.user)


class PromiseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Promise.objects.all()
    serializer_class = PromiseSerializer
    permission_classes = (permissions.IsAuthenticated,
                          IsOwnerOrReadOnly,)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            serializer_class = PromiseSerializer
        elif self.request.method == 'PUT':
            serializer_class = PromiseUpdateSerializer
        return serializer_class



class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserAllList(UserList): 
    serializer_class = UserAllSerializer


class UserAllDetail(UserDetail):
    serializer_class = UserAllSerializer



@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'promises': reverse('promise-list', request=request, format=format)
    })



class PromiseHighlight(generics.GenericAPIView):
    queryset = Promise.objects.all()
    renderer_classes = (renderers.StaticHTMLRenderer,)

    def get(self, request, *args, **kwargs):
        promise = self.get_object()
        return Response(promise.highlighted)

