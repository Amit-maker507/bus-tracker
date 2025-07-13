// src/App.jsx
import React, { useState } from 'react';
import Login from './components/Login';
import BusLocationGet from './components/BusLocationGet';
import BusLocationUpdate from './components/BusLocationUpdate';

function App() {
  const [token, setToken] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🚌 MANIT Bus Tracker</h1>

      {/* Agar login nahi hua toh login form dikhao */}
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* Location GET wala component */}
          <BusLocationGet token={token} />

          {/* Driver phone se location UPDATE wala component */}
          <BusLocationUpdate token={token} />
        </>
      )}
    </div>
  );
}

export default App;

