from django.contrib import admin

# Register your models here.
from .models import CustData

class CustAdmin(admin.ModelAdmin):
    list_display = ('name','custid','address','email','mobileNum')

admin.site.register(CustData, CustAdmin)
