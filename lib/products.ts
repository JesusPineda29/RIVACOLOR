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

export type IndustryId = 'alimentaria' | 'bebidas' | 'cosmetica' | 'farmaceutica' | 'animal' | 'hogar';

/** Nombre corto e ícono de cada industria (íconos de la carpeta INDUSTRIAS). */
export const industryIcons: Record<IndustryId, { label: string; icon: string }> = {
  alimentaria: { label: 'Alimentaria', icon: '/assets/industrias/icono_ind_alimentaria.svg' },
  bebidas: { label: 'Bebidas', icon: '/assets/industrias/icono_ind_bebidas.svg' },
  cosmetica: { label: 'Cosmética', icon: '/assets/industrias/icono_ind_cosmetica.svg' },
  farmaceutica: { label: 'Farmacéutica', icon: '/assets/industrias/icono_ind_farmaceutica.svg' },
  animal: { label: 'Nutrición animal', icon: '/assets/industrias/icono_ind_nutricion_animal.svg' },
  hogar: { label: 'Cuidado del hogar', icon: '/assets/industrias/icono_ind_cuidado_del_hogar.svg' },
};

export type Additive = {
  slug: string;
  name: string;
  /** Archivo de la foto del producto, si no coincide con el slug. */
  image?: string;
  /** "¿Qué es?" y "¿Para qué sirve?": un párrafo por elemento. */
  whatIs: string[];
  uses: string[];
  industries: IndustryId[];
};

/* Textos de las fichas "FICHA INFO - <producto>.docx" de la carpeta ADITIVOS E INGREDIENTES. */
export const additives: Additive[] = [
  {
    slug: "acido-citrico-anhidrico",
    name: "Ácido cítrico anhídrico",
    whatIs: [
      "Es un compuesto orgánico de origen natural presente en las frutas cítricas, cuya estructura anhidra (sin humedad) le brinda una consistencia cristalina de gran pureza.",
    ],
    uses: [
      "Utilizado como conservante, antioxidante, acidulante y saborizante de golosinas, bebidas gaseosas y otros alimentos.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal", "hogar"],
  },
  {
    slug: "acido-fumarico",
    name: "Ácido fumárico",
    whatIs: [
      "Es un compuesto orgánico que se encuentra en la naturaleza, en alimentos como los hongos, y también es producido sintéticamente para diversas aplicaciones industriales.",
    ],
    uses: [
      "Acidifica ciertos productos y mejora su sabor, especialmente en bebidas y productos de panadería.",
      "También se encuentra en alimentos procesados, como gomitas o chicles, para darles un toque ácido.",
    ],
    industries: ["alimentaria", "bebidas", "farmaceutica", "animal"],
  },
  {
    slug: "acido-sorbico",
    name: "Ácido sórbico",
    whatIs: [
      "Es un conservante natural ó sintético de forma se obtiene de las bayas del árbol \"Sorbus Aucuparia\".",
    ],
    uses: [
      "Se utiliza para prevenir el crecimiento de hongos y levaduras en alimentos y bebidas.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal"],
  },
  {
    slug: "acido-lactico",
    name: "Ácido láctico",
    whatIs: [
      "Es un ácido orgánico que se produce de forma natural durante la fermentación de azúcares.",
      "Se obtiene industrialmente mediante la fermentación bacteriana de carbohidratos, integrándose así en la economía circular.",
    ],
    uses: [
      "Se emplea como conservante, acidulante y regulador de pH en alimentos y medicamentos.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal", "hogar"],
  },
  {
    slug: "acido-malico",
    name: "Ácido málico",
    whatIs: [
      "Es un ácido orgánico dicarboxílico presente de forma natural en frutas como manzanas y uvas, utilizado habitualmente como aditivo y acidulante alimentario.",
    ],
    uses: [
      "Se utiliza principalmente para proporcionar un sabor ácido prolongado, ajustar el pH y resaltar los perfiles de sabor en alimentos, bebidas, confitería y productos farmacéuticos.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal"],
  },
  {
    slug: "almidon-de-maiz",
    name: "Almidón de maíz",
    whatIs: [
      "Es un carbohidrato complejo extraído del endospermo del grano de maíz, compuesto principalmente por cadenas de amilosa y amilopectina.",
    ],
    uses: [
      "Se emplea como agente espesante, aglutinante, estabilizante y antiaglomerante en productos alimentarios, además de ser un insumo clave en la fabricación de adhesivos, papel y cosméticos.",
    ],
    industries: ["alimentaria", "cosmetica", "farmaceutica", "animal"],
  },
  {
    slug: "benzoato-de-sodio",
    name: "Benzoato de sodio",
    whatIs: [
      "Es una sal sódica del ácido benzoico, compuesto que se encuentra de forma natural en algunas frutas como los arándanos y las ciruelas.",
    ],
    uses: [
      "Se utiliza principalmente como conservante en alimentos y bebidas debido a sus propiedades antimicrobianas y antifúngicas, lo que ayuda a prevenir el crecimiento de bacterias, levaduras y mohos.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "hogar"],
  },
  {
    slug: "bicarbonato-de-amonio",
    name: "Bicarbonato de amonio",
    whatIs: [
      "Es una sal inorgánica compuesta por amoníaco y ácido carbónico.",
      "También se le conoce como \"bicarbonato de amonio\" o \"sal de hartshorn\".",
    ],
    uses: [
      "Funciona como agente leudante y emulsionante.",
      "Se utiliza principalmente como levadura química en productos de panadería para hacerlos esponjosos.",
    ],
    industries: ["alimentaria", "farmaceutica"],
  },
  {
    slug: "bicarbonato-de-sodio",
    name: "Bicarbonato de sodio",
    whatIs: [
      "Es un compuesto sólido cristalino de color blanco, de fórmula química NaHCO3 soluble en agua y con un comportamiento alcalino suave.",
    ],
    uses: [
      "Se utiliza como agente leudante en la industria alimentaria, regulador de acidez, agente neutralizante en formulaciones químicas y principio activo en productos de limpieza y cuidado personal.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "hogar"],
  },
  {
    slug: "citrato-de-sodio",
    name: "Citrato de sodio",
    whatIs: [
      "Es la sal sódica del ácido cítrico, que se obtiene naturalmente de los cítricos.",
    ],
    uses: [
      "Se usa como regulador de acidez y conservante.",
      "Es común en productos alimenticios y bebidas, especialmente en refrescos y en alimentos procesados, para mejorar el sabor y la estabilidad.",
      "También se usa en productos farmacéuticos y como anticoagulante en algunas soluciones médicas.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "hogar"],
  },
  {
    slug: "cloruro-de-amonio",
    name: "Cloruro de amonio",
    whatIs: [
      "Es una sal compuesta de amoníaco y ácido clorhídrico.",
    ],
    uses: [
      "Se utiliza como aditivo alimentario y en la fabricación de productos como caramelos, galletas, panadería y productos cárnicos, ya que actúa como regulador de pH. También se usa en la industria química y farmacéutica.",
    ],
    industries: ["farmaceutica", "animal", "hogar"],
  },
  {
    slug: "dioxido-de-titanio",
    name: "Dióxido de titanio",
    whatIs: [
      "Es un polvo blanco utilizado como pigmento.",
    ],
    uses: [
      "Se usa en alimentos, cosméticos, productos farmacéuticos y pinturas debido a su alta opacidad y capacidad para proporcionar blancura.",
      "En alimentos, se utiliza como colorante (E171) para dar un tono blanco y opaco a productos como dulces, helados y cremas.",
    ],
    industries: ["alimentaria", "cosmetica", "farmaceutica", "hogar"],
  },
  {
    slug: "fosfato-de-aluminio-y-sodio",
    name: "Fosfato de aluminio y sodio",
    whatIs: [
      "Es un compuesto inorgánico sintético derivado del fósforo, aluminio y sodio, utilizado principalmente como aditivo de grado alimenticio e industrial.",
    ],
    uses: [
      "Se usa comúnmente como ácido leudante de acción lenta en masas horneadas (polvos para hornear) y como emulsionante y estabilizante en quesos procesados y alimentos preparados.",
    ],
    industries: ["alimentaria"],
  },
  {
    slug: "glutamato-monosodico",
    name: "Glutamato monosódico",
    whatIs: [
      "Es una sal sódica del ácido glutámico, un aminoácido presente de forma natural en muchos alimentos.",
    ],
    uses: [
      "Se utiliza como potenciador del sabor, especialmente en productos procesados como sopas, salsas, snacks y alimentos preparados.",
      "Mejora el umami, un sabor básico que se encuentra en alimentos como carne, queso y tomates.",
    ],
    industries: ["alimentaria", "animal"],
  },
  {
    slug: "goma-xanthana",
    name: "Goma xanthana",
    whatIs: [
      "Es un polisacárido producido por fermentación bacteriana de carbohidratos.",
    ],
    uses: [
      "Se utiliza como espesante, estabilizante y emulsificante en alimentos como salsas, aderezos, helados y productos sin gluten.",
      "También se usa en cosméticos, productos farmacéuticos y productos de cuidado personal.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal", "hogar"],
  },
  {
    slug: "lactato-de-calcio",
    name: "Lactato de calcio",
    whatIs: [
      "Es una sal producida por la combinación de ácido láctico con carbonato de calcio.",
    ],
    uses: [
      "Se utiliza como aditivo alimentario y suplemento nutricional, especialmente en la industria alimentaria y farmacéutica.",
    ],
    industries: ["alimentaria", "bebidas", "farmaceutica", "animal"],
  },
  {
    slug: "lecitina-de-soya",
    name: "Lecitina de soya",
    image: "lecitina-de-soya-bidon.png",
    whatIs: [
      "Mezcla de fosfolípidos (moléculas compuestas principalmente de grasas y fosfatos) que se extrae de las semillas de la soja.",
    ],
    uses: [
      "Se utiliza principalmente como emulsificante para mejorar la textura y evitar la separación de los ingredientes en productos alimenticios como chocolates, margarinas, helados y aderezos.",
      "También se emplea en la industria farmacéutica y cosmética.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal"],
  },
  {
    slug: "maltodextrina",
    name: "Maltodextrina",
    whatIs: [
      "Es un polisacárido producido a partir de almidón.",
    ],
    uses: [
      "Se utiliza como aditivo alimentario, especialmente como espesante o para mejorar la textura de productos como bebidas, cereales, golosinas y alimentos procesados. También se usa en productos de nutrición deportiva y suplementos.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal"],
  },
  {
    slug: "sorbato-de-potasio",
    name: "Sorbato de potasio",
    whatIs: [
      "Es una sal potásica del ácido sorbico, un conservante ampliamente utilizado en la industria alimentaria, cosmética y farmacéutica para prevenir el crecimiento de hongos, levaduras y bacterias.",
    ],
    uses: [
      "Se utiliza como conservante en alimentos y bebidas para prevenir el crecimiento de mohos, levaduras y bacterias, prolongando la vida útil y evitando su descomposición por microorganismos.",
    ],
    industries: ["alimentaria", "bebidas", "cosmetica", "farmaceutica", "animal", "hogar"],
  },
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
