from rest_framework import serializers
from .models import Bus

class BusLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ['id', 'number', 'latitude', 'longitude', 'updated_at']
