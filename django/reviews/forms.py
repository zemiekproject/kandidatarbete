from django import forms

from .models import Review, User

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
            'text',
                    
        ]

class CreatedByForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [
            'firstname',
            'lastname',
        ]