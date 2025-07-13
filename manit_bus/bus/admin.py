
from django.contrib import admin
from .models import Bus

@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ('number', 'driver', 'latitude', 'longitude', 'updated_at')
    search_fields = ('number', 'driver__username')
    list_filter = ('driver',)
