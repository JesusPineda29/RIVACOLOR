/* Datos de los catálogos de producto. Viven fuera de los componentes para que
   el formulario de cotización (servidor) pueda usarlos sin cargar los catálogos. */

export type SyntheticColor = {
  slug: string;
  name: string;
  technicalName: string;
  presentations: string;
  /** Tono del listón; también pinta la barra inferior al seleccionar el color. */
  accent: string;
};

/* Datos tomados de "FICHAS INFO COLORES.docx". */
export const syntheticColors: SyntheticColor[] = [
  {
    slug: 'amarillo-5',
    name: 'Amarillo 5 Tartrazine',
    technicalName: 'Tartrazine / Tartrazina',
    presentations: 'Hidrosoluble, Laca Simple y Laca Doble.',
    accent: '#fff800',
  },
  {
    slug: 'amarillo-6',
    name: 'Amarillo 6 Sunset Yellow',
    technicalName: 'Sunset Yellow / Amarillo Ocaso',
    presentations: 'Hidrosoluble, Laca Simple y Laca Doble.',
    accent: '#ff9d00',
  },
  {
    slug: 'azul-1',
    name: 'Azul 1 Brilliant Blue',
    technicalName: 'Brilliant Blue / Azul Brillante',
    presentations: 'Hidrosoluble, Laca Simple y Laca Doble.',
    accent: '#1795cc',
  },
  {
    slug: 'azul-2',
    name: 'Azul 2 Indigo Carmine',
    technicalName: 'Indigo Carmine / Indigotina',
    presentations: 'Hidrosoluble.',
    accent: '#1b4777',
  },
  {
    slug: 'rojo-5',
    name: 'Rojo 5 Carmoisine',
    technicalName: 'Carmoisine / Carmoisina',
    presentations: 'Hidrosoluble y Laca.',
    accent: '#8c042f',
  },
  {
    slug: 'rojo-6',
    name: 'Rojo 6 Ponceau 4R',
    technicalName: 'Ponceau 4R / Rojo Ponceau',
    presentations: 'Hidrosoluble y Laca.',
    accent: '#ff0000',
  },
  {
    slug: 'rojo-40',
    name: 'Rojo 40 Allura Red',
    technicalName: 'Allura Red / Rojo Allura',
    presentations: 'Hidrosoluble y Laca.',
    accent: '#b50027',
  },
];

export type Additive = {
  slug: string;
  name: string;
  /** Archivo de la foto del producto, si no coincide con el slug. */
  image?: string;
};

export const additives: Additive[] = [
  { slug: 'acido-citrico-anhidrico', name: 'Ácido cítrico anhídrico' },
  { slug: 'acido-fumarico', name: 'Ácido fumárico' },
  { slug: 'acido-sorbico', name: 'Ácido sórbico' },
  { slug: 'acido-lactico', name: 'Ácido láctico' },
  { slug: 'acido-malico', name: 'Ácido málico' },
  { slug: 'almidon-de-maiz', name: 'Almidón de maíz' },
  { slug: 'benzoato-de-sodio', name: 'Benzoato de sodio' },
  { slug: 'bicarbonato-de-amonio', name: 'Bicarbonato de amonio' },
  { slug: 'bicarbonato-de-sodio', name: 'Bicarbonato de sodio' },
  { slug: 'citrato-de-sodio', name: 'Citrato de sodio' },
  { slug: 'cloruro-de-amonio', name: 'Cloruro de amonio' },
  { slug: 'dioxido-de-titanio', name: 'Dióxido de titanio' },
  { slug: 'fosfato-de-aluminio-y-sodio', name: 'Fosfato de aluminio y sodio' },
  { slug: 'glutamato-monosodico', name: 'Glutamato monosódico' },
  { slug: 'goma-xanthana', name: 'Goma xanthana' },
  { slug: 'lactato-de-calcio', name: 'Lactato de calcio' },
  { slug: 'lecitina-de-soya', name: 'Lecitina de soya', image: 'lecitina-de-soya-bidon.png' },
  { slug: 'maltodextrina', name: 'Maltodextrina' },
  { slug: 'sorbato-de-potasio', name: 'Sorbato de potasio' },
];

export type NaturalColor = {
  slug: string;
  name: string;
  /** Color del subrayado y de la barra (guía de hexadecimales). */
  color: string;
};

export const naturalColors: NaturalColor[] = [
  { slug: 'malta', name: 'Malta', color: '#bd9468' },
  { slug: 'curcuma', name: 'Cúrcuma', color: '#f1ad02' },
  { slug: 'luteina', name: 'Luteína', color: '#b95500' },
  { slug: 'annato', name: 'Annato', color: '#c55e00' },
  { slug: 'caroteno', name: 'Caroteno', color: '#fe842f' },
  { slug: 'paprika', name: 'Paprika', color: '#e70001' },
  { slug: 'carmin', name: 'Carmín', color: '#990116' },
  { slug: 'antocianina', name: 'Antocianina', color: '#b50051' },
  { slug: 'betabel', name: 'Betabel', color: '#650050' },
  { slug: 'espirulina', name: 'Espirulina', color: '#058169' },
];
