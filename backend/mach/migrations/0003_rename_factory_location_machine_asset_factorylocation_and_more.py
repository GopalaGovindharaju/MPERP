# Generated by Django 4.2.1 on 2023-06-10 07:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mach', '0002_rename_machine_layout_machine_asset_machine_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='machine_asset',
            old_name='factory_location',
            new_name='factoryLocation',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='last_maintenance_date',
            new_name='lastMaintenanceDate',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='machine_code',
            new_name='machineCode',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='machine_location',
            new_name='machineLocation',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='machine_name',
            new_name='machineName',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='machine_type',
            new_name='machineType',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='next_maintenance_date',
            new_name='nextMaintenanceDate',
        ),
        migrations.RenameField(
            model_name='machine_asset',
            old_name='purchased_date',
            new_name='purchasedDate',
        ),
    ]
