import type { Metadata } from 'next';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Certificaciones - Rivacolor',
  description:
    'Rivacolor S.A. de C.V. cuenta con certificación ISO 9001:2015 en gestión de la calidad y FSSC 22000 en inocuidad y seguridad alimentaria.',
};

const BASE = '/assets/certificaciones';

/* Textos de CERTIFICACIONES/TEXTOS.docx; diseño de CERTIFICACIONES/view.jpg. */
const certifications = [
  {
    id: 'iso-9001',
    title: 'Sistema de gestión de la calidad',
    text: 'Garantiza la estandarización, control operativo y mejora continua en la comercialización y mezcla de colorantes e insumos industriales.',
    badge: 'insignia-iso9001.svg',
    badgeAlt: 'Insignia ISO 9001 System Certified',
    certificate: 'certificado-iso9001',
    certificateName: 'ISO 9001:2015',
  },
  {
    id: 'fssc-22000',
    title: 'Inocuidad y seguridad alimentaria',
    text: 'Avala los esquemas más exigentes de control de riesgos, higiene y trazabilidad internacional para productos destinados a la industria de alimentos y bebidas.',
    badge: 'insignia-fssc22000.svg',
    badgeAlt: 'Insignia FSSC 22000 System Certified',
    certificate: 'certificado-fssc22000',
    certificateName: 'FSSC 22000',
  },
];

export default function CertificacionesPage() {
  return (
    <main>
      <TopBar />
      <Header />

      <section className={styles.hero}>
        <Image
          src={`${BASE}/banner.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroBar}>
          <h1 className={styles.heroTitle}>Compromiso con la Calidad y la Inocuidad</h1>
        </div>
      </section>

      <div className={styles.intro}>
        <p className={styles.introText}>
          Respaldamos cada uno de nuestros procesos bajo normativas globales para asegurar la máxima
          pureza, seguridad y consistencia en sus formulaciones.
        </p>
      </div>

      <div className={styles.grid}>
        {certifications.map((item) => (
          <section key={item.id} id={item.id} className={styles.cert}>
            <h2 className={styles.certTitle}>{item.title}</h2>

            <div className={styles.certBody}>
              <div className={styles.certInfo}>
                <Image
                  src={`${BASE}/${item.badge}`}
                  alt={item.badgeAlt}
                  width={130}
                  height={130}
                  className={styles.badge}
                />
                <p className={styles.certText}>{item.text}</p>
              </div>

              <a
                href={`${BASE}/${item.certificate}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certDoc}
                aria-label={`Ver certificado ${item.certificateName} (PDF)`}
              >
                <Image
                  src={`${BASE}/${item.certificate}.jpg`}
                  alt={`Certificado ${item.certificateName} de Rivacolor S.A. de C.V.`}
                  width={1013}
                  height={1400}
                  sizes="(max-width: 768px) 60vw, 20vw"
                  className={styles.certImg}
                />
                <span className={styles.certLink}>Ver certificado</span>
              </a>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
