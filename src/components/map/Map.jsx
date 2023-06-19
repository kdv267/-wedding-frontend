import React from 'react';

export default function Map({ mapRef }) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3%', height: '100vh', border: '1px solid black',
      }}
      ref={mapRef}
    >
      Карта
    </div>
  );
}
