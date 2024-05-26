from django.shortcuts import render
from .models import ContentHeader, DetailsSee
# Create your views here.


def homepage(request):
    all_data = ContentHeader.objects.all()
    return render(request, "dracula_home/homepage.html", {"data": all_data})


def see_page(request):
    data = DetailsSee.objects.all()
    return render(request, "dracula_home/see.html", {"data": data})


def download(request):
    return render(request, "dracula_home/download.html")
