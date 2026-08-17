'use client';

import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/productos', label: 'Productos' },
  { href: '/industrias', label: 'Industrias' },
  { href: '/certificaciones', label: 'Certificaciones' },
  { href: '#contacto', label: 'Cotizaciones' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // On another page the Link already lands at the top; when we're already on
  // the target page Next skips the navigation, so scroll back up by hand.
  const scrollToTopIfOn = (href: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => scrollToTopIfOn('/');

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.homeIcon} aria-label="Inicio" onClick={handleHomeClick}>
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
          {navItems.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 && <span className={styles.separator}>|</span>}
              <Link
                href={item.href}
                className={pathname === item.href ? styles.navLinkActive : styles.navLink}
                onClick={() => scrollToTopIfOn(item.href)}
              >
                {item.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        <Link href="/" className={styles.logo} aria-label="Inicio" onClick={handleHomeClick}>
          <Image
            src="/assets/LOGOTIPO_RIVACOLOR.svg"
            alt="Rivacolor"
            width={142}
            height={68}
            priority
            className={styles.logoImage}
          />
        </Link>
      </div>
    </header>
  );
}
