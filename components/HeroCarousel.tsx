"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

const images = [
  '/assets/FOTO_1.jpg',
  '/assets/FOTO_2.jpg',
  '/assets/FOTO_3.jpg',
  '/assets/FOTO_4.jpg',
  '/assets/FOTO_5.jpg',
  '/assets/FOTO_6.jpg',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.carouselContainer}>
          {images.map((src, index) => (
            <div
              key={src}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <Image
                src={src}
                alt={`Rivacolor Carousel Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className={styles.overlay}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              <span className={styles.blurLine}>LOGRA QUE TU PRODUCTO DESTAQUE</span>
            </h1>
            <p className={styles.subtitle}>
              <span className={styles.blurLine}>Color, funcionalidad e innovación para tu industria.</span>
            </p>
          </div>
        </div>
      </section>

      <div className={styles.indicators}>
        {images.map((_, index) => (
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
