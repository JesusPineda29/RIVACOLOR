import type { Metadata } from 'next';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Industrias - Rivacolor',
};

const BASE = '/assets/industrias';

/* Textos de "TEXTOS PARA SECCIÓN INDUSTRIAS.docx"; fotos e íconos de la carpeta INDUSTRIAS del Drive.
   Los id coinciden con las tarjetas del inicio, que enlazan a /industrias#id. */
const industries = [
  {
    id: 'alimentaria',
    title: 'Alimentaria',
    text: 'Ingredientes, conservadores y colorantes que potencian el sabor, la textura y la vida útil de tus formulaciones.',
    icon: 'icono_ind_alimentaria.svg',
    photos: ['alimentaria_1.jpg', 'alimentaria_2.jpg', 'alimentaria_3.jpg'],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    text: 'Sistemas de color, edulcorantes e ingredientes funcionales diseñados para brindar brillo, estabilidad y atractivo visual.',
    icon: 'icono_ind_bebidas.svg',
    photos: ['bebidas_1.jpg', 'bebidas_2.jpg', 'bebidas_3.jpg'],
  },
  {
    id: 'cosmetica',
    title: 'Cosmética',
    text: 'Pigmentos, emolientes y activos cosméticos formulados para aportar innovación sensorial, color y textura de vanguardia.',
    icon: 'icono_ind_cosmetica.svg',
    photos: ['cosmetica_2.jpg', 'cosmetica_1.jpg', 'cosmetica_3.jpg'],
  },
  {
    id: 'farmaceutica',
    title: 'Farmacéutica',
    text: 'Excipientes y materias primas grado farmacéutico con altos estándares de pureza, seguridad y cumplimiento normativo.',
    icon: 'icono_ind_farmaceutica.svg',
    photos: ['farmaceutica_1.jpg', 'farmaceutica_2.jpg', 'farmaceutica_3.jpg'],
  },
  {
    id: 'animal',
    title: 'Nutrición animal',
    text: 'Aditivos, núcleos y materias primas especializadas para garantizar palatabilidad, balance nutricional y bienestar.',
    icon: 'icono_ind_nutricion_animal.svg',
    photos: ['alimento_animal_1.jpg', 'alimento_animal_2.jpg', 'alimento_animal_3.jpg'],
  },
  {
    id: 'hogar',
    title: 'Cuidado del hogar',
    text: 'Colorantes de alta estabilidad, fragancias e ingredientes activos orientados al máximo rendimiento en productos de limpieza.',
    icon: 'icono_ind_cuidado_del_hogar.svg',
    photos: ['cuidadodelhogar_1.jpg', 'cuidadodelhogar_2.jpg', 'cuidadodelhogar_3.jpg'],
  },
];

export default function IndustriasPage() {
  return (
    <main>
      <TopBar />
      <Header />

      <h1 className={styles.srOnly}>Industrias</h1>

      <div className={styles.list}>
        {industries.map((item, i) => {
          const [big, small1, small2] = item.photos;
          return (
            <section key={item.id} id={item.id} className={styles.section}>
              {i > 0 && <hr className={styles.separator} />}

              {/* Alternan: foto grande a la izquierda (pares) o a la derecha (nones). */}
              <div className={`${styles.block} ${i % 2 === 1 ? styles.reverse : ''}`}>
                <div className={styles.big}>
                  <Image src={`${BASE}/${big}`} alt="" fill sizes="(max-width: 768px) 100vw, 48vw" className={styles.img} priority={i === 0} />
                  <h2 className={styles.title}>{item.title}</h2>
                </div>

                <div className={styles.icon}>
                  <Image src={`${BASE}/${item.icon}`} alt="" width={120} height={120} className={styles.iconImg} />
                </div>

                <div className={styles.side}>
                  <div className={styles.small}>
                    <Image src={`${BASE}/${small1}`} alt="" fill sizes="(max-width: 768px) 50vw, 23vw" className={styles.img} />
                  </div>
                  <div className={styles.small}>
                    <Image src={`${BASE}/${small2}`} alt="" fill sizes="(max-width: 768px) 50vw, 23vw" className={styles.img} />
                  </div>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
