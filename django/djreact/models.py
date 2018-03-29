from django.db import models 
from django.forms import ModelForm

class Reviews(models.Model):
    text = models.CharField(max_length=100)
    posted_on = models.DateTimeField(auto_add_now=True)