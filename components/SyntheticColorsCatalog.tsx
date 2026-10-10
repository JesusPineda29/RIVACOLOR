"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './SyntheticColorsCatalog.module.css';

const BASE = '/assets/productos/sinteticos';

type SyntheticColor = {
  slug: string;
  name: string;
  /** Frasco de muestra; algunos colores aún no tienen foto. */
  jar?: boolean;
  /** Foto de aplicación que cubre la franja al pasar el cursor. */
  hoverImage?: string;
};

const colors: SyntheticColor[] = [
  { slug: 'amarillo-5', name: 'Amarillo 5 Tartrazine', jar: true },
  { slug: 'amarillo-6', name: 'Amarillo 6 Sunset Yellow', jar: true },
  { slug: 'azul-1', name: 'Azul 1 Brilliant Blue', jar: true },
  { slug: 'azul-2', name: 'Azul 2 Indigo Carmine', jar: true },
  { slug: 'rojo-5', name: 'Rojo 5 Carmoisine', jar: true },
  { slug: 'rojo-6', name: 'Rojo 6 Ponceau 4R' },
  { slug: 'rojo-40', name: 'Rojo 40 Allura Red', jar: true },
];

const INFO_PLACEHOLDER =
  'ESPACIO DE INFORMACIÓN GENERAL SOBRE EL PRODUCTO - - - '.repeat(6).trim();

export default function SyntheticColorsCatalog() {
  const [active, setActive] = useState<string | null>(null);
  const activeColor = colors.find((c) => c.slug === active);
  const cover = activeColor?.hoverImage;

  return (
    <section className={styles.section}>
      <h2 className={styles.banner}>
        <span>
          COLORANTES SINTÉTICOS HIDROSOLUBLES
          <br />Y LACAS ALUMÍNICAS LIPOSOLUBLES
        </span>
      </h2>

      <div className={styles.strip} onMouseLeave={() => setActive(null)}>
        {cover && (
          <Image
            src={cover}
            alt=""
            fill
            sizes="100vw"
            className={styles.cover}
          />
        )}
        {colors.map((item) => {
          const dimmed = Boolean(cover) && active !== item.slug;
          return (
            <div
              key={item.slug}
              className={`${styles.column} ${dimmed ? styles.dimmed : ''}`}
              tabIndex={0}
              onMouseEnter={() => setActive(item.slug)}
              onFocus={() => setActive(item.slug)}
              onBlur={() => setActive(null)}
            >
              <Image
                src={`${BASE}/cinta-${item.slug}.png`}
                alt={item.name}
                width={205}
                height={218}
                sizes="(max-width: 768px) 25vw, 170px"
                className={styles.ribbon}
              />
              {item.jar && (
                <Image
                  src={`${BASE}/frasco-${item.slug}.png`}
                  alt=""
                  width={1200}
                  height={1337}
                  sizes="(max-width: 768px) 20vw, 120px"
                  className={styles.jar}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.info}>
        {activeColor && <h3 className={styles.infoTitle}>{activeColor.name}</h3>}
        <p className={styles.infoText}>{INFO_PLACEHOLDER}</p>
        <div className={styles.rule} />
      </div>
    </section>
  );
}
