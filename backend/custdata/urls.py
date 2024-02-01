from django.urls import path
from . import views

urlpatterns = [
    path('',views.get_custdata, name='get_cust1'),
    path('savedata/',views.post_custdata, name='post_cust1'),
]
