from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
from Cust_AssetList.models import CustomerAsset
from Cust_AssetList.serializer import CustomerSerializer

@api_view(['GET'])
def get_cust(requests):
    data = CustomerAsset.objects.all()
    serial = CustomerSerializer(data, many=True)
    return Response(serial.data)

@api_view(['POST'])
def post_cust(request):
    # Delete existing table data
    CustomerAsset.objects.all().delete()

    data = request.data

    # Iterate over each JSON object in the list and save as separate records
    for record in data:
        serializer = CustomerSerializer(data=record)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=400)

    return Response("Data saved successfully")