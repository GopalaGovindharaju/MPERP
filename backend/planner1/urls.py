from django.urls import path
from . import views

urlpatterns = [  
    path('orderid/', views.get_orderid, name='get_orderid'),
    path('details/<int:order_number>/', views.get_details, name='get_details'),
    path('product/<str:order_number>/<str:customer_name>/<str:product_name>/', views.get_product_details, name='get_product_details'),
    path('fetch-data/<str:table_name>/',views.fetch_data, name='fetch_data'),
    path('productno/<str:table_name>/', views.get_partnumbers, name='get_partnumbers'),
    path('fetch-meterial/<str:table_name>/',views.fetch_meterial, name='fetch_meterial'),
]
