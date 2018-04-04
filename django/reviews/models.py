from django.db import models
from django.db.models.signals import pre_save
from .utils import unique_slug_generator
from django.conf import settings
from django.urls import reverse

User = settings.AUTH_USER_MODEL

class Review(models.Model):
    author      = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title       = models.CharField(max_length=120)
    location    = models.CharField(max_length=120)
    text        = models.CharField(max_length=500, null=True, blank=True)
    timestamp   = models.DateTimeField(auto_now_add=True)
    updated     = models.DateTimeField(auto_now=True)
    slug        = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self): #Defines which url to redirect to after made review
        #return f"/reviews/{self.slug}"
        return reverse("reviews:detail", kwargs = {'slug': self.slug}) #kwargs are always dicitonaries

def pre_save_receiver(sender, instance, *args, **kwargs):
    print("Saving...")
    print(instance.timestamp)
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(pre_save_receiver, sender=Review)

