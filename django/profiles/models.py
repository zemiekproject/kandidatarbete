from django.db import models
from django.conf import settings
from django.urls import reverse

User = settings.AUTH_USER_MODEL

def get_absolute_url(username): #Defines which url to redirect to after made review
        #return f"/reviews/{self.slug}"
        return reverse("profiles:detail", kwargs = {'username': username}) #kwargs are always dicitonaries