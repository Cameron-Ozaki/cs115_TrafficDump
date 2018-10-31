from django.shortcuts import render

from django.template import loader

# Create your views here.
def index(request):
    return render(request, 'home/index.html')

def about(request):
    return render(request, 'home/about/about.html')

def locations(request):
    return render(request, 'home/locations/locations.html')

def se_library_upper(request):
    return render(request, 'home/locations/s_e_library_up_floor.html')

def se_library_main(request):
    return render(request, 'home/locations/s_e_library_main.html')

def se_library_lower(request):
    return render(request, 'home/locations/s_e_library_lower.html')
