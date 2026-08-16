'use client';

import { useInView } from './useInView';
import styles from './Reveal.module.css';

type RevealProps = {
  children: React.ReactNode;
  /** up: sube al aparecer · fade: sólo opacidad · zoom: escala ligera */
  variant?: 'up' | 'fade' | 'zoom';
  /** Retardo en ms, para escalonar elementos hermanos */
  delay?: number;
  /** Clases del contenedor: el wrapper ocupa el lugar del elemento original */
  className?: string;
};

export default function Reveal({ children, variant = 'up', delay = 0, className }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const classes = [
    styles.reveal,
    styles[variant],
    isInView ? styles.visible : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
