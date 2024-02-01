from rest_framework.serializers import ModelSerializer
from .models import Signin

class SigninSerializer(ModelSerializer):
    class Meta:
        model = Signin
        fields = ('Emp_Name','Emp_Id','Emp_Role')