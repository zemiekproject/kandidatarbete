from django.contrib.auth.mixins import LoginRequiredMixin
#from django.contrib import auth
from django.contrib.auth import get_user_model, get_user
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from django.views.generic import DetailView, CreateView
from .forms import RegisterForm

# Create your views here.

User = get_user_model()

class RegisterView(CreateView):
    form_class = RegisterForm
    template_name = "registration/register.html"
    success_url = "/"

class ProfileDetailView(LoginRequiredMixin, DetailView):
    qs = User.objects.filter(is_active=True)
    template_name = 'profiles/user.html'

    def get_object(self):
          
        username = self.kwargs.get("username")

        if not User.objects.filter(username__iexact=username).exists():
            username = self.request.user
        
        if username is None:
            raise Http404

        return get_object_or_404(User, username__iexact=username, is_active=True)

    
