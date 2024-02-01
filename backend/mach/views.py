from django.shortcuts import render

from django.shortcuts import render
from .models import Machine_asset
from rest_framework.response import Response
from rest_framework.decorators import api_view
from mach.models import Machine_asset
from mach.serializer import MachineSerializer

@api_view(['GET'])
def get_mach(requests):
    data = Machine_asset.objects.all()
    serial = MachineSerializer(data,many=True)
    return Response(serial.data)

@api_view(['GET'])
def get_mach_name(request):
    machines = Machine_asset.objects.filter(status='Working')
    machine_names = [machine.machineName for machine in machines]
    return Response(machine_names)

@api_view(['POST'])
def post_mach(request):
    # Delete existing table data
    Machine_asset.objects.all().delete()

    data = request.data

    # Iterate over each JSON object in the list and save as separate records
    for record in data:
        serializer = MachineSerializer(data=record)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=400)

    return Response("Data saved successfully")