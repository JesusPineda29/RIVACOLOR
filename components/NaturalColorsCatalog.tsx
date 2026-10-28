"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './NaturalColorsCatalog.module.css';

const BASE = '/assets/productos/naturales';

type NaturalColor = {
  slug: string;
  name: string;
  /** Color del subrayado y del panel (guía de hexadecimales). */
  color: string;
  /** Párrafo de introducción que se muestra en el panel de color. */
  intro: string;
  features: string[];
  applications: string[];
  /** Consideración técnica; se omite si aún no hay texto aprobado. */
  note?: string;
};

/* Textos tomados de "FICHAS INFORMATIVAS - COLORANTES NATURALES.docx". */
const colors: NaturalColor[] = [
  {
    slug: 'malta',
    name: 'Malta',
    color: '#bd9468',
    intro:
      'La malta se obtiene a partir de cereales germinados, principalmente cebada. Sus extractos aportan tonalidades que van del dorado al marrón, además de contribuir con notas características de sabor y aroma a malta, según su presentación.',
    features: [
      'Permite aportar tonalidades cálidas y naturales a los alimentos.',
      'Puede complementar el perfil sensorial de productos de panificación y cereales.',
      'Es útil para desarrollar apariencias asociadas con productos horneados, tostados y elaborados con cereales.',
    ],
    applications: [
      'Pan de caja y pan integral.',
      'Pan artesanal y bollería.',
      'Galletas y bizcochos.',
      'Cereales para desayuno.',
      'Barras de cereales y granola.',
      'Productos de panificación con tonalidades doradas.',
      'Bebidas a base de malta.',
      'Mezclas para hornear.',
    ],
  },
  {
    slug: 'curcuma',
    name: 'Cúrcuma',
    color: '#f1ad02',
    intro:
      'La cúrcuma es una raíz cuyo pigmento principal es la curcumina. Se utiliza como colorante de origen vegetal para aportar tonalidades amarillas y doradas a alimentos y formulaciones de diferentes categorías.',
    features: [
      'Aporta un color amarillo característico y reconocible.',
      'Es de origen vegetal y puede emplearse en formulaciones que buscan colores derivados de fuentes naturales.',
      'Ofrece aplicaciones tanto en productos salados como en determinadas formulaciones dulces.',
    ],
    applications: [
      'Mostazas.',
      'Sazonadores para frituras.',
      'Pastas.',
      'Productos cárnicos.',
      'Salsas amarillas.',
      'Sopas y cremas instantáneas.',
      'Arroz preparado y mezclas de especias.',
      'Botanas y snacks.',
    ],
    note: 'La curcumina presenta baja solubilidad en agua y sensibilidad a la luz y a ciertas condiciones de procesamiento. La presentación del colorante debe seleccionarse según la matriz alimentaria.',
  },
  {
    slug: 'luteina',
    name: 'Luteína',
    color: '#b95500',
    intro:
      'La luteína es un pigmento natural de la familia de los carotenoides, presente en vegetales de hojas verdes y flores como el cempasúchil. Se utiliza para aportar tonalidades amarillas y doradas a diferentes productos alimenticios.',
    features: [
      'Permite desarrollar tonalidades amarillas de origen natural.',
      'Es una alternativa para formulaciones que requieren pigmentos de la familia de los carotenoides.',
      'Puede contribuir a obtener colores cálidos en alimentos con base grasa o en sistemas formulados para su dispersión.',
    ],
    applications: [
      'Pastas y fideos.',
      'Productos de panificación y pastelería.',
      'Galletas y bizcochos.',
      'Bebidas y preparados nutricionales.',
      'Yogures y postres lácteos.',
      'Helados y postres congelados.',
      'Margarinas y productos grasos.',
      'Mezclas para bebidas y suplementos alimenticios, cuando la regulación y la presentación lo permitan.',
    ],
    note: 'Su aplicación depende de la forma comercial, la concentración y la dispersabilidad del pigmento. Al igual que otros carotenoides, puede degradarse por exposición a la luz, el oxígeno y temperaturas elevadas.',
  },
  {
    slug: 'annato',
    name: 'Annato',
    color: '#c55e00',
    intro:
      'El annatto, también conocido como achiote, se obtiene de las semillas de Bixa orellana. Sus pigmentos principales, bixina y norbixina, se utilizan para aportar tonalidades amarillas, doradas y anaranjadas a diversos alimentos.',
    features: [
      'Permite obtener tonalidades cálidas y características en alimentos.',
      'Cuenta con presentaciones de diferente solubilidad para adaptarse a distintas formulaciones.',
      'Es una alternativa de origen vegetal para desarrollar colores amarillos y anaranjados.',
    ],
    applications: [
      'Quesos tipo cheddar, manchego y quesos procesados.',
      'Mantequillas y margarinas.',
      'Productos lácteos y cremas.',
      'Embutidos, salchichas y productos cárnicos procesados.',
      'Botanas, snacks y sazonadores.',
      'Salsas, aderezos y productos preparados.',
    ],
    note: 'La elección entre bixina y norbixina, así como la presentación oleosa o acuosa, depende de la composición y fase de la formulación.',
  },
  {
    slug: 'caroteno',
    name: 'Caroteno',
    color: '#fe842f',
    intro:
      'Los carotenos son pigmentos naturales presentes en vegetales como la zanahoria. El betacaroteno es uno de los más utilizados en la industria alimentaria por su capacidad para aportar tonalidades amarillas y anaranjadas.',
    features: [
      'Permite desarrollar tonalidades cálidas y uniformes.',
      'Es compatible con sistemas grasos cuando se utiliza una presentación adecuada.',
      'El betacaroteno también es precursor de la vitamina A, aunque su contribución nutricional depende de la concentración y formulación empleadas.',
    ],
    applications: [
      'Margarinas.',
      'Quesos amarillos.',
      'Mantecas.',
      'Yogures sabor durazno y mango.',
      'Helados.',
      'Bebidas y preparados de frutas.',
      'Salsas, cremas y aderezos.',
      'Productos de panificación y pastelería.',
    ],
    note: 'Al ser liposoluble, la selección de una presentación dispersable o emulsificada es importante en productos acuosos. La luz, el oxígeno y el calor pueden afectar su estabilidad.',
  },
  {
    slug: 'paprika',
    name: 'Paprika',
    color: '#e70001',
    intro:
      'La paprika se obtiene del pimiento rojo (Capsicum annuum) y contiene pigmentos carotenoides como capsantina y capsorrubina. Se utiliza para aportar colores cálidos, desde el anaranjado hasta el rojo, en productos alimenticios.',
    features: [
      'Proporciona tonalidades rojizas y anaranjadas de origen vegetal.',
      'Es especialmente útil en formulaciones saladas y productos con contenido de grasa.',
      'Permite desarrollar una apariencia característica en productos cárnicos, botanas y sazonadores.',
    ],
    applications: [
      'Salchichas, chorizos y embutidos.',
      'Botanas y frituras.',
      'Sazonadores para papas y snacks.',
      'Sopas y cremas.',
      'Salsas, aderezos y dips.',
      'Quesos procesados y untables.',
      'Marinados y preparados cárnicos.',
      'Encurtidos y productos vegetales preparados.',
    ],
    note: 'Los extractos de paprika suelen ser liposolubles, por lo que la presentación debe ser compatible con la matriz alimentaria. La exposición excesiva al calor, la luz y el oxígeno puede reducir la intensidad del color.',
  },
  {
    slug: 'carmin',
    name: 'Carmín',
    color: '#990116',
    intro:
      'El carmín es un colorante natural obtenido de la cochinilla. Su pigmento principal es el ácido carmínico, utilizado para desarrollar tonalidades rosas y rojas de gran intensidad en alimentos.',
    features: [
      'Ofrece tonalidades rojas intensas y buena capacidad de coloración.',
      'Presenta buena estabilidad frente al calor y la luz en comparación con otros pigmentos rojos naturales.',
      'Su versatilidad permite utilizarlo en diversas matrices alimentarias, incluyendo productos lácteos, cárnicos y confitería.',
    ],
    applications: [
      'Yogures sabor fresa, frambuesa y frutos rojos.',
      'Leches fermentadas y bebidas lácteas.',
      'Helados, nieves y paletas.',
      'Quesos y productos lácteos saborizados.',
      'Salchichas, chorizos y embutidos.',
      'Pasteles, rellenos y productos de panificación.',
      'Gomitas, caramelos y confitería.',
      'Mermeladas y preparados de fruta.',
    ],
    note: 'Su tonalidad depende de la presentación, el pH y las interacciones con otros ingredientes. Es de origen animal, por lo que no es adecuado para productos veganos. También debe considerarse su potencial alergénico y el etiquetado aplicable.',
  },
  {
    slug: 'antocianina',
    name: 'Antocianina',
    color: '#b50051',
    intro:
      'Las antocianinas son pigmentos naturales presentes en frutas y vegetales como uvas, arándanos, moras y col morada. Permiten desarrollar tonalidades que van del rojo al violeta, dependiendo principalmente del pH de la formulación.',
    features: [
      'Origen vegetal y opción para desarrollar formulaciones con colorantes de origen natural.',
      'Amplia gama de tonalidades, especialmente en productos ácidos.',
      'Adecuadas para aplicaciones donde se busca un perfil de color asociado con frutas y extractos vegetales.',
    ],
    applications: [
      'Bebidas sabor frutos rojos, uva y arándano.',
      'Néctares y bebidas a base de frutas.',
      'Yogures y bebidas lácteas acidificadas sabor fresa o frutos rojos.',
      'Mermeladas, jaleas y preparados de fruta.',
      'Gomitas, caramelos y confitería.',
      'Helados de frutos rojos y sorbetes.',
    ],
    note: 'Su tonalidad y estabilidad dependen del pH; las formulaciones ácidas suelen favorecer los tonos rojos. El calor, la luz y ciertos ingredientes pueden modificar su color.',
  },
  {
    slug: 'betabel',
    name: 'Betabel',
    color: '#650050',
    intro:
      'El colorante de betabel se obtiene de la remolacha y contiene pigmentos conocidos como betalaínas, principalmente betanina. Se utiliza para aportar tonalidades rosadas y rojizas a alimentos, especialmente en aplicaciones frías.',
    features: [
      'Origen vegetal y tonalidades asociadas con frutas rojas.',
      'Adecuado para formulaciones que buscan incorporar color de origen natural.',
      'Particularmente útil en productos refrigerados y aplicaciones con tratamientos térmicos moderados.',
    ],
    applications: [
      'Yogures sabor fresa y moras.',
      'Postres lácteos fríos.',
      'Golosinas orgánicas.',
      'Rellenos de fruta.',
      'Helados, paletas y sorbetes.',
      'Gomitas y confitería.',
      'Bebidas y preparados de frutas.',
    ],
    note: 'Presenta sensibilidad al calor, la luz y el oxígeno. Para procesos de alta temperatura, se debe validar la retención del color en la formulación final.',
  },
  {
    slug: 'espirulina',
    name: 'Espirulina',
    color: '#058169',
    intro:
      'La espirulina es una microalga de la que se obtiene ficocianina, un pigmento natural de tonalidad azul. Se utiliza para desarrollar colores llamativos en alimentos y productos de confitería.',
    features: [
      'Fuente de color azul de origen natural.',
      'Permite desarrollar tonalidades azules y, en determinadas formulaciones, verdes al combinarse con otros colorantes.',
      'Es una alternativa para proyectos de formulación orientados a ingredientes de origen natural.',
    ],
    applications: [
      'Helados artesanales.',
      'Chicles naturales.',
      'Confitería con enfoque clean label.',
      'Bebidas saludables.',
      'Gomitas y malvaviscos.',
      'Glaseados y decoraciones de repostería.',
      'Postres congelados.',
      'Mezclas para bebidas en polvo.',
    ],
    note: 'La ficocianina es sensible al calor y a condiciones ácidas. Se recomienda principalmente para aplicaciones con procesamiento térmico moderado y pH compatible con su estabilidad.',
  },
];

export default function NaturalColorsCatalog() {
  const [activeSlug, setActiveSlug] = useState('annato');
  const active = colors.find((c) => c.slug === activeSlug) ?? colors[0];

  return (
    <section className={styles.section}>
      <h2 className={styles.banner}>
        <span>COLORANTES NATURALES</span>
      </h2>

      <div className={styles.layout}>
        <ul className={styles.list}>
          {colors.map((item) => (
            <li key={item.slug} className={styles.listItem}>
              <button
                type="button"
                className={`${styles.name} ${item.slug === active.slug ? styles.nameActive : ''}`}
                style={{ borderBottomColor: item.color }}
                onMouseEnter={() => setActiveSlug(item.slug)}
                onFocus={() => setActiveSlug(item.slug)}
                onClick={() => setActiveSlug(item.slug)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.photo} style={{ backgroundColor: active.color }}>
          {colors.map((item) => (
            <Image
              key={item.slug}
              src={`${BASE}/${item.slug}.jpg`}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 34vw"
              className={`${styles.photoImg} ${item.slug === active.slug ? styles.photoShown : ''}`}
            />
          ))}
        </div>

        <div className={styles.panel} style={{ backgroundColor: active.color }}>
          <h3 className={styles.panelTitle}>{active.name}</h3>
          <p className={styles.panelText}>{active.intro}</p>
        </div>
      </div>

      {/* Ficha completa del color activo. */}
      <div className={styles.details} aria-live="polite">
        <div className={styles.detailsColumns}>
          <div>
            <h4 className={styles.detailsTitle} style={{ borderBottomColor: active.color }}>
              Características y ventajas
            </h4>
            <ul className={styles.detailsList}>
              {active.features.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={styles.detailsTitle} style={{ borderBottomColor: active.color }}>
              Aplicaciones sugeridas
            </h4>
            <ul className={styles.detailsList}>
              {active.applications.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        {active.note && (
          <p className={styles.note}>
            <strong>Consideración técnica:</strong> {active.note}
          </p>
        )}
      </div>
    </section>
  );
}
