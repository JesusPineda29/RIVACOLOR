import Image from 'next/image';
import styles from './Industries.module.css';

const industriesData = [
  {
    id: 'alimentaria',
    title: 'INDUSTRIA ALIMENTARIA',
    text: 'Soluciones en color, conservación e ingredientes para desarrollar alimentos con mayor calidad, apariencia y estabilidad.',
    photo: '/assets/bloque3/FOTO_IND_ALIMENTARIA.jpg',
    icon: '/assets/bloque3/ICONO_UP_IND_ALIMENTARIA.png',
  },
  {
    id: 'bebidas',
    title: 'BEBIDAS',
    text: 'Ingredientes y colorantes especializados para bebidas con identidad visual, sabor y desempeño consistente.',
    photo: '/assets/bloque3/FOTO_BEBIDAS.jpg',
    icon: '/assets/bloque3/ICONO_UP_BEBIDAS.png',
  },
  {
    id: 'cosmetica',
    title: 'INDUSTRIA COSMÉTICA',
    text: 'Pigmentos, aditivos e ingredientes para productos cosméticos con innovación, estética y funcionalidad.',
    photo: '/assets/bloque3/FOTO_IND_COSMETICA.jpg',
    icon: '/assets/bloque3/ICONO_UP_IND_COSMETICA.png',
  },
  {
    id: 'farmaceutica',
    title: 'INDUSTRIA FARMACÉUTICA',
    text: 'Soluciones técnicas para formulaciones farmacéuticas con calidad, seguridad y desempeño especializado.',
    photo: '/assets/bloque3/FOTO_IND_FARMACEUTICA.jpg',
    icon: '/assets/bloque3/ICONO_UP_IND_FARMACEUTICA.png',
  },
  {
    id: 'animal',
    title: 'NUTRICIÓN ANIMAL',
    text: 'Ingredientes y soluciones para productos de nutrición animal con funcionalidad, estabilidad y valor agregado.',
    photo: '/assets/bloque3/FOTO_IND_ANIMAL.jpg',
    icon: '/assets/bloque3/ICONO_UP_IND_ANIMAL.png',
  },
  {
    id: 'hogar',
    title: 'CUIDADO DEL HOGAR',
    text: 'Colorantes e ingredientes para productos de limpieza e higiene con mejor apariencia y rendimiento.',
    photo: '/assets/bloque3/FOTO_CUIDADO_DEL_HOGAR.jpg',
    icon: '/assets/bloque3/ICONO_UP_CUIDADO_DEL_HOGAR.png',
  }
];

export default function Industries() {
  return (
    <section className={styles.industriesSection}>
      <h2 className={styles.mainTitle}>
        Industrias que <strong>Transformamos</strong>
      </h2>

      <div className={styles.gridWrapper}>
        {industriesData.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageBox}>
              <div className={styles.topIconWrapper}>
                <Image src={item.icon} alt={`${item.title} icon`} width={150} height={110} className={styles.topIconImg} />
              </div>
              <Image src={item.photo} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.photo} />
            </div>
            
            <div className={styles.contentBox}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <hr className={styles.separator} />
              <p className={styles.cardText}>{item.text}</p>
              
              <a href="#" className={styles.infoLink}>
                Información
                <Image src="/assets/bloque3/ICONO_INFORMACION.png" alt="Flecha" width={22} height={22} className={styles.infoIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
