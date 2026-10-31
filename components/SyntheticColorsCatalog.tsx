"use client";

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { syntheticColors } from '@/lib/products';
import styles from './SyntheticColorsCatalog.module.css';

const BASE = '/assets/productos/sinteticos';

export default function SyntheticColorsCatalog() {
  const [active, setActive] = useState<string | null>(null);
  const activeColor = syntheticColors.find((c) => c.slug === active);

  return (
    <section
      id="sinteticos"
      className={styles.section}
      style={activeColor ? ({ '--accent': activeColor.accent } as CSSProperties) : undefined}
    >
      <h2 className={styles.banner}>
        <span>
          COLORANTES SINTÉTICOS HIDROSOLUBLES
          <br />Y LACAS ALUMÍNICAS LIPOSOLUBLES
        </span>
      </h2>

      {/* La franja y la ficha comparten el estado activo: así el cursor o el foco pueden
          bajar hasta los botones de la ficha sin que el color se desactive. */}
      <div
        onMouseLeave={() => setActive(null)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setActive(null);
        }}
      >
        <div className={styles.strip}>
          {/* Foto de aplicación que cubre la franja; solo queda visible la columna activa. */}
          {syntheticColors.map((item) => (
            <Image
              key={item.slug}
              src={`${BASE}/foto-${item.slug}.jpg`}
              alt=""
              fill
              sizes="100vw"
              className={`${styles.cover} ${active === item.slug ? styles.coverVisible : ''}`}
            />
          ))}
          {syntheticColors.map((item) => {
            const dimmed = Boolean(activeColor) && active !== item.slug;
            return (
              <div
                key={item.slug}
                className={`${styles.column} ${dimmed ? styles.dimmed : ''}`}
                tabIndex={0}
                onMouseEnter={() => setActive(item.slug)}
                onFocus={() => setActive(item.slug)}
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
                  <dt>Presentaciones disponibles:</dt>
                  <dd>{activeColor.presentations}</dd>
                </dl>
                <p className={styles.cta}>
                  ¿Necesitas un tono específico? Te ayudamos a elegir el correcto para tu aplicación.
                </p>
                <div className={styles.quoteLinks}>
                  <Link
                    href={`/cotizar?categoria=sinteticos&producto=${activeColor.slug}`}
                    className="quote-button"
                  >
                    Pregunta por el tono correcto
                  </Link>
                  {activeColor.presentations.includes('Laca') && (
                    <Link
                      href={`/cotizar?categoria=lacas&producto=${activeColor.slug}`}
                      className="quote-button"
                    >
                      Cotizar laca
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.rule} />
    </section>
  );
}
