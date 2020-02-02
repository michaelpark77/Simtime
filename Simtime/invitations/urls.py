from rest_framework import routers
from .api import InvitationsViewSet

router = routers.DefaultRouter()
router.register('api/invitations', InvitationsViewSet, 'invitations')
urlpatterns = router.urls
