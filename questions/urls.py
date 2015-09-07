from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.question_list, name='question_list'),
    url(r'^create/', views.create_question, name='create_question'),
]