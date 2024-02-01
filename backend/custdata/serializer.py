from rest_framework.serializers import ModelSerializer
from custdata.models import CustData
class CustSerializer(ModelSerializer):
    class Meta:
        model = CustData
        fields = ('name','custid','address','email','mobileNum')