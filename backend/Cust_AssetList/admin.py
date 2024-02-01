from django.contrib import admin

# Register your models here.
from .models import CustomerAsset

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('name','orderNumber','productNumber','productName','quantity','orderPlacedDate','deadline')

admin.site.register(CustomerAsset, CustomerAdmin)
