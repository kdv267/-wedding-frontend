import React from 'react';
import styles from './Invite.module.scss';

export default function Invite({ inviteRef, guests }) {
  return (
    <div
      className={styles.container}
      ref={inviteRef}
    >
      <h2>{guests?.name}</h2>

      {
        guests?.is_single ? (
          <div>
            <p>Приглашаем тебя на нашу свадьбу!</p>
            <br />
            <p>
              Мы будем очень рады, если ты проведешь вместе с нами этот особенный
              <br />
              {' '}
              день.
              Пожалуйста, подтверди или отклони участие до 01.01.2023
            </p>
          </div>
        ) : (
          <div>
            <p>Приглашаем вас на нашу свадьбу!</p>
            <br />
            <p>
              Мы будем очень рады, если вы проведете вместе с нами этот особенный
              <br />
              {' '}
              день.
              Пожалуйста, подтвердите или отклоните участие до 01.01.2023.
            </p>
          </div>
        )
      }

    </div>
  );
}
