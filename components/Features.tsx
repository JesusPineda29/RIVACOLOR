"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useInView } from './useInView';
import styles from './Features.module.css';

const features = [
  { id: 'industria', label: 'Por Industria', icon: '/assets/IC_POR_INDUSTRIA.png' },
  { id: 'solucion', label: 'Por Solución', icon: '/assets/IC_POR_SOLUCION.png' },
  { id: 'aplicacion', label: 'Por Aplicación', icon: '/assets/IC_POR_APLICACION.png' },
  { id: 'uso', label: 'Por Uso', icon: '/assets/IC_POR_USO.png' },
  { id: 'producto', label: 'Por Producto', icon: '/assets/IC_POR_PRODUCTO.png' },
];

export default function Features() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { ref: gridRef, isInView } = useInView<HTMLDivElement>();

  return (
    <section className={styles.featuresSection}>
      <div className={`container ${styles.featuresContainer}`}>
        <h2 className={styles.title}>
          <strong>Descubre Rivacolor</strong> a tu manera
        </h2>

        <div ref={gridRef} className={`${styles.grid} ${isInView ? styles.gridVisible : ''}`}>
          {features.map((feature) => {
            const isSelected = selectedId === feature.id;
            return (
              <div
                key={feature.id}
                className={`${styles.card} ${isSelected ? styles.selected : ''}`}
                onMouseEnter={() => setSelectedId(feature.id)}
                onMouseLeave={() => setSelectedId(null)}
              >
                <div className={styles.iconContainer}>
                  {/* Assuming the original images are dark gray (#545454).
                      For a robust solution we'd use SVGs with currentColor, 
                      but since they are PNGs, we'll apply a CSS filter for the hover state 
                      to approximate the #497593 color if needed, or simply let the text color change.
                      I'll apply a simple hover effect to the container. */}
                  <div className={styles.iconWrapper}>
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      width={64}
                      height={64}
                      className={styles.iconImage}
                    />
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{feature.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
