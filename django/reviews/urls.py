from django.urls import include, path
from django.conf.urls import url
from reviews.views import about_view, ReviewsListView, ReviewsDetailView, ReviewCreateView, ReviewListCreate, UserListCreate, ReviewUpVoteToggle, ReviewDownVoteToggle


app_name='reviews'
urlpatterns = [
    url(r'^$', ReviewsListView.as_view(), name = "list"),
    url(r'^create/$', ReviewCreateView.as_view(), name = "create"),
    url(r'^(?P<slug>[\w-]+)/$', ReviewsDetailView.as_view(), name = "detail"),
    url(r'^(?P<slug>[\w-]+)/upvote/$', ReviewUpVoteToggle.as_view(), name = "upvote-toggle"),
    url(r'^(?P<slug>[\w-]+)/downvote/$', ReviewDownVoteToggle.as_view(), name = "downvote-toggle"),
    path('api/review/', ReviewListCreate.as_view() ),
    path('api/user/', UserListCreate.as_view() ),
    #Names makes it easier to refer to the paths; so if path changes you don't need to change all references
]

