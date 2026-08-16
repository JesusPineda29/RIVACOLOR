import AboutVideo from './AboutVideo';
import Reveal from './Reveal';
import styles from './AboutIntro.module.css';

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal variant="zoom" className={styles.videoCol}>
          <AboutVideo />
        </Reveal>

        <Reveal delay={150} className={styles.textCol}>
          <p className={styles.paragraph}>
            Rivacolor S.A. de C.V. es una empresa 100% mexicana fundada en marzo de 1984.
            Desde nuestros orígenes, asumimos la gran responsabilidad de ser un eslabón clave
            en el suministro de materias primas esenciales para las industrias alimenticia,
            farmacéutica y cosmética en México.
          </p>
          <p className={styles.paragraph}>
            Guiados por la visión de nuestro fundador, el Ing. Marcelino Rivas R., hemos
            construido una trayectoria basada en la honestidad, la puntualidad y una profunda
            vocación de servicio.
            <br />
            Estos valores nos han permitido mantenernos vigentes, evolucionando constantemente
            y consolidando nuestro liderazgo durante más de 40 años en el mercado.
          </p>
        </Reveal>
      </div>

      <Reveal variant="fade" delay={250} className={`container ${styles.dividerWrapper}`}>
        <hr className={styles.divider} />
      </Reveal>
    </section>
  );
}
