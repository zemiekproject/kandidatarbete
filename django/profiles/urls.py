from .views import ProfileDetailView, logout_view

from django.conf.urls import url
from django.urls import include, path

from .views import UpdateProfilePicture
from django.urls import path


app_name='profiles'
urlpatterns = [
    path('logout/', logout_view, name="logout"),
    url(r'^(?P<username>[\w-]+)/$', ProfileDetailView.as_view(), name="detail"),
    path('<username>/updatePicture/', UpdateProfilePicture.as_view(), name = "updatePicture")

    
    #Names makes it easier to refer to the paths
]

