
from django.urls import path
from .views import BusLocationUpdateView, BusLocationGetView

urlpatterns = [
    path('location/update/', BusLocationUpdateView.as_view(), name='bus-location-update'),
    path('location/get/', BusLocationGetView.as_view(), name='bus-location-get'),
]
