"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { syntheticColors, type SyntheticColor } from '@/lib/products';
import styles from './SyntheticColorsCatalog.module.css';

const BASE = '/assets/productos/sinteticos';

// En móvil no hay hover: tocar un color abre su ficha en un modal.
const MOBILE_QUERY = '(max-width: 768px)';

function subscribeMobile(onChange: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

function useIsMobile() {
  return useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );
}

function QuoteLinks({ color }: { color: SyntheticColor }) {
  return (
    <div className={styles.quoteLinks}>
      <Link href={`/cotizar?categoria=sinteticos&producto=${color.slug}`} className="quote-button">
        Pregunta por el tono correcto
      </Link>
      {color.presentations.includes('Laca') && (
        <Link href={`/cotizar?categoria=lacas&producto=${color.slug}`} className="quote-button">
          Cotizar laca
        </Link>
      )}
    </div>
  );
}

export default function SyntheticColorsCatalog() {
  const [active, setActive] = useState<string | null>(null);
  const isMobile = useIsMobile();
  // En móvil se ignora el estado de hover de escritorio (la ficha va en el modal).
  const activeColor = isMobile ? undefined : syntheticColors.find((c) => c.slug === active);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<SyntheticColor | null>(null);

  useEffect(() => {
    if (selected) dialogRef.current?.showModal();
  }, [selected]);

  const activate = (slug: string) => {
    if (!isMobile) setActive(slug);
  };

  const closeModal = () => dialogRef.current?.close();

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
              className={`${styles.cover} ${activeColor?.slug === item.slug ? styles.coverVisible : ''}`}
            />
          ))}
          {syntheticColors.map((item) => {
            const dimmed = Boolean(activeColor) && activeColor?.slug !== item.slug;
            return (
              <div
                key={item.slug}
                className={`${styles.column} ${dimmed ? styles.dimmed : ''}`}
                tabIndex={0}
                role={isMobile ? 'button' : undefined}
                aria-haspopup={isMobile ? 'dialog' : undefined}
                aria-label={isMobile ? item.name : undefined}
                onMouseEnter={() => activate(item.slug)}
                onFocus={() => activate(item.slug)}
                onClick={() => {
                  if (isMobile) setSelected(item);
                }}
                onKeyDown={(e) => {
                  if (isMobile && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    setSelected(item);
                  }
                }}
              >
                <Image
                  src={`${BASE}/cinta-${item.slug}.png`}
                  alt={item.name}
                  width={205}
                  height={218}
                  sizes="(max-width: 768px) 30vw, 170px"
                  className={styles.ribbon}
                />
                <span className={styles.cardHint} aria-hidden="true">
                  Ver ficha ›
                </span>
                <Image
                  src={`${BASE}/frasco-${item.slug}.png`}
                  alt=""
                  width={2400}
                  height={2674}
                  sizes="(max-width: 768px) 30vw, 16vw"
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
                <QuoteLinks color={activeColor} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Ficha en modal para móvil; se cierra con Esc, el botón o tocando el fondo. */}
      <dialog
        ref={dialogRef}
        className={styles.modal}
        aria-labelledby="synthetic-modal-title"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        {selected && (
          <div className={styles.modalBody}>
            <header
              className={styles.modalHeader}
              style={{ '--accent': selected.accent } as CSSProperties}
            >
              <h3 id="synthetic-modal-title">{selected.name}</h3>
              <button
                type="button"
                className={styles.modalClose}
                onClick={closeModal}
                aria-label="Cerrar"
              >
                ×
              </button>
            </header>
            <div className={styles.modalMedia}>
              <Image
                src={`${BASE}/foto-${selected.slug}.jpg`}
                alt=""
                fill
                sizes="92vw"
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalText}>
              <dl className={styles.facts}>
                <dt>Nombre técnico:</dt>
                <dd>{selected.technicalName}</dd>
                <dt>Presentaciones disponibles:</dt>
                <dd>{selected.presentations}</dd>
              </dl>
              <p className={styles.cta}>
                ¿Necesitas un tono específico? Te ayudamos a elegir el correcto para tu aplicación.
              </p>
              <QuoteLinks color={selected} />
            </div>
          </div>
        )}
      </dialog>

      <div className={styles.rule} />
    </section>
  );
}
