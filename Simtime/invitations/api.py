
from .models import Invitation
from rest_framework import viewsets, permissions
from .serializers import InvitationSerializer

# Lead Viewset


class InvitationsViewSet(viewsets.ModelViewSet):
    queryset = Invitation.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = InvitationSerializer
