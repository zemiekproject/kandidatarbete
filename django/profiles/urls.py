from .views import ProfileDetailView

from django.conf.urls import url
from django.urls import include, path

from .views import UpdateProfilePicture

app_name='profiles'
urlpatterns = [
    url(r'^(?P<username>[\w-]+)/$', ProfileDetailView.as_view(), name="detail"),
    path('<username>/updatePicture/', UpdateProfilePicture.as_view(), name = "updatePicture")
    
    #Names makes it easier to refer to the paths
]

