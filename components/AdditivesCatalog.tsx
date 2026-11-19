'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { additives, industryIcons, type Additive } from '@/lib/products';
import styles from './AdditivesCatalog.module.css';

const BASE = '/assets/productos/aditivos';

export default function AdditivesCatalog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Additive | null>(null);

  useEffect(() => {
    if (selected) dialogRef.current?.showModal();
  }, [selected]);

  const close = () => dialogRef.current?.close();

  return (
    <section id="aditivos" className={styles.section}>
      <h2 className={styles.banner}>
        <span>ADITIVOS E INGREDIENTES</span>
      </h2>

      <ul className={styles.grid}>
        {additives.map((item) => (
          <li
            key={item.slug}
            className={styles.card}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            onClick={() => setSelected(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelected(item);
              }
            }}
          >
            <div className={styles.stage}>
              <span className={styles.ring} />
              <span className={`${styles.ring} ${styles.ringHover}`} />
              {/* Foto de aplicación que aparece dentro del círculo al pasar el cursor. */}
              <Image
                src={`${BASE}/aplicaciones/${item.slug}.jpg`}
                alt=""
                width={800}
                height={338}
                sizes="(max-width: 576px) 60vw, 250px"
                className={styles.application}
              />
              <Image
                src={`${BASE}/${item.image ?? `${item.slug}.png`}`}
                alt={item.name}
                width={1024}
                height={687}
                sizes="(max-width: 576px) 60vw, 300px"
                className={styles.bag}
              />
            </div>
            <h3 className={styles.name}>{item.name}</h3>
          </li>
        ))}
      </ul>

      {/* Modal con la ficha del producto (VIEW_POPUP_WINDOW); se cierra con Esc, el botón o clic en el fondo. */}
      <dialog
        ref={dialogRef}
        className={styles.modal}
        aria-labelledby="additive-modal-title"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {selected && (
          <div className={styles.modalBody}>
            <header className={styles.modalHeader}>
              <h3 id="additive-modal-title">{selected.name}</h3>
              <button
                type="button"
                className={styles.modalClose}
                onClick={close}
                aria-label="Cerrar"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <div className={styles.modalContent}>
              <div className={styles.modalText}>
                <h4>¿Qué es?</h4>
                {selected.whatIs.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                <h4>¿Para qué sirve?</h4>
                {selected.uses.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                <h4>Se utiliza en varias industrias</h4>
                <ul className={styles.modalIndustries}>
                  {selected.industries.map((id) => (
                    <li key={id}>
                      <Image src={industryIcons[id].icon} alt="" width={44} height={44} />
                      <span>{industryIcons[id].label}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/cotizar?categoria=aditivos&producto=${selected.slug}`}
                  className={styles.modalContact}
                >
                  <span>Conecta con nuestro equipo de ventas para obtener información personalizada</span>
                  <strong>
                    <svg viewBox="0 0 12 20" width="12" height="20" aria-hidden="true">
                      <path d="M2 2l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Contactar
                  </strong>
                </Link>
              </div>

              {/* Una foto grande y tres chicas: popup/<slug>-1..4.jpg. */}
              <div className={styles.modalGallery}>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={n === 1 ? styles.galleryBig : styles.gallerySmall}>
                    <Image
                      src={`${BASE}/popup/${selected.slug}-${n}.jpg`}
                      alt=""
                      fill
                      sizes={n === 1 ? '(max-width: 768px) 92vw, 470px' : '(max-width: 768px) 31vw, 160px'}
                      className={styles.modalImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
