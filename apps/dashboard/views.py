from django.shortcuts import render
from django.views import View
# Create your views here.


class HomeView(View):

    def get(self, request):
        return render(request, 'index.html')


class NewView(View):

    def get(self, request):
        return render(request, 'new.html')


class PrivacyView(View):

    def get(self, request):
        return render(request, 'privacy-policy.html')


class CookieView(View):

    def get(self, request):
        return render(request, 'cookie-policy.html')

class MinorView(View):

    def get(self, request):
        return render(request, 'minor-damage-insurance.html')





