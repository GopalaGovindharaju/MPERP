# Generated by Django 4.2.2 on 2023-07-20 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('custdata', '0002_custdata_mobilenum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='custdata',
            name='mobileNum',
            field=models.CharField(max_length=20),
        ),
    ]
