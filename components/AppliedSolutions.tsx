"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './AppliedSolutions.module.css';

const images = [
  '/assets/bloque5/FOTO_1.jpg',
  '/assets/bloque5/FOTO_2.jpg',
  '/assets/bloque5/FOTO_3.jpg',
  '/assets/bloque5/FOTO_4.jpg',
  '/assets/bloque5/FOTO_5.jpg',
];

export default function AppliedSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>
        Soluciones <strong>aplicadas a productos</strong> reales.
      </h2>

      <div className={styles.layoutWrapper}>
        <div className={styles.carouselCol}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>
            <Image src="/assets/bloque5/ICONO_FLECHA_RETROCEDER.png" alt="Anterior" width={50} height={50} />
          </button>
          
          <div className={styles.imageContainer}>
             <Image 
               key={currentIndex}
               src={images[currentIndex]} 
               alt={`Producto real ${currentIndex + 1}`} 
               fill 
               className={styles.carouselImage}
             />
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>
            <Image src="/assets/bloque5/ICONO_FLECHA_AVANZAR.png" alt="Siguiente" width={50} height={50} />
          </button>
        </div>

        <div className={styles.textCol}>
          <div className={styles.dashedContainer}>
            <p className={styles.desc}>
              Aplicaciones reales donde el color, la funcionalidad y la innovación cobran vida.
            </p>
            
            <p className={styles.boldText}>
              Panificación | Confitería | Bebidas | Snacks
            </p>
            
            <div className={styles.helpSection}>
              <p className={styles.questionText}>
                ¿Buscas una aplicación específica?
              </p>
              <p className={styles.helpText}>
                Nuestro equipo puede ayudarte a encontrar la solución ideal.
              </p>
            </div>
            
            <div className={styles.buttonWrapper}>
               <a href="#contacto" className={styles.contactBtn} aria-label="Contáctanos">
                 Contáctanos
               </a>
            </div>
          </div>
          
          <div className={styles.blueBar}></div>
        </div>
      </div>
    </section>
  );
}
