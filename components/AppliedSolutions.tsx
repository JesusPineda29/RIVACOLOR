"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './AppliedSolutions.module.css';

const SLIDE_INTERVAL = 4000;

const images = [
  '/assets/bloque5/FOTO_1.jpg',
  '/assets/bloque5/FOTO_2.jpg',
  '/assets/bloque5/FOTO_3.jpg',
  '/assets/bloque5/FOTO_4.jpg',
  '/assets/bloque5/FOTO_5.jpg',
];

export default function AppliedSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="aplicaciones" className={styles.section}>
      <h2 className={styles.mainTitle}>
        Soluciones <strong>aplicadas a productos</strong> reales.
      </h2>

      <div className={styles.layoutWrapper}>
        <div className={styles.carouselCol}>
          <div className={styles.imageContainer}>
             <Image 
               key={currentIndex}
               src={images[currentIndex]} 
               alt={`Producto real ${currentIndex + 1}`} 
               fill 
               sizes="(max-width: 992px) 100vw, 50vw"
               className={styles.carouselImage}
             />
          </div>
        </div>

        <div className={styles.textCol}>
          <div className={styles.dashedContainer}>
            <p className={styles.desc}>
              Aplicaciones reales donde el color, la funcionalidad y la innovación cobran vida.
            </p>
            
            <div className={styles.boldText}>
              <span>Panificación</span>
              <span>|</span>
              <span>Confitería</span>
              <span>|</span>
              <span>Bebidas</span>
              <span>|</span>
              <span>Snacks</span>
            </div>
            
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
