from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('locations', views.locations, name='locations'),
    path('locations/selibrary/1', views.se_library_upper, name='selibrary_upper'),
    path('locations/selibrary/2', views.se_library_main, name='selibrary_main'),
    path('locations/selibrary/3', views.se_library_lower, name='selibrary_lower'),
]
