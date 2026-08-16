import Image from 'next/image';
import Reveal from './Reveal';
import styles from './AboutGrowth.module.css';

export default function AboutGrowth() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.textCol}>
          <p className={styles.paragraph}>
            En <strong>2008</strong> el Arq. Yan Rivas se integra en la dirección comercial de
            la empresas y formando un gran equipo de colaboradores en distintas áreas han
            logrado una expansión y crecimiento importante los últimos 10 años.
            <br />
            En este 2025 la empresa cumple 41 años en el mercado de la importación de materia
            prima para la industria alimenticia, cosmética y farmacéutica.
          </p>
        </Reveal>

        <Reveal variant="zoom" delay={180} className={styles.imageCol}>
          <Image
            src="/assets/nosotros/FOTO_STAND.png"
            alt="Stand de Rivacolor en exposición de materias primas"
            width={2388}
            height={1792}
            sizes="(max-width: 992px) 90vw, 40vw"
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  );
}
