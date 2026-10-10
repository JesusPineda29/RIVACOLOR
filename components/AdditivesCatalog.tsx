import Image from 'next/image';
import styles from './AdditivesCatalog.module.css';

const BASE = '/assets/productos/aditivos';

type Additive = {
  slug: string;
  name: string;
  /** Foto de aplicación que aparece dentro del círculo al pasar el cursor. */
  hoverImage?: string;
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
  { slug: 'lecitina-de-soya', name: 'Lecitina de soya' },
  { slug: 'maltodextrina', name: 'Maltodextrina' },
  { slug: 'sorbato-de-potasio', name: 'Sorbato de potasio' },
];

export default function AdditivesCatalog() {
  return (
    <section className={styles.section}>
      <h2 className={styles.banner}>
        <span>ADITIVOS E INGREDIENTES</span>
      </h2>

      <ul className={styles.grid}>
        {additives.map((item) => (
          <li key={item.slug} className={styles.card} tabIndex={0}>
            <div className={styles.stage}>
              <span className={styles.ring} />
              <span className={`${styles.ring} ${styles.ringHover}`} />
              {item.hoverImage && (
                <Image
                  src={item.hoverImage}
                  alt=""
                  width={211}
                  height={211}
                  className={styles.application}
                />
              )}
              <Image
                src={`${BASE}/${item.slug}.png`}
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
    </section>
  );
}
