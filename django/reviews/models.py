from django.db import models
from django.db.models.signals import pre_save
from .utils import unique_slug_generator
from django.conf import settings
from django.urls import reverse
from tags.models import Tag
from django.db.models import F
User = settings.AUTH_USER_MODEL

## ADDED A BUNCH OF BLANKS SHUDN*T B BLANKS
class Review(models.Model):
    author      = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title       = models.CharField(max_length=120)
    location    = models.ForeignKey("locations.Location", on_delete=models.DO_NOTHING, db_column='location')

    rating      = models.IntegerField(default=0)
    upvotes     = models.IntegerField(default=0)
    downvotes   = models.IntegerField(default=0)

    text        = models.CharField(max_length=500, null=True, blank=True)
    tags        = models.ManyToManyField(Tag, blank=True, null=True)
    timestamp   = models.DateTimeField(auto_now_add=True)
    updated     = models.DateTimeField(auto_now=True)
    slug        = models.SlugField(null=True, blank=True)


    def __str__(self):
        return self.title
    
    def get_absolute_url(self): #Defines which url to redirect to after made review
        #return f"/reviews/{self.slug}"
        return reverse("reviews:detail", kwargs = {'slug': self.slug}) #kwargs are always dicitonaries

    def upvote(self):
        return Review.objects.filter(id__iexact=self.id).update(upvotes=F('upvotes') + 1)

    def downvote(self):
        return Review.objects.filter(id__iexact=self.id).update(downvotes=F('downvotes') + 1)


def pre_save_receiver(sender, instance, *args, **kwargs):
    print("Saving...")
    print(instance.timestamp)
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(pre_save_receiver, sender=Review)

