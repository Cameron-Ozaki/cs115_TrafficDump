from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),        
    path('about', views.about, name='about'),        
    path('locations', views.locations, name='locations'),        
    path('locations/selibrary', views.se_library, name='selibrary'),        
]
