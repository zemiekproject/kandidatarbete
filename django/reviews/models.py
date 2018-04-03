from django.db import models
from django.db.models.signals import pre_save
from .utils import unique_slug_generator

class Review(models.Model):
    title       = models.CharField(max_length=120)
    location    = models.CharField(max_length=120)
    text        = models.CharField(max_length=500, null=True, blank=True)
    timestamp   = models.DateTimeField(auto_now_add=True)
    updated     = models.DateTimeField(auto_now=True)
    slug        = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.title

class User(models.Model):
    firstname       = models.CharField(max_length=120)
    lastname        = models.CharField(max_length=120)
    email           = models.CharField(max_length=120, null = False, blank = False)
    dob             = models.DateField(max_length=8)



def pre_save_receiver(sender, instance, *args, **kwargs):
    print("Saving...")
    print(instance.timestamp)
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(pre_save_receiver, sender=Review)

