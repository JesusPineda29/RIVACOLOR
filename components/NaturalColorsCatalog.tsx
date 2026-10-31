"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { naturalColors } from '@/lib/products';
import styles from './NaturalColorsCatalog.module.css';

const BASE = '/assets/productos/naturales';

export default function NaturalColorsCatalog() {
  const [activeSlug, setActiveSlug] = useState('annato');
  const active = naturalColors.find((c) => c.slug === activeSlug) ?? naturalColors[0];

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
                onClick={() => setActiveSlug(item.slug)}
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

        {/* Barra con el color del colorante activo (guía de hexadecimales). */}
        <div className={styles.bar} style={{ backgroundColor: active.color }} aria-hidden="true" />
      </div>

      <div className={styles.quote}>
        <Link
          href={`/cotizar?categoria=naturales&producto=${active.slug}`}
          className="quote-button"
        >
          Cotizar {active.name}
        </Link>
      </div>
    </section>
  );
}
