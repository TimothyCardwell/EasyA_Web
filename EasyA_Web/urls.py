from django.conf.urls import include, url

urlpatterns = [
    url(r'^index/', include('index.urls')),
    url(r'^account/', include('account.urls')),
    url(r'^questions/', include('questions.urls')),
    url(r'^answers/', include('answers.urls'))
]
