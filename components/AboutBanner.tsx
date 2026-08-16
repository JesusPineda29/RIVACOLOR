'use client';

import Image from 'next/image';
import { useInView } from './useInView';
import styles from './AboutBanner.module.css';

export default function AboutBanner() {
  const { ref, isInView } = useInView<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      aria-label="Suministro global, confianza local"
    >
      <div className={styles.band}>
        <Image
          src="/assets/nosotros/BANNER_ALIMENTOS.jpg"
          alt="Alimentos y materias primas sobre una mesa"
          fill
          sizes="100vw"
          className={styles.bandImage}
        />
      </div>

      <div className={styles.band}>
        <Image
          src="/assets/nosotros/BANNER_LABORATORIO.jpg"
          alt="Laboratorio con pigmentos naturales en polvo"
          fill
          sizes="100vw"
          className={styles.bandImage}
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.titleBlock}>
          <span className={styles.lineOne}>
            <strong>SUMINISTRO</strong> GLOBAL
          </span>
          <span className={styles.lineTwo}>
            <strong>CONFIANZA</strong> LOCAL
          </span>
        </div>
      </div>
    </section>
  );
}
