import os
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
from django.core.management import call_command #temp
from django.contrib.auth import get_user_model # temp
from .models import *
import json

# Create your views here.
def setup_server(request): #temp? 
    call_command('migrate')

    User = get_user_model()
    if not User.objects.fitler(is_superuser=True).exists():
        User.objects.create_superuser(
            username='admin',
            email=os.getenv("ADMIN_EMAIL", "admin@exmaple.com"),
            password=os.getenv("ADMIN_PASSWORD", "adminpass123"),
        )
        return HttpResponse("Migrations complete. Superuser created.")
    
    return HttpResponse("Migrations complete. Superuser already exists.")


def send_the_index(request):
    the_index = open('../PAWNEE/static/index.html').read()
    return HttpResponse(the_index)


@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    first_name = request.data['first_name']
    last_name = request.data['last_name']
    department = request.data['department']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try:
        new_user = Gov_Employee.objects.create_user(username=email, email=email, password=password, first_name=first_name,
                                                    last_name=last_name, department=department, is_superuser=super_user, is_staff=staff)
        new_user.save()
        return JsonResponse({"success": f"{first_name}, your user was created!"})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})


@api_view(["POST"])
def user_sign_in(request):
    email = request.data['email']
    password = request.data['password']
    print(request._request)
    user = authenticate(username=email, password=password)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'signin': True})
        except Exception as e:
            print(e)
            return JsonResponse({'signin': False})
    return JsonResponse({'signin': False})


@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields=[
                              'first_name', 'email'])
        user_info_workable = json.loads(user_info)
        print(user_info_workable[0]['fields']['first_name'])
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user": None})


@api_view(["POST"])
def user_sign_out(request):
    try:
        logout(request)
        return JsonResponse({"signout": True})
    except Exception as e:
        print(e)
        return JsonResponse({"signout": False})
