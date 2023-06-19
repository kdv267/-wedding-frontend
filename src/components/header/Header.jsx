import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';

export default function Header({
  inviteRef, aboutUsRef, questionsRef, mainContentRef, formRef, programRef, mapRef,
}) {
  const scrollToRef = (ref) => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth',
  });

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (mainContentRef.current) {
      observer.observe(mainContentRef.current);
    }

    return () => {
      if (mainContentRef.current) {
        observer.unobserve(mainContentRef.current);
      }
    };
  }, [mainContentRef]);

  return (
    <header className={isFixed ? styles.fixed : ''}>
      <nav>
        <ul className={styles.container}>
          <li className={styles.item} onClick={() => scrollToRef(inviteRef)}>Приглашение</li>
          <li className={styles.item} onClick={() => scrollToRef(aboutUsRef)}>О нас</li>
          <li className={styles.item} onClick={() => scrollToRef(questionsRef)}>F.A.Q.</li>
          <li className={styles.item} onClick={() => scrollToRef(formRef)}>Опрос</li>
          <li className={styles.item} onClick={() => scrollToRef(programRef)}>Программа</li>
          <li className={styles.item} onClick={() => scrollToRef(mapRef)}>Место</li>
        </ul>
      </nav>
    </header>
  );
}
