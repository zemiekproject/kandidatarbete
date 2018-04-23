from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from django.views.generic import ListView, DetailView, CreateView, RedirectView

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions

# REST STUFF
from reviews.serializers import UserSerializer, ReviewSerializer, LocationSerializer, TagSerializer
from rest_framework import generics
from django.shortcuts import render
from .models import Review
from locations.models import Location
from tags.models import Tag
from .forms import ReviewCreateForm

import random
from django.contrib.auth import get_user_model

User = get_user_model()
# def review_createview(request):
#     form = ReviewCreateForm(request.POST or None)
#     errors = None
#     if form.is_valid():
#         form.save()
#         return HttpResponseRedirect('/reviews/')
#     if form.errors:
#         error = form.errors

    # template_name = 'reviews/form.html'
    # context = {"form": form, "errors", errors}
    # return render(request, template_name, context)

def about_view(request):
    template_name = 'about.html'
    num = random.randint(0,100)
    context = {
        "num": num
    }

    return render(request, template_name, context)

class ReviewsListView(ListView):
    def get_queryset(self, **kwargs):
        queryset = Review.objects.all() 
        query = self.request.GET.get("q")
        if query:
            queryset = queryset.filter(title__icontains=query)

        return queryset

class ReviewsDetailView(DetailView):
    def get_object(self, *args, **kwargs):
        slug = self.kwargs.get("slug")
        obj = get_object_or_404(Review, slug=slug)
        return obj

class ReviewCreateView(LoginRequiredMixin, CreateView):
    form_class = ReviewCreateForm
    template_name = 'reviews/form.html'
    #success_url = "/reviews/"

    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.author = self.request.user
        return super(ReviewCreateView, self).form_valid(form)

class ReviewUpVoteToggle(RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        slug = self.kwargs.get("slug")
        obj = get_object_or_404(Review, slug=slug)
        url_ = obj.get_absolute_url()
        user = self.request.user
        if user.is_authenticated:
            if user in obj.upvotes.all():
                obj.upvotes.remove(user)
            else: 
                if user in obj.downvotes.all(): obj.downvotes.remove(user)
                obj.upvotes.add(user)
        return url_

class ReviewDownVoteToggle(RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        slug = self.kwargs.get("slug")
        obj = get_object_or_404(Review, slug=slug)
        url_ = obj.get_absolute_url()
        user = self.request.user
        if user.is_authenticated:
            if user in obj.downvotes.all():
                obj.downvotes.remove(user)
            else: 
                if user in obj.upvotes.all(): obj.upvotes.remove(user)
                obj.downvotes.add(user)
        return url_
        
# Also REST, handles GET and POST 4 react
class ReviewListCreate(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class LocationListCreate(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class TagListCreate(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
