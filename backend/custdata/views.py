from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
from custdata.models import CustData
from custdata.serializer import CustSerializer

@api_view(['GET'])
def get_custdata(requests):
    data = CustData.objects.all()
    serial = CustSerializer(data, many=True)
    return Response(serial.data)

@api_view(['POST'])
def post_custdata(request):
    CustData.objects.all().delete()
    
    data = request.data
    
    for record in data:
        serializer = CustSerializer(data=record)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=400)
        
    return Response("Data saved successfully")