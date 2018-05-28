from django.db import models
from django.conf import settings
from django.urls import reverse
from django.db.models.signals import post_save
from django.dispatch import receiver


User = settings.AUTH_USER_MODEL

    
class Profile(models.Model):
    user            = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    firstname       = models.CharField(max_length=30, null=True, blank=True)
    lastname        = models.CharField(max_length=30, null=True, blank=True)
    aboutme         = models.CharField(max_length=1000, null=True, blank=True)
    image           = models.FileField(null=True, blank=True)
 

    def __str__(self):
        return self.user.username
    
    def get_absolute_url(username): #Defines which url to redirect to after made review
        #return f"/reviews/{self.slug}"
        return reverse("profiles:detail", kwargs = {'username': username}) #kwargs are always dicitonaries

    def create_user_profile(sender, **kwargs):
        if kwargs['created']:
            profile = Profile.objects.create(user=kwargs['instance'])

    post_save.connect(create_user_profile, sender=User)

 
