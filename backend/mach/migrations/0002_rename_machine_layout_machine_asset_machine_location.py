# Generated by Django 4.2.1 on 2023-06-10 07:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mach', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='machine_asset',
            old_name='machine_layout',
            new_name='machine_location',
        ),
    ]
