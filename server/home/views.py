from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def index(request):
    return render(request, 'home/index.html')

def locations(request):
    return render(request, 'home/locations/locations.html')

def se_library(request):
    return render(request, 'home/locations/s_e_library.html')
