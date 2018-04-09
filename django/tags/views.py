from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from django.views.generic import ListView, DetailView, CreateView
# Create your views here.

from .models import Tag

class TagsListView(ListView):
    def get_queryset(self, **kwargs):
        queryset = Tag.objects.all() 
        return queryset

class TagsDetailView(DetailView):
    template_name = 'tags/tag_detail.html'
    def get_object(self, *args, **kwargs):
        slug = self.kwargs.get("slug")
        #id = Location.objects.get(name__iexact=slug).id
        # queryset = Review.objects.filter(location_id__exact=id)
        obj = get_object_or_404(Tag, slug__exact=slug)
        return obj