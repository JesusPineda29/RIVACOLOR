'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Solutions.module.css';

const solutionsData = [
  { id: 1, title: 'VIDA ÚTIL', photo: '/assets/bloque4/SOLUCION_1.jpg' },
  { id: 2, title: 'REGULACIÓN DE PH', photo: '/assets/bloque4/SOLUCION_2.jpg' },
  { id: 3, title: 'INTENSIDAD DE COLOR', photo: '/assets/bloque4/SOLUCION_3.jpg' },
  { id: 4, title: 'CONSERVACIÓN', photo: '/assets/bloque4/SOLUCION_4.jpg' },
  { id: 5, title: 'TEXTURA', photo: '/assets/bloque4/SOLUCION_5.jpg' },
  { id: 6, title: 'APARIENCIA', photo: '/assets/bloque4/SOLUCION_6.jpg' },
];

export default function Solutions() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350; // approximate width of one card + gap
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollAmount = 350;
        // If we are at or very close to the end, rewind to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.solutionsSection}>
      <h2 className={styles.topTitle}>
        <strong>Soluciones</strong> diseñadas para <strong>destacar.</strong>
      </h2>

      <div className={styles.carouselContainer}>
        <div className={styles.blurOverlayLeft}></div>
        <div className={styles.blurOverlayRight}></div>
        <button 
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={() => handleScroll('left')}
          aria-label="Previous"
        >
          <Image src="/assets/bloque4/ICONO_FLECHA_RETROCEDER.png" alt="Prev" width={60} height={60} />
        </button>

        <div className={styles.carouselTrack} ref={scrollRef}>
          {solutionsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={item.photo} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.photo} />
              </div>
              <div className={styles.titleBand}>
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={() => handleScroll('right')}
          aria-label="Next"
        >
          <Image src="/assets/bloque4/ICONO_FLECHA_AVANZAR.png" alt="Next" width={60} height={60} />
        </button>
      </div>

      <h2 className={styles.bottomTitle}>
        Soluciones <strong>aplicadas</strong> a <strong>productos</strong> reales.
      </h2>
    </section>
  );
}
