__author__ = 'Timothy'

from django.conf import settings
import requests
import logging
import json

logger = logging.getLogger('rest_api')


def login(username, password):
    payload = {
        username: username,
        password: password
    }
    response = requests.get(url=settings.REST_URL + "users/")
    logger.info("I am here!")
    logger.info(response.json())
    return response.json()
