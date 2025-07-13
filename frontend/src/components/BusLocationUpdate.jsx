import React, { useState } from 'react';

export default function BusLocationUpdate({ token }) {
  const [number, setNumber] = useState('Bus-101');  // Bus ka number fix kar do ya input bana lo
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // ✅ Phone ka GPS location lo
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
          alert('Error getting location');
        }
      );
    } else {
      alert('Geolocation not supported by this browser.');
    }
  };

  // ✅ Backend pe PUT request bhejo
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/api/bus/location/update/', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number,
          latitude,
          longitude,
        }),
      });

      if (!res.ok) {
        throw new Error('Update failed');
      }

      alert('✅ Location updated successfully!');
    } catch (err) {
      console.error(err);
      alert('❌ Error updating location');
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '20px' }}>
      <h2>📍 Driver: Update Bus Location</h2>
      <p>Bus Number: {number}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <button onClick={getCurrentLocation}>📡 Get Current Location</button>
      <button onClick={handleUpdate}>🚍 Update Location</button>
    </div>
  );
}
