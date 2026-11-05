import { industriesData } from '@/components/Industries';
import { additives, naturalColors, syntheticColors } from './products';

export type QuoteOption = {
  slug: string;
  name: string;
  /** Opción "Otro": el formulario pide escribir el producto. */
  isOther?: boolean;
  /** Slugs de la página de productos que también eligen esta opción (p. ej. dos bicarbonatos en uno). */
  aliases?: string[];
};

export type QuoteCategory = {
  slug: string;
  name: string;
  /** Título de la lista condicionada, si difiere del nombre de la categoría. */
  productLabel?: string;
  /** Opciones de la guía de cotización; sin lista, la categoría no pide producto. */
  products?: QuoteOption[];
  /**
   * Productos de la página que no están en la lista de la guía. Si un botón "Cotizar" llega
   * con uno de ellos, se elige "Otro" (o se anota en comentarios) con su nombre ya escrito.
   */
  catalog?: QuoteOption[];
};

const other = (name: string): QuoteOption => ({ slug: 'otro', name, isOther: true });

/* Listas tal cual la guía "Especificaciones de Campos para el Formulario de Cotización".
   Los slugs coinciden con los de lib/products.ts para que ?producto= las preseleccione. */
export const quoteCategories: QuoteCategory[] = [
  {
    slug: 'sinteticos',
    name: 'Colorantes Sintéticos',
    products: [
      { slug: 'amarillo-5', name: 'Amarillo No. 5 (Tartrazina)' },
      { slug: 'amarillo-6', name: 'Amarillo No. 6 (Ocaso)' },
      { slug: 'azul-1', name: 'Azul No. 1 (Brillante)' },
      { slug: 'azul-2', name: 'Azul No. 2 (Indigotina)' },
      { slug: 'rojo-5', name: 'Rojo No. 5' },
      { slug: 'rojo-6', name: 'Rojo No. 6' },
      { slug: 'rojo-40', name: 'Rojo No. 40 (Allura)' },
      { slug: 'tono-especial', name: 'Mezcla / Tono Especial' },
      other('Otro Sintético'),
    ],
    catalog: syntheticColors.map(({ slug, name }) => ({ slug, name })),
  },
  {
    slug: 'lacas',
    name: 'Lacas Alumínicas',
    products: [
      { slug: 'amarillo-5', name: 'Laca Amarillo No. 5' },
      { slug: 'amarillo-6', name: 'Laca Amarillo No. 6' },
      { slug: 'azul-1', name: 'Laca Azul No. 1' },
      { slug: 'azul-2', name: 'Laca Azul No. 2' },
      { slug: 'rojo-5', name: 'Laca Rojo No. 5' },
      { slug: 'rojo-40', name: 'Laca Rojo No. 40' },
      other('Laca Especial / Consulta Técnica'),
    ],
    catalog: syntheticColors.map(({ slug, name }) => ({ slug, name: `Laca ${name}` })),
  },
  {
    slug: 'aditivos',
    name: 'Aditivos y Auxiliares Tecnológicos',
    productLabel: 'Aditivos e Ingredientes Funcionales',
    products: [
      { slug: 'acido-citrico-anhidrico', name: 'Ácido Cítrico Anhidro' },
      { slug: 'acido-benzoico', name: 'Ácido Benzoico' },
      { slug: 'acido-fumarico', name: 'Ácido Fumárico' },
      { slug: 'acido-sorbico', name: 'Ácido Sórbico' },
      { slug: 'benzoato-de-sodio', name: 'Benzoato de Sodio' },
      { slug: 'sorbato-de-potasio', name: 'Sorbato de Potasio' },
      { slug: 'cloruro-de-calcio', name: 'Cloruro de Calcio' },
      { slug: 'cloruro-de-amonio', name: 'Cloruro de Amonio' },
      { slug: 'citrato-de-sodio', name: 'Citrato de Sodio' },
      { slug: 'fosfato-de-aluminio-y-sodio', name: 'Fosfato de Aluminio y Sodio' },
      {
        slug: 'bicarbonato',
        name: 'Bicarbonato de Amonio / Sodio',
        aliases: ['bicarbonato-de-amonio', 'bicarbonato-de-sodio'],
      },
      { slug: 'goma-xanthana', name: 'Goma Xanthan' },
      { slug: 'lecitina-de-soya', name: 'Lecitina de Soya' },
      { slug: 'glutamato-monosodico', name: 'Glutamato Monosódico' },
      { slug: 'dioxido-de-titanio', name: 'Dióxido de Titanio' },
      { slug: 'maltodextrina', name: 'Maltodextrina' },
      other('Otro Aditivo'),
    ],
    catalog: additives.map(({ slug, name }) => ({ slug, name })),
  },
  {
    slug: 'naturales',
    name: 'Colorantes Naturales',
    catalog: naturalColors.map(({ slug, name }) => ({ slug, name })),
  },
  { slug: 'general', name: 'Otro / Consulta General' },
];

export const quoteVolumes = [
  'Muestra técnica / Pruebas de laboratorio',
  'Presentación menor (Saco / Porrón - 25 kg)',
  'Lote Industrial / Tarima (500 kg a 1 Tonelada)',
  'Volumen Alto / Contrato de suministro anual',
];

export const quoteUrgencies = [
  'Inmediata (Menos de 7 días)',
  'Corto Plazo (15 a 30 días)',
  'Desarrollo de proyecto futuro (Más de 1 mes)',
];

export const quoteCertifications = [
  'Certificado Kosher',
  'Certificado Halal',
  'Certificado de Análisis (CoA)',
  'Grado Alimenticio / Normativa NOM-251 / HACCP',
];

/** Industrias de la sección del inicio; "INDUSTRIA ALIMENTARIA" se muestra como "Industria alimentaria". */
export const quoteIndustries: QuoteOption[] = [
  ...industriesData.map(({ id, title }) => ({
    slug: id,
    name: title.charAt(0) + title.slice(1).toLowerCase(),
  })),
  { slug: 'otra', name: 'Otra' },
];
