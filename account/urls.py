from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^login/', views.login, name='login'),
    url(r'^logout/', views.logout, name='logout'),
    url(r'^$', views.account, name='account'),
    url(r'^user/', views.user, name='user')
]