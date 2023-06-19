import React from 'react';
import styles from './Questions.module.scss';

export default function Questions({ questionsRef }) {
  return (
    <div
      className={styles.container}
      ref={questionsRef}
    >
      <h3 className={styles.title}>
        ОТВЕЧАЕМ НА ВАШИ ВОПРОСЫ
      </h3>
      <div className={styles.questions_container}>
        <div className={styles.dresscode}>
          <div className={styles.question}>Будет ли дресс-код?</div>
          <div className={styles.answer}>
            Мы будем рады, если девушки выберут вечерние или
            коктейльные платья в пастельных тонах, а мужчины — костюм.
          </div>
          <div className={styles.colors_container}>
            <div className={styles.color} />
            <div className={styles.color} />
            <div className={styles.color} />
            <div className={styles.color} />
          </div>
        </div>
        <div>
          <div className={styles.question}>Нужно ли дарить цветы?</div>
          <div className={styles.answer}>
            Просим вас не дарить цветы, но будем рады вкладу в бюджет нашего свадебного путешествия.
          </div>
        </div>
        <div>
          <div className={styles.question}>
            Кому можно задать вопросы по организации мероприятия?
          </div>
          <div className={styles.answer}>
            Наш свадебный организатор — Анастасия с радостью ответит на ваши вопросы.
            Ее номер телефона: +7 (916) 423-90-83.
          </div>
        </div>
      </div>
    </div>
  );
}
