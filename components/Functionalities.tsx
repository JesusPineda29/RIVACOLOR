"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Functionalities.module.css';

const items = [
  { id: 1, title: 'COLOREAR', image: '/assets/bloque6/FOTOS/FOTO_COLOREAR.jpg' },
  { id: 2, title: 'CONSERVAR', image: '/assets/bloque6/FOTOS/FOTO_CONSERVAR.jpg' },
  { id: 3, title: 'ACIDIFICAR', image: '/assets/bloque6/FOTOS/FOTO_ACIDIFICAR.jpg' },
  { id: 4, title: 'ESTABILIZAR', image: '/assets/bloque6/FOTOS/FOTO_ESTABILIZAR.jpg' },
  { id: 5, title: 'REGULAR PH', image: '/assets/bloque6/FOTOS/FOTO_REGULAR_PH.jpg' },
  { id: 6, title: 'MEJORAR TEXTURA', image: '/assets/bloque6/FOTOS/FOTO_TEXTURA.jpg' },
  { id: 7, title: 'PROTEGER FORMULACIÓN', image: '/assets/bloque6/FOTOS/FOTO_PROTEGER__FORMULACION.jpg' },
  { id: 8, title: 'REALZAR APARIENCIA', image: '/assets/bloque6/FOTOS/FOTO_REALZAR_APARIENCIA.jpg' },
  { id: 9, title: 'PROLONGAR VIDA ÚTIL', image: '/assets/bloque6/FOTOS/FOTO_PROLONGAR_VIDA_UTIL.jpg' },
];

export default function Functionalities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(5); // 5 corresponds to 'MEJORAR TEXTURA' as initial active

  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>
        Funcionalidad que impulsa tus <strong>Productos.</strong>
      </h2>

      <div className={styles.accordionContainer}>
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id} 
              className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                sizes="(max-width: 992px) 100vw, 33vw"
                priority={isActive}
                className={styles.bgImage} 
              />
              
              <div className={styles.overlay}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
