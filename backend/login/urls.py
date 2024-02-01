from django.urls import path, include
from . import views

urlpatterns = [
     path('signin/',views.create_employee, name='create_employee'),
     path('',views.validate_employee, name='validate_employee'),
]