'use client';

import Image from 'next/image';
import { useInView } from './useInView';
import styles from './CommercialRelations.module.css';

const clients = [
  'Grupo BIMBO',
  'Grupo PepsiCo',
  'Grupo Femsa – Coca Cola',
  'Cremería Americana',
  'Puratos de México',
  'Fabrica de Galletas La Moderna',
  'Galletera de Puebla',
  'Fabrica de Galletas La Italiana',
  'Grupo Gómez Cuétara Hnos.',
  'Bremen',
  'Saborex de México S.A. de C.V.',
  'Natural de Alimentos S.A. de C.V.',
  'Naturasol',
  'ADM',
  'Sigma Alimentos',
  'Con Alimentos',
];

export default function CommercialRelations() {
  const { ref, isInView } = useInView<HTMLElement>(0.2);

  return (
    <section ref={ref} className={`${styles.section} ${isInView ? styles.visible : ''}`}>
      <div className={styles.imageCol}>
        <Image
          src="/assets/nosotros/FONDO_RELACIONES.jpg"
          alt="Apretón de manos entre socios comerciales"
          fill
          sizes="(max-width: 992px) 100vw, 42vw"
          className={styles.image}
        />
      </div>

      <div className={styles.quoteCol}>
        <p className={styles.quote}>
          A lo largo de la historia de Rivacolor S.A. de C.V. se han podido establecer
          relaciones comerciales muy sólidas.
        </p>
      </div>

      <div className={styles.listCol}>
        <ul className={styles.list}>
          {clients.map((client, index) => (
            <li key={client} style={{ '--index': index } as React.CSSProperties}>
              {client}
            </li>
          ))}
        </ul>
      </div>

      <h2 className={styles.title}>
        <span className={styles.titleLineOne}>RELACIONES</span>
        <span className={styles.titleLineTwo}>COMERCIALES</span>
      </h2>
    </section>
  );
}
