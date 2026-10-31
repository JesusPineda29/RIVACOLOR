"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useInView } from './useInView';
import styles from './Products.module.css';

/* Sin `href`, la categoría aún no tiene sección en /productos. Las lacas viven en la de sintéticos. */
const products: { id: number; title: string; href?: string; iconOff: string; iconOn: string }[] = [
  {
    id: 1,
    title: 'Colores\nSintéticos',
    href: '/productos#sinteticos',
    iconOff: '/assets/bloque7/ICONO_COLORES_SINTETICOS_OFF.png',
    iconOn: '/assets/bloque7/ICONO_COLORES_SINTETICOS_ON.png'
  },
  {
    id: 2,
    title: 'Colores\nNaturales',
    href: '/productos#naturales',
    iconOff: '/assets/bloque7/ICONO_COLORES_NATURALES_OFF.png',
    iconOn: '/assets/bloque7/ICONO_COLORES_NATURALES_ON.png'
  },
  {
    id: 3,
    title: 'Lacas\nAlumínicas',
    href: '/productos#sinteticos',
    iconOff: '/assets/bloque7/ICONO_LACAS_ALUMINICAS_OFF.png',
    iconOn: '/assets/bloque7/ICONO_LACAS_ALUMINICAS_ON.png'
  },
  {
    id: 4,
    title: 'Aditivos e\nIngredientes',
    href: '/productos#aditivos',
    iconOff: '/assets/bloque7/ICONO_ADITIVOS_E_INGREDIENTES_OFF.png',
    iconOn: '/assets/bloque7/ICONO_ADITIVOS_E_INGREDIENTES_ON.png'
  },
  {
    id: 5,
    title: 'Sabores y\nEscencias',
    iconOff: '/assets/bloque7/ICONO_SABORES_Y_ESCENCIAS_OFF.png',
    iconOn: '/assets/bloque7/ICONO_SABORES_Y_ESCENCIAS_ON.png'
  },
  {
    id: 6,
    title: 'Servicio de\nImportación',
    iconOff: '/assets/bloque7/ICONO_SERV_DE_IMPORTACION_OFF.png',
    iconOn: '/assets/bloque7/ICONO_SERV_DE_IMPORTACION_ON.png'
  }
];

function ProductTile({ product }: { product: (typeof products)[number] }) {
  return (
    <>
      <div className={styles.iconWrapper}>
        <Image 
          src={product.iconOff}
          alt={product.title.replace('\n', ' ')}
          fill
          sizes="(max-width: 992px) 80px, 80px"
          className={styles.iconOff}
        />
        <Image 
          src={product.iconOn}
          alt={`${product.title.replace('\n', ' ')} active`}
          fill
          sizes="(max-width: 992px) 80px, 80px"
          className={styles.iconOn}
        />
      </div>
      <p className={styles.itemTitle}>{product.title}</p>
    </>
  );
}

export default function Products() {
  const { ref: gridRef, isInView } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>
        Encuentra el <strong>Producto</strong> adecuado.
      </h2>
      <div ref={gridRef} className={`${styles.gridContainer} ${isInView ? styles.gridVisible : ''}`}>
        {products.map((product) => (
          product.href ? (
            <Link key={product.id} href={product.href} className={styles.gridItem}>
              <ProductTile product={product} />
            </Link>
          ) : (
            <div key={product.id} className={styles.gridItem}>
              <ProductTile product={product} />
            </div>
          )
        ))}
      </div>
    </section>
  );
}
