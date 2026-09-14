'use client';

import Image from 'next/image';
import { useInView } from './useInView';
import styles from './HistoryTimeline.module.css';

const milestones = [
  {
    value: '1984',
    label: 'FUNDACIÓN',
    color: '#c81618',
    icon: '/assets/nosotros/timeline/PASO_1.png',
    text: 'Rivacolor S.A. de C.V. fue fundada el 12 de marzo de 1984 por un grupo de empresarios y la Familia Rivas.',
  },
  {
    value: '2008',
    label: 'NUEVO LIDERAZGO COMERCIAL',
    color: '#ed732d',
    icon: '/assets/nosotros/timeline/PASO_2.png',
    text: 'El Arq. Yan Rivas se integra a la dirección comercial y, junto con un gran equipo de colaboradores, impulsa la expansión y crecimiento de la empresa.',
  },
  {
    value: '41 AÑOS',
    label: 'TRAYECTORIA',
    color: '#e9ac08',
    icon: '/assets/nosotros/timeline/PASO_3.png',
    text: 'En 2025 se cumplieron 41 años en el mercado de la importación de materia prima para la industria alimenticia, cosmética y farmacéutica.',
  },
  {
    value: '+5 PAISES',
    label: 'RELACIONES INTERNACIONALES',
    color: '#46a734',
    icon: '/assets/nosotros/timeline/PASO_4.png',
    text: 'Hemos establecido relaciones de mutua cooperación con empresas en países como China, Brasil, Argentina, India, Alemania, Estados Unidos, entre otros.',
  },
  {
    value: '+2,500 TONS',
    label: 'CAPACIDAD',
    color: '#06aba4',
    icon: '/assets/nosotros/timeline/PASO_5.png',
    text: 'Manejamos un volumen anual alrededor de 2,500 toneladas de forma constante en las actividades de importación, almacenaje, preservación, control y distribución.',
  },
  {
    value: 'HOY',
    label: 'CALIDAD Y\nCONFIANZA',
    color: '#0e65af',
    icon: '/assets/nosotros/timeline/PASO_6.png',
    text: 'Contamos con certificación ISO 9001:2015 / FSSC 22000, procesos HACCP y cumplimiento con NOM-251, asegurando calidad y control de riesgos.',
  },
];

export default function HistoryTimeline() {
  const { ref, isInView } = useInView<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      aria-label="Historia de Rivacolor"
    >
      <ol className={styles.steps}>
        {milestones.map((milestone, index) => (
          <li
            key={milestone.label}
            className={styles.step}
            style={
              {
                color: milestone.color,
                '--prev-color': milestones[index === 0 ? 0 : index - 1].color,
                '--index': index,
              } as React.CSSProperties
            }
          >
            <span className={styles.value}>{milestone.value}</span>

            <span className={styles.iconWrapper}>
              <Image
                src={milestone.icon}
                alt=""
                width={102}
                height={104}
                className={styles.icon}
              />
            </span>

            <span className={styles.label}>{milestone.label}</span>
            <p className={styles.text}>{milestone.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
