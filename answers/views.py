from django.http import HttpResponse
from django.template import RequestContext, loader


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")