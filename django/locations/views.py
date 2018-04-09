from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from django.views.generic import ListView, DetailView, CreateView
# Create your views here.

from .models import Location
from reviews.models import Review

class LocationsListView(ListView):
    def get_queryset(self, **kwargs):
        queryset = Location.objects.all() 
        return queryset

class LocationsDetailView(DetailView):
    template_name = 'locations/location_detail.html'
    def get_object(self, *args, **kwargs):
        slug = self.kwargs.get("slug")
        #id = Location.objects.get(name__iexact=slug).id
        # queryset = Review.objects.filter(location_id__exact=id)
        obj = get_object_or_404(Location, slug__exact=slug)
        return obj