from django.urls import include, path
from django.conf.urls import url, include
from django.contrib import admin
from django.views import generic
from reviews.views import about_view, ReviewsListView, ReviewsDetailView, ReviewCreateView

from django.contrib.auth.views import LoginView

from profiles.views import RegisterView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', LoginView.as_view(), name = 'login'),
    url(r'^register/$', RegisterView.as_view(), name = 'register'),    
    url(r'^$', generic.TemplateView.as_view(template_name='home.html'), name = 'home'),
    url(r'^u/', include('profiles.urls', namespace='profiles')),
    url(r'^reviews/', include(('reviews.urls', 'reviews'), namespace='reviews')),
    url(r'^about/$', about_view, name = "about"),
    #Names makes it easier to refer to the paths; you don't have to change your references if paths are changed
]

