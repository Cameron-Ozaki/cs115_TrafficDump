from django.shortcuts import render

from django.template import loader

# Create your views here.
def handler404(request):
    return render(request, '404.html', status=404)

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

def se_library_more_info(request):
    return render(request, 'home/locations/se_library_more_info.html')

def mc_ground(request):
    return render(request, 'home/locations/mc_ground.html')

def mc_more_info(request):
    return render(request, 'home/locations/mc_more_info.html')
