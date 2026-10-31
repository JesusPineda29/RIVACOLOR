import { industriesData } from '@/components/Industries';
import { additives, naturalColors, syntheticColors } from './products';

export type QuoteOption = {
  slug: string;
  name: string;
  /** Opción "Otro": el formulario pide escribir el producto. */
  isOther?: boolean;
};

export type QuoteCategory = {
  slug: string;
  name: string;
  /** Productos del catálogo; sin lista, la categoría solo pide comentarios. */
  products?: QuoteOption[];
};

const toOption = ({ slug, name }: { slug: string; name: string }): QuoteOption => ({ slug, name });
const other = (name: string): QuoteOption => ({ slug: 'otro', name, isOther: true });

/* Las listas salen de los mismos datos que las fichas, para que nunca se desfasen.
   Se arman en el servidor y al formulario solo le llegan slug y nombre. */
export const quoteCategories: QuoteCategory[] = [
  {
    slug: 'sinteticos',
    name: 'Colorantes Sintéticos',
    products: [
      ...syntheticColors.map(toOption),
      { slug: 'tono-especial', name: 'Mezcla / Tono especial' },
      other('Otro sintético'),
    ],
  },
  {
    slug: 'lacas',
    name: 'Lacas Alumínicas',
    products: [
      ...syntheticColors
        .filter((c) => c.presentations.includes('Laca'))
        .map((c) => ({ slug: c.slug, name: `Laca ${c.name}` })),
      other('Laca especial / Consulta técnica'),
    ],
  },
  {
    slug: 'aditivos',
    name: 'Aditivos e Ingredientes',
    products: [...additives.map(toOption), other('Otro aditivo')],
  },
  {
    slug: 'naturales',
    name: 'Colorantes Naturales',
    products: [...naturalColors.map(toOption), other('Otro natural')],
  },
  { slug: 'general', name: 'Otro / Consulta general' },
];

/** Industrias de la sección del inicio; "INDUSTRIA ALIMENTARIA" se muestra como "Industria alimentaria". */
export const quoteIndustries: QuoteOption[] = [
  ...industriesData.map(({ id, title }) => ({
    slug: id,
    name: title.charAt(0) + title.slice(1).toLowerCase(),
  })),
  { slug: 'otra', name: 'Otra' },
];
