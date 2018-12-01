from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('locations', views.locations, name='locations'),
    path('locations/selibrary/1', views.se_library_upper, name='selibrary_upper'),
    path('locations/selibrary/2', views.se_library_main, name='selibrary_main'),
    path('locations/selibrary/3', views.se_library_lower, name='selibrary_lower'),
    path('locations/selibrary/se_library_more_info', views.se_library_more_info, name='se_library_more_info'),
    path('locations/mc/ground', views.mc_ground, name='mc_ground'),
    path('locations/mc/mc_more_info', views.mc_more_info, name='mc_more_info')
]
