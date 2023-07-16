/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './Program.module.scss';

export default function Program({ programRef }) {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const animation1 = useSpring({
    from: { opacity: 0, transform: 'translate3d(-200px,0,0)' },
    to: {
      opacity: inView1 ? 1 : 0,
      transform: inView1 ? 'translate3d(0,0,0)' : 'translate3d(-200px,0,0)',
    },
    config: config.slow,
  });

  const [ref2, inView2] = useInView({ triggerOnce: true });
  const animation2 = useSpring({
    from: { opacity: 0, transform: 'translate3d(200px,0,0)' },
    to: {
      opacity: inView2 ? 1 : 0,
      transform: inView2 ? 'translate3d(0,0,0)' : 'translate3d(200px,0,0)',
    },
    config: config.slow,
  });

  const [ref3, inView3] = useInView({ triggerOnce: true });
  const animation3 = useSpring({
    from: { opacity: 0, transform: 'translate3d(-200px,0,0)' },
    to: {
      opacity: inView3 ? 1 : 0,
      transform: inView3 ? 'translate3d(0,0,0)' : 'translate3d(-200px,0,0)',
    },
    config: config.slow,
  });

  const [ref4, inView4] = useInView({ triggerOnce: true });
  const animation4 = useSpring({
    from: { opacity: 0, transform: 'translate3d(200px,0,0)' },
    to: {
      opacity: inView4 ? 1 : 0,
      transform: inView4 ? 'translate3d(0,0,0)' : 'translate3d(200px,0,0)',
    },
    config: config.slow,
  });

  const [ref5, inView5] = useInView({ triggerOnce: true });
  const animation5 = useSpring({
    from: { opacity: 0, transform: 'translate3d(-200px,0,0)' },
    to: {
      opacity: inView5 ? 1 : 0,
      transform: inView5 ? 'translate3d(0,0,0)' : 'translate3d(-200px,0,0)',
    },
    config: config.slow,
  });

  const [ref6, inView6] = useInView({ triggerOnce: true });
  const animation6 = useSpring({
    from: { opacity: 0, transform: 'translate3d(200px,0,0)' },
    to: {
      opacity: inView6 ? 1 : 0,
      transform: inView6 ? 'translate3d(0,0,0)' : 'translate3d(200px,0,0)',
    },
    config: config.slow,
  });

  const [ref7, inView7] = useInView({ triggerOnce: true });
  const animation7 = useSpring({
    from: { opacity: 0, transform: 'translate3d(-200px,0,0)' },
    to: {
      opacity: inView7 ? 1 : 0,
      transform: inView7 ? 'translate3d(0,0,0)' : 'translate3d(-200px,0,0)',
    },
    config: config.slow,
  });

  const [ref8, inView8] = useInView({ triggerOnce: true });
  const animation8 = useSpring({
    from: { opacity: 0, transform: 'translate3d(200px,0,0)' },
    to: {
      opacity: inView8 ? 1 : 0,
      transform: inView8 ? 'translate3d(0,0,0)' : 'translate3d(200px,0,0)',
    },
    config: config.slow,
  });

  return (
    <div className={styles.container} ref={programRef}>
      <img
        src="/heart1.jpeg"
        alt="heart"
        style={{
          zIndex: '-20',
          position: 'absolute',
          width: '150px',
          height: '150px',
          right: '35%',
        }}
      />
      <h3 className={styles.title}>ПРОГРАММА СВАДЕБНОГО ДНЯ</h3>
      <div className={styles.action_container}>
        <div className={styles.action}>
          <animated.h3 className={styles.time} style={animation1} ref={ref1}>
            14:00
          </animated.h3>
          <animated.div
            className={styles.description}
            style={animation2}
            ref={ref2}
          >
            Сбор гостей, свадебный фуршет
          </animated.div>
        </div>
        <div className={styles.action}>
          <animated.h3 className={styles.time} style={animation3} ref={ref3}>
            15:00
          </animated.h3>
          <animated.div
            className={styles.description}
            style={animation4}
            ref={ref4}
          >
            Свадебная церемония
          </animated.div>
        </div>
        <div className={styles.action}>
          <animated.h3 className={styles.time} style={animation5} ref={ref5}>
            16:00
          </animated.h3>
          <animated.div
            className={styles.description}
            style={animation6}
            ref={ref6}
          >
            Свадебный ужин
          </animated.div>
        </div>
        <div className={styles.action}>
          <animated.h3 className={styles.time} style={animation7} ref={ref7}>
            23:00
          </animated.h3>
          <animated.div
            className={styles.description}
            style={animation8}
            ref={ref8}
          >
            Блистательное окончание вечера
          </animated.div>
        </div>
      </div>
    </div>
  );
}
