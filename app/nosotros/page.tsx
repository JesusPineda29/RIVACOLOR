import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import AboutIntro from '@/components/AboutIntro';
import AboutBanner from '@/components/AboutBanner';
import AboutGrowth from '@/components/AboutGrowth';
import CommercialRelations from '@/components/CommercialRelations';
import HistoryTimeline from '@/components/HistoryTimeline';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nosotros - Rivacolor',
  description:
    'Rivacolor S.A. de C.V., empresa 100% mexicana fundada en 1984, suministra materias primas para las industrias alimenticia, farmacéutica y cosmética.',
};

export default function NosotrosPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <AboutIntro />
      <AboutBanner />
      <AboutGrowth />
      <CommercialRelations />
      <HistoryTimeline />
      <Footer />
    </main>
  );
}
