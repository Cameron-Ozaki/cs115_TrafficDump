from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),        
    path('locations', views.locations, name='locations'),        
    path('locations/selibrary', views.se_library, name='selibrary'),        
]
