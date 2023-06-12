import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{
          display: 'flex', gap: '3%', fontSize: '12px', alignItems: 'center', justifyContent: 'center', width: '100%', border: '1px solid black', height: '60px', listStyleType: 'none',
        }}
        >
          <li>Приглашение</li>
          <li>О нас</li>
          <li>F.A.Q.</li>
          <li>Опрос</li>
          <li>Программа дня</li>
          <li>Место</li>
        </ul>
      </nav>
    </header>
  );
}
