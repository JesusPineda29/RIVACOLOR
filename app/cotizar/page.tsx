import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { quoteCategories, quoteIndustries } from '@/lib/quote';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cotizar - Rivacolor',
};

type CotizarPageProps = {
  searchParams: Promise<{
    categoria?: string | string[];
    producto?: string | string[];
    industria?: string | string[];
  }>;
};

const first = (value?: string | string[]) => (Array.isArray(value) ? value[0] : value);

export default async function CotizarPage({ searchParams }: CotizarPageProps) {
  const { categoria, producto, industria } = await searchParams;

  return (
    <main>
      <TopBar />
      <Header />
      <section className={styles.section}>
        <h1 className={styles.banner}>
          <span>SOLICITA TU COTIZACIÓN</span>
        </h1>
        <div className={styles.body}>
          <p className={styles.intro}>
            Cuéntanos qué necesitas y un asesor te contactará con precio y disponibilidad.
          </p>
          <QuoteForm
            categories={quoteCategories}
            industries={quoteIndustries}
            initialCategory={first(categoria)}
            initialProduct={first(producto)}
            initialIndustry={first(industria)}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
