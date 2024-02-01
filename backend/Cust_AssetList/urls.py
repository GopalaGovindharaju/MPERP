from django.urls import path
from . import views

urlpatterns = [
    path('',views.get_cust, name='get_custdata'),
    path('save/',views.post_cust, name='post_custdata'),
]