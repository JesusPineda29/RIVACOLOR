"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

const slides = [
  {
    src: '/assets/FOTO_1.jpg',
    title: 'INGREDIENTES QUE HACEN LA DIFERENCIA',
    subtitle: 'Calidad y desempeño para formulaciones de alto nivel.',
  },
  {
    src: '/assets/FOTO_2.jpg',
    title: 'EL COLOR PERFECTO COMIENZA AQUÍ',
    subtitle: 'Soluciones para crear productos con identidad y consistencia.',
  },
  {
    src: '/assets/FOTO_3.jpg',
    title: 'INNOVACIÓN EN CADA FORMULACIÓN',
    subtitle: 'Desarrollamos soluciones que agregan valor a tus productos.',
  },
  {
    src: '/assets/FOTO_4.jpg',
    title: 'TRANSFORMAMOS IDEAS EN PRODUCTOS EXTRAORDINARIOS',
    subtitle: 'Impulsamos la calidad, apariencia y funcionalidad de cada desarrollo.',
  },
  {
    src: '/assets/FOTO_5.jpg',
    title: 'LOGRA QUE TU PRODUCTO DESTAQUE',
    subtitle: 'Color, funcionalidad e innovación para tu industria.',
  },
  {
    src: '/assets/FOTO_6.jpg',
    title: 'SOLUCIONES PARA UNA INDUSTRIA EN EVOLUCIÓN',
    subtitle: 'Más de 40 años acompañando a la industria con experiencia y confianza.',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.carouselContainer}>
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className={styles.overlay}>
          {/* key forces the fade-in to replay whenever the slide changes */}
          <div key={currentIndex} className={styles.textContainer}>
            <h1 className={styles.title}>
              <span className={styles.blurLine}>{slides[currentIndex].title}</span>
            </h1>
            <p className={styles.subtitle}>
              <span className={styles.blurLine}>{slides[currentIndex].subtitle}</span>
            </p>
          </div>
        </div>
      </section>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
