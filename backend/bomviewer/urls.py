from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_file, name='upload_file'),
    path('proname/', views.get_product_names, name='get_product_names'),
    path('custname/', views.get_customer_names, name='get_customer_names'),
    path('pronumber/', views.get_product_numbers, name='get_product_numbers'),
    path('tabledata/', views.fetch_table, name='fetch_table'),
    path('save/', views.upload_file, name='save_file'),
    path('update/', views.update_table_data, name='update'),
    path('deletetable/', views.delete_table, name='delete_table'),
]
  