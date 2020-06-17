from django.urls import path, include
from .api import EventAPI, EventDetailAPI,EventImageAPI

urlpatterns = [
    path('api/events/', EventAPI.as_view(), name='events'),
    path('api/events/<int:pk>', EventDetailAPI.as_view(), name='events'),  
    path('api/events/create', EventAPI.as_view(), name='events_create'),
    path('api/events/img', EventImageAPI.as_view(), name='events_img'), 

]