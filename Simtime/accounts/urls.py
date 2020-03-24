from django.urls import path, include
# from .api import RegisterAPI, LoginAPI, UserAPI
# from knox import views as knox_views
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPair, AccountCreate

urlpatterns = [
    # path('api/auth', include('knox.urls')),
    # path('api/auth/register', RegisterAPI.as_view()),
    # path('api/auth/login', LoginAPI.as_view()),
    # path('api/auth/user', UserAPI.as_view()),
    # path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),

    path('api/token/obtain/', ObtainTokenPair.as_view(), name='token_create'),  
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/register', AccountCreate.as_view(), name="create_user"),
]
