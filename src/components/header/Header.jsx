/* eslint-disable no-unused-vars */
import React, {
  useEffect, useLayoutEffect, useState, useRef,
} from 'react';
import styles from './Header.module.scss';

export default function Header({
  aboutUsRef,
  questionsRef,
  mainContentRef,
  formRef,
  programRef,
  mapRef,
}) {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);
  const scrollToRef = (ref) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });

  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    if (!mainContentRef.current || headerHeight === 0) return;

    const targetPosition = mainContentRef.current.offsetTop + headerHeight;
    const threshold = targetPosition / window.innerHeight;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(mainContentRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(mainContentRef.current);
    };
  }, [mainContentRef, headerHeight]);

  return (
    <header className={isFixed ? styles.fixed : ''}>
      <nav>
        <ul className={styles.container}>
          <li className={styles.item} onClick={() => scrollToRef(aboutUsRef)}>
            О нас
          </li>
          <li className={styles.item} onClick={() => scrollToRef(questionsRef)}>
            F.A.Q.
          </li>
          <li className={styles.item} onClick={() => scrollToRef(formRef)}>
            Опрос
          </li>
          <li className={styles.item} onClick={() => scrollToRef(programRef)}>
            Программа
          </li>
          <li className={styles.item} onClick={() => scrollToRef(mapRef)}>
            Место
          </li>
        </ul>
      </nav>
    </header>
  );
}
