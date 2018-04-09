from django.conf.urls import url
from locations.views import LocationsListView, LocationsDetailView

app_name='locations'
urlpatterns = [
    url(r'^$', LocationsListView.as_view(), name = "list"),
    url(r'^(?P<slug>[\w-]+)/$', LocationsDetailView.as_view(), name = "detail"),
    #Names makes it easier to refer to the paths; so if path changes you don't need to change all references
]