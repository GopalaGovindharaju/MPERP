from django.contrib import admin
from .models import Signin

class SigninAdmin(admin.ModelAdmin):
    list_display = ('Emp_Name','Emp_Id','Emp_Role', 'password')

admin.site.register(Signin, SigninAdmin)