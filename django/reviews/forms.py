from django import forms

from .models import Review

# class ReviewCreateForm(forms.Form):
#     title       = forms.CharField()
#     location    = forms.CharField()
#     text        = forms.CharField(required=False)


class ReviewCreateForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = [
            'title',
            'location',
<<<<<<< HEAD
            'text',          
=======
            'text',
            'rating',  
            'tags',    
>>>>>>> ca24cbf84446e4c5187de4e5252d6f5e1b5d04ee
        ]

# class UpvoteForm(forms.ModelForm):
#     class Meta:
#         model = Review
#         fields = [
#             'upvotes',
#         ]