from django.urls import path
from . import views

urlpatterns = [ 
     path('', views.get_mach, name='get_mach'),
     path('list/', views.get_mach, name='get_mach'),
     path('save/', views.post_mach, name='post_mach'),
     path('name/', views.get_mach_name, name='get_mach_name'),
]
