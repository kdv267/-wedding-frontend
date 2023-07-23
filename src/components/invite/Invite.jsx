/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  Button, notification,
} from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Invite.module.scss';
import { SERVER_URL } from '../../constants';

export default function Invite({ inviteRef, guests }) {
  const { id } = useParams();
  const [confirmed, setConfirmed] = useState(undefined);

  useEffect(() => {
    setConfirmed(guests?.is_confirmed);
  }, [guests]);

  const accepInvitation = async () => {
    try {
      await axios.put(`${SERVER_URL}/${id}`, { is_confirmed: true });
      notification.success({
        message: 'Спасибо',
        description: 'Данные успешно сохранены!',
        placement: 'bottomRight',
      });
      setConfirmed(true);
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        placement: 'bottomRight',
      });
    }
  };

  const declineInvitation = async () => {
    try {
      await axios.put(`${SERVER_URL}/${id}`, { is_confirmed: false });
      notification.success({
        message: 'Спасибо',
        description: 'Данные успешно сохранены!',
        placement: 'bottomRight',
      });
      setConfirmed(false);
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        placement: 'bottomRight',
      });
    }
  };

  return (
    <div className={styles.container} ref={inviteRef}>
      {confirmed === undefined ? (
        guests?.is_single ? (
          <div>
            <p>
              Мы будем очень рады, если ты проведешь вместе с нами этот особенный
              <br />
              {' '}
              день. Пожалуйста, подтверди или отклони участие до 1 сентября
            </p>
            <div className={styles.buttons}>
              <Button className={styles.buttonAccept} size="large" type="primary" onClick={accepInvitation}>Подтвердить</Button>
              <Button className={styles.buttonReject} size="large" type="dashed" onClick={declineInvitation}>Отклонить</Button>
            </div>
          </div>
        ) : (
          <div>
            <p>
              Приглашаем вас стать свидетелями нашего счастья и разделить с нами этот особый день, который запомнится нам на всю жизнь.

              <br />
              Пожалуйста, подтвердите свое присутствие до 1 сентября!
            </p>
            <div className={styles.buttons}>
              <Button className={styles.buttonAccept} size="large" type="primary" onClick={accepInvitation}>Подтвердить</Button>
              <Button className={styles.buttonReject} size="large" type="dashed" onClick={declineInvitation}>Отклонить</Button>
            </div>
          </div>
        )

      ) : (
        confirmed ? (
          guests.is_single ? (
            <div className={styles.accept}>
              Будем очень рады видеть тебя! Но если вдруг твои планы изменились, то пожалуйста сообщи нам
              <Button className={styles.buttonReset} size="large" type="dashed" onClick={declineInvitation}>Меня не будет</Button>
            </div>
          ) : (
            <div className={styles.accept}>
              Будем очень рады вас видеть! Но если вдруг ваши планы изменились, то пожалуйста сообщите нам
              <Button className={styles.buttonReset} size="large" type="dashed" onClick={declineInvitation}>Нас не будет</Button>
            </div>
          )

        ) : (
          guests.is_single ? (
            <div className={styles.decline}>
              Сожалеем, что у тебя не получится, но если что ты можешь изменить свое решение
              <Button className={styles.buttonReset} size="large" type="dashed" onClick={accepInvitation}>Я буду!</Button>
            </div>
          ) : (
            <div className={styles.decline}>
              Сожалеем, что у вас не получится, но если что вы можете изменить свое решение
              <Button className={styles.buttonReset} size="large" type="dashed" onClick={accepInvitation}>Мы будем!</Button>
            </div>
          )

        )
      ) }

    </div>
  );
}
