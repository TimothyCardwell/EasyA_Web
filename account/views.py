from django.http import HttpResponse
from django.template import RequestContext, loader
from django.template.loader import get_template
from django.template.response import SimpleTemplateResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def account(request):
    return SimpleTemplateResponse(get_template('account.html'))


@csrf_exempt
def login(request):
    response = HttpResponse()
    response.set_cookie(key='usertoken', value='FigureOutHowToTokenize!')
    return response


@csrf_exempt
def logout(request):
    response = HttpResponse()
    response.delete_cookie(key="user")
    response.delete_cookie(key="username")
    response.delete_cookie(key="firstname")
    response.delete_cookie(key="userid")
    response.delete_cookie(key="usertoken")
    return response


@csrf_exempt
def user(request):
    '''
    TODO Return JsonResponse, not HttpResponse
    :param request:
    :return:
    '''
    user = '{"firstname":"Tim"}'
    return HttpResponse(user, content_type="application/json")