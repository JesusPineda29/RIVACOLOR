"use client";

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import styles from './SyntheticColorsCatalog.module.css';

const BASE = '/assets/productos/sinteticos';

type SyntheticColor = {
  slug: string;
  name: string;
  technicalName: string;
  description: string;
  presentations: string;
  /** Tono del listón; también pinta la barra inferior al seleccionar el color. */
  accent: string;
};

/* Datos tomados de "FICHAS INFO COLORES.docx". */
const colors: SyntheticColor[] = [
  {
    slug: 'amarillo-5',
    name: 'Amarillo 5 Tartrazine',
    technicalName: 'Tartrazine / Tartrazina',
    description:
      'Ofrece un tono amarillo canario brillante, esencial para la creación de verdes y otras combinaciones cálidas.',
    presentations: 'Hidrosoluble, Laca Simple y Laca Doble.',
    accent: '#fff800',
  },
  {
    slug: 'amarillo-6',
    name: 'Amarillo 6 Sunset Yellow',
    technicalName: 'Sunset Yellow / Amarillo Ocaso',
    description:
      'Presenta un tono naranja intenso, color clave para generar diversas mezclas, especialmente en negros y cafés.',
    presentations: 'Hidrosoluble, Laca Simple y Laca Doble.',
    accent: '#ff9d00',
  },
  {
    slug: 'azul-1',
    name: 'Azul 1 Brilliant Blue',
    technicalName: 'Brilliant Blue / Azul Brillante',
    description:
      'Tono azul cielo, fundamental para formular negros, verdes, violetas y una amplia gama de tonos similares.',
    presentations: 'Hidrosoluble, Laca Simple y Laca Doble.',
    accent: '#1795cc',
  },
  {
    slug: 'azul-2',
    name: 'Azul 2 Indigo Carmine',
    technicalName: 'Indigo Carmine / Indigotina',
    description:
      'Tono azul marino profundo, base ideal para mezclas que derivan en negros, cafés y tonalidades oscuras.',
    presentations: 'Hidrosoluble.',
    accent: '#1b4777',
  },
  {
    slug: 'rojo-5',
    name: 'Rojo 5 Carmoisine',
    technicalName: 'Carmoisine / Carmoisina',
    description: 'Color vino intenso, clave para desarrollar mezclas moradas y tonos profundos.',
    presentations: 'Hidrosoluble y Laca.',
    accent: '#8c042f',
  },
  {
    slug: 'rojo-6',
    name: 'Rojo 6 Ponceau 4R',
    technicalName: 'Ponceau 4R / Rojo Ponceau',
    description:
      'Tono rojo fresa brillante, utilizado en la creación de colores sandía y gamas de rojo brillante.',
    presentations: 'Hidrosoluble y Laca.',
    accent: '#ff0000',
  },
  {
    slug: 'rojo-40',
    name: 'Rojo 40 Allura Red',
    technicalName: 'Allura Red / Rojo Allura',
    description:
      'Presenta un tono rojo cereza de alta pureza y vivacidad, ideal para aplicaciones llamativas.',
    presentations: 'Hidrosoluble y Laca.',
    accent: '#b50027',
  },
];

export default function SyntheticColorsCatalog() {
  const [active, setActive] = useState<string | null>(null);
  const activeColor = colors.find((c) => c.slug === active);

  return (
    <section
      className={styles.section}
      style={activeColor ? ({ '--accent': activeColor.accent } as CSSProperties) : undefined}
    >
      <h2 className={styles.banner}>
        <span>
          COLORANTES SINTÉTICOS HIDROSOLUBLES
          <br />Y LACAS ALUMÍNICAS LIPOSOLUBLES
        </span>
      </h2>

      <div className={styles.strip} onMouseLeave={() => setActive(null)}>
        {/* Foto de aplicación que cubre la franja; solo queda visible la columna activa. */}
        {colors.map((item) => (
          <Image
            key={item.slug}
            src={`${BASE}/foto-${item.slug}.jpg`}
            alt=""
            fill
            sizes="100vw"
            className={`${styles.cover} ${active === item.slug ? styles.coverVisible : ''}`}
          />
        ))}
        {colors.map((item) => {
          const dimmed = Boolean(activeColor) && active !== item.slug;
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
              <Image
                src={`${BASE}/frasco-${item.slug}.png`}
                alt=""
                width={1200}
                height={1337}
                sizes="(max-width: 768px) 20vw, 120px"
                className={styles.jar}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.info} aria-live="polite">
        <div className={styles.flag}>
          {activeColor && (
            <Image
              src={`${BASE}/liston-${activeColor.slug}.png`}
              alt=""
              width={697}
              height={300}
              sizes="170px"
              className={styles.flagImage}
            />
          )}
        </div>

        <div className={styles.infoBody}>
          {activeColor && (
            <>
              <h3 className={styles.infoTitle}>{activeColor.name}</h3>
              <dl className={styles.facts}>
                <dt>Nombre técnico:</dt>
                <dd>{activeColor.technicalName}</dd>
                <dt>Descripción:</dt>
                <dd>{activeColor.description}</dd>
                <dt>Presentaciones disponibles:</dt>
                <dd>{activeColor.presentations}</dd>
              </dl>
            </>
          )}
        </div>
      </div>

      <div className={styles.rule} />
    </section>
  );
}
