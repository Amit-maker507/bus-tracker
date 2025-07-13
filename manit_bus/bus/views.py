from rest_framework import generics, permissions
from .models import Bus
from .serializers import BusLocationSerializer

class BusLocationUpdateView(generics.UpdateAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusLocationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Assume each driver has one bus
        return Bus.objects.get(driver=self.request.user)

class BusLocationGetView(generics.RetrieveAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusLocationSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        return Bus.objects.first()  # Only 1 bus for now
