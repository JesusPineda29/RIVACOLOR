"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './NaturalColorsCatalog.module.css';

const BASE = '/assets/productos/naturales';

type NaturalColor = {
  slug: string;
  name: string;
  /** Color del subrayado y del panel (guía de hexadecimales). */
  color: string;
  description: string[];
  /** Foto de la materia prima; sin ella el panel muestra solo el color. */
  image?: string;
};

const colors: NaturalColor[] = [
  {
    slug: 'malta',
    name: 'Malta',
    color: '#bd9468',
    description: [
      'Permite aportar tonalidades cálidas y naturales a los alimentos.',
      'Es útil para desarrollar apariencias asociadas con productos horneados, tostados y elaborados con cereales.',
    ],
  },
  {
    slug: 'curcuma',
    name: 'Cúrcuma',
    color: '#f1ad02',
    description: [
      'Aporta un color amarillo característico y reconocible.',
      'Ofrece aplicaciones tanto en productos salados como en determinadas formulaciones dulces.',
    ],
  },
  {
    slug: 'luteina',
    name: 'Luteína',
    color: '#b95500',
    description: [
      'Permite desarrollar tonalidades amarillas de origen natural.',
      'Puede contribuir a obtener colores cálidos en alimentos con base grasa o en sistemas formulados para su dispersión.',
    ],
  },
  {
    slug: 'annato',
    name: 'Annato',
    color: '#c55e00',
    description: [
      'Permite obtener tonalidades cálidas.',
      'Es una alternativa de origen vegetal para desarrollar colores amarillos y anaranjados.',
    ],
    image: `${BASE}/annato.jpg`,
  },
  {
    slug: 'caroteno',
    name: 'Caroteno',
    color: '#fe842f',
    description: [
      'Permite desarrollar tonalidades cálidas y uniformes.',
      'Es compatible con sistemas grasos cuando se utiliza una presentación adecuada.',
    ],
  },
  {
    slug: 'paprika',
    name: 'Paprika',
    color: '#e70001',
    description: [
      'Proporciona tonalidades rojizas y anaranjadas de origen vegetal.',
      'Permite desarrollar una apariencia característica en productos cárnicos, botanas y sazonadores.',
    ],
  },
  {
    slug: 'carmin',
    name: 'Carmín',
    color: '#990116',
    description: [
      'Ofrece tonalidades rojas intensas y buena capacidad de coloración.',
      'Presenta buena estabilidad frente al calor y la luz en comparación con otros pigmentos rojos naturales.',
    ],
  },
  {
    slug: 'antocianina',
    name: 'Antocianina',
    color: '#b50051',
    description: [
      'Origen vegetal y opción para desarrollar formulaciones con colorantes de origen natural.',
      'Amplia gama de tonalidades, especialmente en productos ácidos.',
    ],
  },
  {
    slug: 'betabel',
    name: 'Betabel',
    color: '#650050',
    description: [
      'Origen vegetal y tonalidades asociadas con frutas rojas.',
      'Particularmente útil en productos refrigerados y aplicaciones con tratamientos térmicos moderados.',
    ],
  },
  {
    slug: 'espirulina',
    name: 'Espirulina',
    color: '#058169',
    description: [
      'Fuente de color azul de origen natural.',
      'Permite desarrollar tonalidades azules y, en determinadas formulaciones, verdes al combinarse con otros colorantes.',
    ],
  },
];

export default function NaturalColorsCatalog() {
  const [activeSlug, setActiveSlug] = useState('annato');
  const active = colors.find((c) => c.slug === activeSlug) ?? colors[0];

  return (
    <section className={styles.section}>
      <h2 className={styles.banner}>
        <span>COLORANTES NATURALES</span>
      </h2>

      <div className={styles.layout}>
        <ul className={styles.list}>
          {colors.map((item) => (
            <li key={item.slug} className={styles.listItem}>
              <button
                type="button"
                className={`${styles.name} ${item.slug === active.slug ? styles.nameActive : ''}`}
                style={{ borderBottomColor: item.color }}
                onMouseEnter={() => setActiveSlug(item.slug)}
                onFocus={() => setActiveSlug(item.slug)}
                onClick={() => setActiveSlug(item.slug)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.photo} style={{ backgroundColor: active.color }}>
          {colors.map(
            (item) =>
              item.image && (
                <Image
                  key={item.slug}
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className={`${styles.photoImg} ${item.slug === active.slug ? styles.photoShown : ''}`}
                />
              ),
          )}
        </div>

        <div className={styles.panel} style={{ backgroundColor: active.color }}>
          <h3 className={styles.panelTitle}>{active.name}</h3>
          {/* Descripción desactivada por ahora; para volver a mostrarla, descomenta:
          {active.description.map((line) => (
            <p key={line} className={styles.panelText}>
              {line}
            </p>
          ))}
          */}
        </div>
      </div>
    </section>
  );
}
