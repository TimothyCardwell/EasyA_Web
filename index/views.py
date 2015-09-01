from django.shortcuts import render
from account import services
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'index.html')


@csrf_exempt
def login(request):
    if request.POST:
        username = request.POST["username"]
        password = request.POST["password"]
        services.login(username, password)
        request.session["isLoggedIn"] = True
        request.session["username"] = "Tim"
    return HttpResponse("Success")


@csrf_exempt
def logout(request):
    del request.session["isLoggedIn"]
    del request.session["username"]
    return HttpResponse("Success")

# TODO Make requests from this server
# TODO Get caching going
#def getUser(request):
