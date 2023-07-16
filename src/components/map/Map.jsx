/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import css from './Map.module.scss';

export default function Map({ mapRef }) {
  const [mapWidth, setMapWidth] = useState(1200);
  const [mapHeight, setMapHeight] = useState(674);
  const [link, setLink] = useState(
    'https://yandex.ru/map-widget/v1/?um=constructor%3Ac097ceaa021f740f5bc94d114774d095a77a636e18164a3fffba9d40a87a4714&amp;source=constructor',
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1250) {
        setLink(
          'https://yandex.ru/map-widget/v1/?um=constructor%3Af745bc0e03ef65b27d08529d2839ebfb5f6fb6c5ffb631d6bbca81be3e197cae&amp;source=constructor',
        );
        setMapWidth(1200);
        setMapHeight(674);
      } else if (window.innerWidth >= 720) {
        setLink(
          'https://yandex.ru/map-widget/v1/?um=constructor%3Ad3d9f501266a7cec2381f81ae8a118f922c6c6baefc8ad27692823bf884af13c&amp;source=constructor',
        );
        setMapWidth(700);
        setMapHeight(393);
      } else {
        setLink(
          'https://yandex.ru/map-widget/v1/?um=constructor%3A87bad1ca0beabbd2fa22086a5171778549105532254f3173b7cb77e8820cd516&amp;source=constructor',
        );
        setMapWidth(350);
        setMapHeight(500);
      }
    };

    setTimeout(() => {
      handleResize();
    }, 300);

    window.addEventListener('resize', handleResize);

    // Верните функцию для удаления обработчика, когда компонент размонтируется
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div ref={mapRef}>
      <h3 className={css.title}>МЕСТО ПРОВЕДЕНИЯ</h3>

      <div className={css['map-container']}>
        <div className={css['map-overlay-container']}>
          <div className={css.overlay}>
            <div className={css.contact_information}>
              <div className={css.title_contact}>Наша площадка</div>

              <div className={css.contacts}>
                <div className={css.contact}>
                  <span className={css.map}>
                    Московская область,
                    <br />
                    {' '}
                    с.Алабушево,
                    <br />
                    {' '}
                    ул. Островского, 16
                    <br />
                    {' '}
                    Площадка "Дом у Леса"
                  </span>
                </div>
              </div>
            </div>
          </div>
          <iframe
            src={link}
            width={mapWidth}
            height={mapHeight}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );

  // <div
  //   style={{
  //     display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3%', height: '100vh', borderTop: '0.5px solid gray',
  //   }}
  //   ref={mapRef}
  // >
  //   Карта
  // </div>
}
