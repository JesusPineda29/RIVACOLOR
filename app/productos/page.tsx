import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdditivesCatalog from '@/components/AdditivesCatalog';
import SyntheticColorsCatalog from '@/components/SyntheticColorsCatalog';
import NaturalColorsCatalog from '@/components/NaturalColorsCatalog';

export const metadata: Metadata = {
  title: 'Productos - Rivacolor',
};

export default function ProductosPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <AdditivesCatalog />
      <SyntheticColorsCatalog />
      <NaturalColorsCatalog />
      <Footer />
    </main>
  );
}
