from rest_framework import permissions

permissions.SAFE_METHODS = ('HEAD', 'OPTIONS')


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the promise.
        return (obj.user1 == request.user or obj.user2 == request.user)
