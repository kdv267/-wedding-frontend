import React from 'react';

export default function Invite({ inviteRef }) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: '3%', alignItems: 'center', height: '90vh', justifyContent: 'center', border: '1px solid black',
      }}
      ref={inviteRef}
    >
      <h2>Имя 1 и Имя2</h2>
      <div>
        Приглашаем вас на нашу свадьбу!
        <br />
        Мы будем очень рады, если вы проведете вместе с нами этот особенный
        <br />
        {' '}
        день.
        Пожалуйста, подтвердите или отклоните участие.
      </div>
    </div>
  );
}
