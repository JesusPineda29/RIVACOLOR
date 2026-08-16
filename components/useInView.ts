'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Marca un elemento como visible la primera vez que entra en pantalla.
 * Una vez disparado deja de observar: las animaciones no se repiten al volver a subir.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Navegador sin IntersectionObserver: mostramos el contenido sin animar.
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setIsInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
