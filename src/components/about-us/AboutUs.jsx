import React from 'react';

export default function AboutUs() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '3%', alignItems: 'center', height: '120vh', justifyContent: 'center', border: '1px solid black',
    }}
    >
      <h2>Дмитрий и Ирина</h2>
      <div>
        Тут
        <br />
        Какой-то большой текст про то
        <br />
        {' '}
        как сильно ты меня любишь.
      </div>
    </div>
  );
}
