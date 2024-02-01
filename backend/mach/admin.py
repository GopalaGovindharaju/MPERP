from django.contrib import admin

from .models import Machine_asset

class Machine_Admin(admin.ModelAdmin):
    list_display = ('machineName','machineCode','manufacturer','model','machineType','capacityValue','capacityUnit','purchasedDate','lastMaintenanceDate','nextMaintenanceDate','status','factoryLocation','machineLocation')
# Register your models here.
admin.site.register(Machine_asset,Machine_Admin)