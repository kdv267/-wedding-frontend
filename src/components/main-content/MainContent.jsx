import React from 'react';

export default function MainContent() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '3%', alignItems: 'center', height: '90vh', justifyContent: 'center', border: '1px solid black',
    }}
    >
      <div>Дмитрий & Ирина</div>
      <div>17.09.2023</div>
    </div>
  );
}
