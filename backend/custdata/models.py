from django.db import models

class CustData(models.Model):
    name = models.CharField(max_length=100)
    custid = models.IntegerField(unique=True)
    address = models.CharField(max_length=150)
    email = models.CharField(max_length=100)
    mobileNum = models.CharField(max_length = 20)