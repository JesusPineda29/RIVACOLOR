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
          <div className={styles.pinCircle}>
            <svg viewBox="0 0 24 24" width="35" height="35" fill="#e82e2e">
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
            </svg>
          </div>
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
