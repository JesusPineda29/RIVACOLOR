'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AdditivesCatalog.module.css';

const BASE = '/assets/productos/aditivos';

type Additive = {
  slug: string;
  name: string;
  /** Archivo de la foto del producto, si no coincide con el slug. */
  image?: string;
};

const additives: Additive[] = [
  { slug: 'acido-citrico-anhidrico', name: 'Ácido cítrico anhídrico' },
  { slug: 'acido-fumarico', name: 'Ácido fumárico' },
  { slug: 'acido-sorbico', name: 'Ácido sórbico' },
  { slug: 'acido-lactico', name: 'Ácido láctico' },
  { slug: 'acido-malico', name: 'Ácido málico' },
  { slug: 'almidon-de-maiz', name: 'Almidón de maíz' },
  { slug: 'benzoato-de-sodio', name: 'Benzoato de sodio' },
  { slug: 'bicarbonato-de-amonio', name: 'Bicarbonato de amonio' },
  { slug: 'bicarbonato-de-sodio', name: 'Bicarbonato de sodio' },
  { slug: 'citrato-de-sodio', name: 'Citrato de sodio' },
  { slug: 'cloruro-de-amonio', name: 'Cloruro de amonio' },
  { slug: 'dioxido-de-titanio', name: 'Dióxido de titanio' },
  { slug: 'fosfato-de-aluminio-y-sodio', name: 'Fosfato de aluminio y sodio' },
  { slug: 'glutamato-monosodico', name: 'Glutamato monosódico' },
  { slug: 'goma-xanthana', name: 'Goma xanthana' },
  { slug: 'lactato-de-calcio', name: 'Lactato de calcio' },
  { slug: 'lecitina-de-soya', name: 'Lecitina de soya', image: 'lecitina-de-soya-bidon.png' },
  { slug: 'maltodextrina', name: 'Maltodextrina' },
  { slug: 'sorbato-de-potasio', name: 'Sorbato de potasio' },
];

export default function AdditivesCatalog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Additive | null>(null);

  useEffect(() => {
    if (selected) dialogRef.current?.showModal();
  }, [selected]);

  const close = () => dialogRef.current?.close();

  return (
    <section className={styles.section}>
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

      {/* Modal con la segunda foto de aplicación; se cierra con Esc, el botón o clic en el fondo. */}
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
                ×
              </button>
            </header>
            <div className={styles.modalContent}>
              <div className={styles.modalText}>
                {/* Texto provisional hasta tener la descripción de cada producto. */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={styles.modalMedia}>
                <Image
                  src={`${BASE}/detalle/${selected.slug}.jpg`}
                  alt={selected.name}
                  fill
                  sizes="(max-width: 768px) 92vw, 480px"
                  className={styles.modalImage}
                />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
