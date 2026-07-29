'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.homeIcon} aria-label="Inicio">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
          <span className={styles.separator}>|</span>
          <Link href="/productos" className={styles.navLinkActive}>Productos</Link>
          <span className={styles.separator}>|</span>
          <Link href="/industrias" className={styles.navLink}>Industrias</Link>
          <span className={styles.separator}>|</span>
          <Link href="/certificaciones" className={styles.navLink}>Certificaciones</Link>
          <span className={styles.separator}>|</span>
          <Link href="/cotizaciones" className={styles.navLink}>Cotizaciones</Link>
          <span className={styles.separator}>|</span>
          <Link href="/contacto" className={styles.navLink}>Contacto</Link>
        </nav>

        <div className={styles.logo}>
          <span className={styles.logoText}>RIVACOLOR</span>
        </div>
      </div>
    </header>
  );
}
