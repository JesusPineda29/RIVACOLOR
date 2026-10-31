import Image from 'next/image';
import styles from './Location.module.css';

const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('Rivacolor, Manuel Acuña No. 6, Jacarandas, Iztapalapa, 09280 Ciudad de México, CDMX');

export default function Location() {
  return (
    <section className={styles.locationSection}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Ubícanos</h2>
          <p className={styles.address}>
            Manuel Acuña No. 6 Col. Jacarandas Iztapalapa, CDMX C.P. 09280, México
          </p>
          {/* Abre Google Maps con la ruta trazada desde la ubicación del usuario. */}
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className={`quote-button ${styles.directions}`}
          >
            Cómo llegar
          </a>
        </div>
        <div className={styles.pinContainer}>
          <Image 
            src="/assets/ICONO_UBICACION_SIN_SOMBRA.png" 
            alt="Ubicación" 
            width={125} 
            height={115} 
          />
        </div>
      </div>
      
      <div className={styles.mapWrapper}>
        <iframe 
          src="https://www.google.com/maps?q=Rivacolor,+S.A.+De+C.V.,+Manuel+Acuña+No.+6,+Jacarandas,+Iztapalapa,+09280+Ciudad+de+México,+CDMX&output=embed" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapIframe}
          title="Ubicación de Rivacolor en Google Maps"
        ></iframe>
      </div>
    </section>
  );
}
