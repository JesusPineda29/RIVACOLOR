"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { naturalColors } from '@/lib/products';
import styles from './NaturalColorsCatalog.module.css';

const BASE = '/assets/productos/naturales';
/* Mismo corte que el CSS: en celular la foto se muestra en un modal. */
const MOBILE_QUERY = '(max-width: 768px)';

export default function NaturalColorsCatalog() {
  const [activeSlug, setActiveSlug] = useState('annato');
  const active = naturalColors.find((c) => c.slug === activeSlug) ?? naturalColors[0];
  const dialogRef = useRef<HTMLDialogElement>(null);

  const select = (slug: string) => {
    setActiveSlug(slug);
    if (window.matchMedia(MOBILE_QUERY).matches) dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <section id="naturales" className={styles.section}>
      <h2 className={styles.banner}>
        <span>COLORANTES NATURALES</span>
      </h2>

      <div className={styles.layout}>
        <ul className={styles.list}>
          {naturalColors.map((item) => (
            <li key={item.slug} className={styles.listItem}>
              <button
                type="button"
                className={`${styles.name} ${item.slug === active.slug ? styles.nameActive : ''}`}
                style={{ borderBottomColor: item.color }}
                onMouseEnter={() => setActiveSlug(item.slug)}
                onFocus={() => setActiveSlug(item.slug)}
                onClick={() => select(item.slug)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.photo} style={{ backgroundColor: active.color }}>
          {naturalColors.map((item) => (
            <Image
              key={item.slug}
              src={`${BASE}/${item.slug}.jpg`}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={`${styles.photoImg} ${item.slug === active.slug ? styles.photoShown : ''}`}
            />
          ))}
        </div>

        {/* Barra con el color del colorante activo (guía de hexadecimales) y su nombre en vertical. */}
        <div className={styles.bar} style={{ backgroundColor: active.color }} aria-hidden="true">
          <span className={styles.barName}>{active.name}</span>
        </div>
      </div>

      <div className={styles.quote}>
        <Link
          href={`/cotizar?categoria=naturales&producto=${active.slug}`}
          className="quote-button"
        >
          Cotizar {active.name}
        </Link>
      </div>

      {/* Solo en celular: foto, barra de color con el nombre y botón de cotizar. */}
      <dialog
        ref={dialogRef}
        className={styles.modal}
        aria-label={active.name}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className={styles.modalBody}>
          <button type="button" className={styles.modalClose} onClick={close} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
          <div className={styles.modalPhoto} style={{ backgroundColor: active.color }}>
            <Image
              key={active.slug}
              src={`${BASE}/${active.slug}.jpg`}
              alt={active.name}
              fill
              sizes="92vw"
              className={styles.modalImg}
            />
          </div>
          <div className={styles.modalBar} style={{ backgroundColor: active.color }}>
            {active.name}
          </div>
          <div className={styles.modalQuote}>
            <Link
              href={`/cotizar?categoria=naturales&producto=${active.slug}`}
              className="quote-button"
            >
              Cotizar {active.name}
            </Link>
          </div>
        </div>
      </dialog>
    </section>
  );
}
