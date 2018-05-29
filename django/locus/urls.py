from django.urls import include, path
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.views import generic
from reviews.views import about_view, contact_view, staff_view, ReviewsListView, ReviewsDetailView, ReviewCreateView

from django.contrib.auth.views import LoginView

from profiles.views import RegisterView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', LoginView.as_view(), name = 'login'),
    url(r'^register/$', RegisterView.as_view(), name = 'register'),    
    url(r'^$', generic.TemplateView.as_view(template_name='home.html'), name = 'home'),
    url(r'^u/', include('profiles.urls', namespace='profiles')),
    url(r'^reviews/', include(('reviews.urls', 'reviews'), namespace='reviews')),
    url(r'^locations/', include('locations.urls', namespace='locations')),
    url(r'^tags/', include('tags.urls', namespace='tags')),
    url(r'^about/$', about_view, name = "about"),
    url(r'^contact/$', contact_view, name = "contact"),
    url(r'^staff/$', staff_view, name = "staff"),
    #Names makes it easier to refer to the paths; you don't have to change your references if paths are changed
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

