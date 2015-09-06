from django.http import HttpResponse
from django.template import RequestContext, loader
from django.template.loader import get_template
from django.template.response import SimpleTemplateResponse


def questions(request):
    return SimpleTemplateResponse(get_template('questions.html'))