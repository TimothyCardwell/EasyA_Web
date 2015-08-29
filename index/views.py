from django.shortcuts import render
import requests

def index(request):
    return render(request, 'index.html')


# TODO Make requests from this server
# TODO Get caching going
#def getUser(request):
