from django import forms
from django.http import HttpResponseRedirect
from django.contrib.auth import get_user_model
from profiles.models import ProfilePicture

User = get_user_model()

class RegisterForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username','email','first_name', 'last_name',)
        widgets = {

        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'class': 'form-control'})
        self.fields['email'].widget.attrs.update({'class': 'form-control'})
        self.fields['first_name'].widget.attrs.update({'class': 'form-control'})
        self.fields['last_name'].widget.attrs.update({'class': 'form-control'})
        self.fields['password1'].widget.attrs.update({'class': 'form-control'})
        self.fields['password2'].widget.attrs.update({'class': 'form-control'})

    def clean_email(self):
        email = self.cleaned_data.get("email")
        qs = User.objects.filter(email__iexact=email)
        
        if qs.exists():
            raise forms.ValidationError("Email already exists. Use a different one")
        return email

    def clean_password2(self):
        #Check that the two password entries match
        print("into clean_password2")
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
       #Save the provided password in hashed format
        user = super(RegisterForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        user.is_active = True
        print("into save")
        # create a new user hash for activating email

        if commit:
            user.save()
        return user

class ModelFormWithFileField(forms.ModelForm): 
    class Meta: 
        model=ProfilePicture
        fields = ['picture','author']


