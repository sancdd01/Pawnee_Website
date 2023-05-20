from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Work_Order

# Create your views here.


@api_view(['POST', 'GET', 'DELETE'])
def workorderhandler(request):
    if request.method == 'POST':
        work_orders = list(Work_Order.objects.all().values())
        try:
            title = request.data['title']
            new_wo = Work_Order.objects.create(title=title)
            new_wo.save()
            work_orders = list(Work_Order.objects.all().values())
            return JsonResponse({'work_orders': work_orders})
        except Exception as e:
            print(e)
            return JsonResponse({'work_orders': work_orders})
    elif request.method == 'GET':
        try:
            work_orders = list(Work_Order.objects.all().values())
            return JsonResponse({'work_orders': work_orders})
        except Exception as e:
            print(e)
            return JsonResponse({'work_orders': []})
    elif request.method == 'DELETE':
        try:
            id = request.query_params.get('id')
            work_order = Work_Order.objects.get(pk=id)
            work_order.delete()
            work_orders = list(Work_Order.objects.all().values())
            return JsonResponse({'work_orders': work_orders})
        except Exception as e:
            print(e)
            return JsonResponse({'work_orders': []})
