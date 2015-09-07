from django.http import HttpResponse
from django.template import RequestContext, loader
from django.template.loader import get_template
from django.template.response import SimpleTemplateResponse


def question_list(request):
    return SimpleTemplateResponse(get_template('question_list.html'))


def create_question(request):
    return SimpleTemplateResponse(get_template('create_question.html'))