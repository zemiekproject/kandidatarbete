from django.conf.urls import url
from tags.views import TagsListView, TagsDetailView

app_name='locations'
urlpatterns = [
    url(r'^$', TagsListView.as_view(), name = "list"),
    url(r'^(?P<slug>[\w-]+)/$', TagsDetailView.as_view(), name = "detail"),
    #Names makes it easier to refer to the paths; so if path changes you don't need to change all references
]