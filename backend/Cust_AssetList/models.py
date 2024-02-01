from django.db import models

# Create your models here.
class CustomerAsset(models.Model):
    name = models.CharField(max_length=100)
    orderNumber = models.IntegerField()
    productNumber = models.IntegerField()
    productName = models.CharField(max_length=100)
    quantity = models.IntegerField()
    orderPlacedDate = models.DateField()
    deadline = models.DateField()

    def __str__(self):
        return self.name