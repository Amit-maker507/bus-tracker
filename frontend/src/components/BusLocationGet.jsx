// src/components/BusLocationGet.jsx
import React, { useEffect, useState } from 'react';

export default function BusLocationGet({ token }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/bus/location/get/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch location');
        }

        const data = await res.json();
        setLocation(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocation();

    // Optional: Auto-refresh every 5 sec
    const interval = setInterval(fetchLocation, 5000);

    return () => clearInterval(interval);
  }, [token]);

  return (
    <div>
      <h2>🚌 Bus Position</h2>
      {location ? (
        <>
          <p>Number: {location.number}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Updated: {new Date(location.updated_at).toLocaleString()}</p>
        </>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}
