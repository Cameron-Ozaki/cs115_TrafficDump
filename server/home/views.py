from django.shortcuts import render
from django.http import HttpResponse
import os
from django.template import Template, Context


# TEMPLATE_DIRS = (
#     os.path.join(SETTINGS_PATH, 'templates'),
# )


# Create your views here.
def index(request):
    t = "server/templates/home.html"
    return render(request, t)
