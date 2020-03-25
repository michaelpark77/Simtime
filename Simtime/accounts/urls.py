from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPair,TokenVerify, AccountDetailAPI, AccountCreateAPI, UserAPI

# data = {'token': token}
# valid_data = VerifyJSONWebTokenSerializer().validate(data)
# user = valid_data['user']


urlpatterns = [
    # path('api/auth', include('knox.urls')),
    # path('api/auth/register', RegisterAPI.as_view()),
    # path('api/auth/login', LoginAPI.as_view()),
    # path('api/auth/user', UserAPI.as_view()),
    # path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/auth/user/', UserAPI.as_view()), 
    path('api/token/obtain/', ObtainTokenPair.as_view(), name='token_create'),  
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerify.as_view(), name='token_verify'),
    # path('api-token-verify/', jwt_views.TokenVerifyView.as_view(), name='token_verify2'),

    path('api/auth/', AccountCreateAPI.as_view(), name="account_create"),   
    path('api/auth/<int:pk>', AccountDetailAPI.as_view(), name="account_detail")
]