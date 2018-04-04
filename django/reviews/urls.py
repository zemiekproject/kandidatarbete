
from django.conf.urls import url
from reviews.views import about_view, ReviewsListView, ReviewsDetailView, ReviewCreateView


app_name='reviews'
urlpatterns = [
    url(r'^$', ReviewsListView.as_view(), name = "list"),
    url(r'^create/$', ReviewCreateView.as_view(), name = "create"),
    url(r'^(?P<slug>[\w-]+)/$', ReviewsDetailView.as_view(), name = "detail"),
    #Names makes it easier to refer to the paths; so if path changes you don't need to change all references
]

