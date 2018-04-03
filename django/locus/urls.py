
from django.conf.urls import url
from django.contrib import admin
from django.views import generic
from reviews.views import about_view, ReviewsListView, ReviewsDetailView, ReviewCreateView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', generic.TemplateView.as_view(template_name='home.html')),
    url(r'^reviews/$', ReviewsListView.as_view()),
    url(r'^reviews/create/$', ReviewCreateView.as_view()),
    url(r'^reviews/(?P<slug>[\w-]+)/$', ReviewsDetailView.as_view()),
    url(r'^about/$', about_view),

]

"""
from django.conf.urls import url
from django.contrib import admin
from django.views import generic
from .views import review

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^review/',
        generic.TemplateView.as_view(template_name='review.html')),
    url(r'^$',
        generic.TemplateView.as_view(template_name='homepage.html')),
    url(r'^review/$', review.make_review, name='make_review'),
]
>>>>>>> a88cf7ceac347260db1247d0bb7752f14cae63a6:django/djreact/urls.py
