import React from 'react';

export default function Invite({ inviteRef, guests }) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: '3%', alignItems: 'center', height: '90vh', justifyContent: 'center', border: '1px solid black',
      }}
      ref={inviteRef}
    >
      <h2>{guests?.name}</h2>

      {
        guests?.is_single ? (
          <div>
            Приглашаем тебя на нашу свадьбу!
            <br />
            Мы будем очень рады, если ты проведешь вместе с нами этот особенный
            <br />
            {' '}
            день.
            Пожалуйста, подтверди или отклони участие до 01.01.2023
          </div>
        ) : (
          <div>
            Приглашаем вас на нашу свадьбу!
            <br />
            Мы будем очень рады, если вы проведете вместе с нами этот особенный
            <br />
            {' '}
            день.
            Пожалуйста, подтвердите или отклоните участие до 01.01.2023.
          </div>
        )
      }

    </div>
  );
}
