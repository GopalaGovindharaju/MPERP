from mach.models import Machine_asset
from rest_framework.serializers import ModelSerializer

class MachineSerializer(ModelSerializer):
    class Meta:
        model = Machine_asset
        fields = '__all__'