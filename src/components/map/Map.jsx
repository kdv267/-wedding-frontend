import React from 'react';

export default function Map({ mapRef }) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3%', height: '100vh', borderTop: '0.5px solid gray',
      }}
      ref={mapRef}
    >
      Карта
    </div>
  );
}
