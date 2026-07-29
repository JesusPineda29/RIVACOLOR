import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <h2 className={styles.title}>Contáctanos</h2>
      
      <div className={styles.mainBlockContainer}>
        <div className={styles.leftBlueBlock}>
          <div className={styles.contactColumns}>
            
            <div className={styles.column}>
              <div className={styles.iconWrapper}>
                {/* Envelope SVG */}
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 4l10 8 10-8" />
                </svg>
              </div>
              <p>ventas@rivacolor.com.mx</p>
              <p>ventas2@rivacolor.com.mx</p>
              <p>ventas3@rivacolor.com.mx</p>
              <p>ventas4@rivacolor.com.mx</p>
            </div>
            
            <div className={styles.column}>
              <div className={styles.iconWrapper}>
                {/* Phone SVG */}
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <p>55 5691 7794</p>
              <p>55 5693 7258</p>
              <p>55 5942 3013</p>
            </div>
            
          </div>
          
          <div className={styles.floatingIcon}>
             {/* Placeholder for the 3D phone icon */}
             <div className={styles.placeholderCircle}>
               <span style={{ fontSize: '2rem', color: '#497593', fontWeight: 'bold' }}>@</span>
             </div>
          </div>
        </div>

        <div className={styles.logoArea}>
           {/* Logo Placeholder */}
           <div className={styles.logoPlaceholder}>
             <span className={styles.logoRedMark}>&lt;</span> RIVACOLOR
           </div>
        </div>
        
        <div className={styles.rightBlueBlock}></div>
      </div>

      <div className={styles.bottomFooter}>
        <div className={`container ${styles.bottomContainer}`}>
          <div className={styles.footerTextRow}>
             <span className={styles.copyright}>® 2026 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</span>
             <span className={styles.loremText}>consectetuer adipiscing elit, sed diam</span>
             
             <div className={styles.socialIcons}>
               <a href="https://www.linkedin.com/company/rivacolor-s-a-de-c-v/posts/?feedView=all" target="_blank" rel="noreferrer" className={styles.socialCircle}>
                 <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="https://www.facebook.com/p/Rivacolor-SA-de-CV-61576355360481/" target="_blank" rel="noreferrer" className={styles.socialCircle}>
                 <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
               </a>
               <a href="https://www.instagram.com/rivacolor_/" target="_blank" rel="noreferrer" className={styles.socialCircle}>
                 <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
