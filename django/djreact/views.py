from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.forms import ModelForm
from django import forms
from .models import Reviews

def review(request):
    try:
        review_text = get_object_or_404(pk=request.POST['textBox'])
    except: (KeyError):
        return render(request, '')
    else:
        Reviews.review_text.save()
    #return HttpResponseRedirect(reverse(''))