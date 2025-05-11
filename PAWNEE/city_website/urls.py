from django.urls import path
from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.send_the_index, name='index'),
    path('signup', views.user_sign_up, name="signup"),
    path('signin', views.user_sign_in, name="signin"),
    path('curr_user', views.curr_user, name="curr_user"),
    path('signout', views.user_sign_out, name="signout"),
]
