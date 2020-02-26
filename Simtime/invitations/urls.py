from rest_framework import routers
from .api import InvitationsViewSet, EventsViewSet


router = routers.DefaultRouter()
router.register('api/invitations', InvitationsViewSet, 'invitations')
router.register('api/events', EventsViewSet, 'events')
urlpatterns = router.urls
