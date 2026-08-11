import Image from 'next/image';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section className={styles.locationSection}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Ubícanos</h2>
          <p className={styles.address}>
            Manuel Acuña No. 6 Col. Jacarandas Iztapalapa, CDMX C.P. 09280, México
          </p>
        </div>
        <div className={styles.pinContainer}>
          <Image 
            src="/assets/ICONO_UBICACION.png" 
            alt="Ubicación" 
            width={120} 
            height={120} 
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
