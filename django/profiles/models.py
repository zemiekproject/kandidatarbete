from django.db import models
from django.conf import settings
from django.urls import reverse


User = settings.AUTH_USER_MODEL

def get_absolute_url(username): #Defines which url to redirect to after made review
        #return f"/reviews/{self.slug}"
        return reverse("profiles:detail", kwargs = {'username': username}) #kwargs are always dicitonaries
    
#class Profile(models.Model):
    #user            = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    #firstname       = models.CharField(max_length=30, null=True, blank=True)
    #lastname        = models.CharField(max_length=30, null=True, blank=True)
    #aboutme         = models.CharField(max_length=1000, null=True, blank=True)
 
class ProfilePicture(models.Model): 
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    picture = models.FileField(upload_to = 'static/graphics', default=True)
  


  
    
    def __str__(self):
        return self.picture.url
    
 