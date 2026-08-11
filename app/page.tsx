import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import Features from '@/components/Features';
import Industries from '@/components/Industries';
import Solutions from '@/components/Solutions';
import AppliedSolutions from '@/components/AppliedSolutions';
import Functionalities from '@/components/Functionalities';
import Products from '@/components/Products';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <HeroCarousel />
      <Features />
      <Industries />
      <Solutions />
      <AppliedSolutions />
      <Functionalities />
      <Products />
      <Location />
      <Footer />
    </main>
  );
}
