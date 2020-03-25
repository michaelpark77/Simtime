from .models import Invitation, Event
from rest_framework import viewsets, permissions
from .serializers import InvitationSerializer, EventSerializer



class EventsViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = EventSerializer

    def get_queryset(self):
        # 해당 유저의 invitations만 return
        return self.request.user.events.all()  # related_name으로 invitations지정

    def perform_create(self, serializer):
        # invitation을 만들 떄 host를 저장하도록 한다.
        serializer.save(host=self.request.user)


class InvitationsViewSet(viewsets.ModelViewSet):
    queryset = Invitation.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = InvitationSerializer

    def get_queryset(self):
        # 해당 유저의 invitations만 return
        return self.request.user.invitations.all()  # related_name으로 invitations지정

    def perform_create(self, serializer):
        # invitation을 만들 떄 host를 저장하도록 한다.
        serializer.save(host=self.request.user)