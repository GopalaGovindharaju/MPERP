# Generated by Django 4.2.2 on 2023-07-20 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('custdata', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='custdata',
            name='mobileNum',
            field=models.IntegerField(default=0),
        ),
    ]
