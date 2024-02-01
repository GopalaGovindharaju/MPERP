# views.py
from .models import Signin
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['POST'])
def create_employee(request):
    if request.method == 'POST':
        data = request.data

        Emp_Name = data.get('Emp_Name')
        Emp_Id = data.get('Emp_Id')
        Emp_Role = data.get('Emp_Role')
        password = data.get('Password')

        emp_detail = Signin(
            Emp_Name=Emp_Name,
            Emp_Id=Emp_Id,
            Emp_Role=Emp_Role,
        )
        emp_detail.set_password(password)
        emp_detail.save()
        return Response("Signed")
    else:
        return Response("Can't Sign up")

@api_view(['POST'])
def validate_employee(request):
    if request.method == 'POST':
        data = request.data

        Emp_Name = data.get('Emp_Name')
        Emp_Id = data.get('Emp_Id')
        password = data.get('Password')

        try:
            employee = Signin.objects.get(Emp_Name=Emp_Name, Emp_Id=Emp_Id)
            stored_password = employee.password

            if employee.check_password(password):
                Emp_Role = employee.Emp_Role
                return Response(Emp_Role)
            else:
                return Response('')
        except Signin.DoesNotExist:
            return Response('')
