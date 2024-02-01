from rest_framework.serializers import ModelSerializer
from Cust_AssetList.models import CustomerAsset
class CustomerSerializer(ModelSerializer):
    class Meta:
        model = CustomerAsset
        fields = ('name','orderNumber','productNumber','productName','quantity','orderPlacedDate','deadline')