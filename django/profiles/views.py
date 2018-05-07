from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import FormMixin
#from django.contrib import auth
from django.contrib.auth import get_user_model, get_user
from django.contrib.auth import get_user_model, get_user, logout
from django.http import Http404, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.views.generic import DetailView, CreateView, FormView, UpdateView
from .forms import RegisterForm, ModelFormWithFileField
from .models import ProfilePicture
from django.core.files.storage import FileSystemStorage
import os
from locus.settings.base import MEDIA_ROOT
# Create your views here.

User = get_user_model()

def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')

class RegisterView(CreateView):
    form_class = RegisterForm
    template_name = "registration/register.html"
    success_url = "/"

class UpdateProfilePicture(UpdateView):
    success_url = "/"
    model = ProfilePicture
    fields = ['picture']
    template_name = 'profiles/update.html'

    def get_object(self):
        return ProfilePicture.objects.get(id=self.request.GET.get('id'))

class ProfileDetailView(LoginRequiredMixin, DetailView, FormView):
    model = ProfilePicture
    form_class = ModelFormWithFileField
    qs = User.objects.filter(is_active=True)
    template_name = 'profiles/user.html'
    success_url = "/"


    def get_object(self):
        username = self.kwargs.get("username")
        if not User.objects.filter(username__iexact=username).exists():
            username = self.request.user
        if username is None:
            raise Http404
        return get_object_or_404(User, username__iexact=username, is_active=True)

    
    def get_context_data(self,**kwargs):
        context = super(ProfileDetailView, self).get_context_data(**kwargs)
        context['form']=self.get_form()
        query = self.request.user
        print(query)
        context['picture']= str(ProfilePicture.objects.filter(author__exact=query)[0])
        print("Japp det är det" + context['picture'])
        context['author']=query
        
        return context
    
 

    def post(self, request, *args, **kwargs):
        return FormView.post(self, request, *args, **kwargs)  
    
    

