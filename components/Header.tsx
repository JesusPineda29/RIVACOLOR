'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.homeIcon} aria-label="Inicio">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
        
        <button className={styles.hamburger} onClick={toggleMobileMenu} aria-label="Menú">
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1Open : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2Open : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3Open : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/nosotros" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
          <span className={styles.separator}>|</span>
          <Link href="/productos" className={styles.navLinkActive} onClick={() => setIsMobileMenuOpen(false)}>Productos</Link>
          <span className={styles.separator}>|</span>
          <Link href="/industrias" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Industrias</Link>
          <span className={styles.separator}>|</span>
          <Link href="/certificaciones" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Certificaciones</Link>
          <span className={styles.separator}>|</span>
          <Link href="/cotizaciones" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Cotizaciones</Link>
          <span className={styles.separator}>|</span>
          <Link href="/contacto" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
        </nav>

        <div className={styles.logo}>
          <span className={styles.logoText}>RIVACOLOR</span>
        </div>
      </div>
    </header>
  );
}
