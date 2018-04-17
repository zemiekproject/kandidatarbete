from django.db import models
from django.conf import settings
from django.urls import reverse
from django.db.models import Avg
from django.db.models.signals import pre_save

class Tag(models.Model):
    # author      = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    name        = models.CharField(max_length=30)
    # avgRating  = Review.objects.all()
    # text        = models.CharField(max_length=500, null=True, blank=True)
    # timestamp   = models.DateTimeField(auto_now_add=True)
    # updated     = models.DateTimeField(auto_now=True)
    slug        = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self): 
        return reverse("tags:detail", kwargs = {'slug': self.slug}) #kwargs are always dicitonaries

def tag_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = instance.name

pre_save.connect(tag_pre_save_receiver, sender=Tag)

