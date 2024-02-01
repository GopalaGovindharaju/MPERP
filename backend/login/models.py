# models.py
from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Signin(models.Model):
    Emp_Name = models.CharField(max_length=80)
    Emp_Id = models.CharField(max_length=100, unique=True)
    Emp_Role = models.CharField(max_length=30)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.Emp_Name

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)