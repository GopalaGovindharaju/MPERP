import math
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from Cust_AssetList.models import CustomerAsset
from rest_framework.response import Response
from Cust_AssetList.serializer import CustomerSerializer

@api_view(['GET'])
def get_orderid(request):
    orderid = CustomerAsset.objects.values_list('orderNumber', flat=True).distinct()
    orderid = list(orderid)
    return Response({'orderid': orderid})

@api_view(['GET'])
def get_details(request, order_number):
    try:
        products = CustomerAsset.objects.filter(orderNumber=order_number)
        customers = CustomerAsset.objects.filter(orderNumber=order_number).values('name').distinct()
        customer_names = [customer['name'] for customer in customers]
        product_names = [product.productName for product in products]
        return Response({'customer_names': customer_names, 'product_names': product_names})
       
       
    except CustomerAsset.DoesNotExist:
        return Response({'error': 'Products not found'})

@api_view(['GET'])
def get_product_details(request, order_number, customer_name, product_name):
    try:
        quantitys = CustomerAsset.objects.filter(orderNumber=order_number,name=customer_name,productName=product_name).values('quantity').distinct()
        productnumbers = CustomerAsset.objects.filter(orderNumber=order_number,name=customer_name,productName=product_name).values('productNumber').distinct()
        deadlines = CustomerAsset.objects.filter(orderNumber=order_number,name=customer_name,productName=product_name).values('deadline').distinct()
        p_quantity = [quantity['quantity'] for quantity in quantitys]
        p_productnumber = [productnumber['productNumber'] for productnumber in productnumbers]
        p_deadline = [deadline['deadline'] for deadline in deadlines]
        
        
        return Response({'quantity': p_quantity, 'productNumber': p_productnumber, 'deadline': p_deadline, })
    except CustomerAsset.DoesNotExist:
        return Response({'error': 'Products not found'})
  
@api_view(['GET'])
def get_partnumbers(request, table_name):
    table_name = f'"{table_name}"'
    with connections['default'].cursor() as cursor:
        cursor.execute(f'SELECT "Sub_Assy_part_No" FROM {table_name}')
        data = cursor.fetchall()
    return Response(data) 



@api_view(['GET'])
def fetch_meterial(request, table_name):
    with connections['default'].cursor() as cursor:
        cursor.execute(f'SELECT "Material", "commodity", COUNT(*) as count FROM "{table_name}" GROUP BY "Material", "commodity"')
        rows = cursor.fetchall()

    data = []
    for row in rows:
        material, commodity, count = row
        data.append({'material': material, 'commodity': commodity, 'count': count})

    return Response(data)





import json
import math
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse
from django.db import connections
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

class CustomJSONEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, float) and math.isnan(obj):
            return "NaN"
        return super().default(obj)

def handle_nan(value):
    if isinstance(value, float) and math.isnan(value):
        return None
    return value

@api_view(['GET'])
@csrf_exempt
def fetch_data(request, table_name):
  

    # Construct the table name dynamically
    table_name = f'"{table_name}"'

    # Fetch the table data
    with connections['default'].cursor() as cursor:
        cursor.execute(f'SELECT "Sub_Assy_part_No", "Part_Name", "Quantity", "Material","Blank_Wt","Machine" FROM {table_name}')

        table_data = cursor.fetchall()

    # Prepare the response data
    data = []
    columns = ["Part_Number", "Part_Name", "Quantity", "Material","Weight","Machine"]
    for row in table_data:
        row_values = [handle_nan(value) for value in row]
        if row_values[2] != '0.0':  # Check if Quantity is not equal to zero
            data.append(dict(zip(columns, row_values)))

    return JsonResponse(data, safe=False)

