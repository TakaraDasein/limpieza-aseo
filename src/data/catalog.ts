export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  variants?: string[];
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'escobas',
    name: 'Escobas',
    description: 'Variedad de escobas según el tipo de cerda y uso',
    icon: 'cleaning_services'
  },
  {
    id: 'cepillos',
    name: 'Cepillos y Utensilios',
    description: 'Herramientas para limpieza profunda y remoción de suciedad',
    icon: 'brush'
  },
  {
    id: 'traperos',
    name: 'Traperos',
    description: 'Diferentes materiales y capacidades de absorción',
    icon: 'mop'
  },
  {
    id: 'jabones',
    name: 'Jabones y Químicos',
    description: 'Productos de limpieza para diversas superficies',
    icon: 'water_drop'
  },
  {
    id: 'esponjas',
    name: 'Esponjas y Esponjillas',
    description: 'Para diferentes niveles de abrasión y superficies',
    icon: 'soap'
  },
  {
    id: 'varios',
    name: 'Artículos Varios',
    description: 'Productos complementarios de higiene y hogar',
    icon: 'shopping_basket'
  }
];

export const products: Product[] = [
  // Escobas
  {
    id: 'escoba-tr',
    name: 'Escoba TR',
    category: 'escobas',
    description: 'Escoba de alta calidad con sistema de barrido eficiente',
    variants: ['Cerda dura', 'Cerda suave'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400'
  },
  {
    id: 'escoba-zulia',
    name: 'Escoba Zulia',
    category: 'escobas',
    description: 'Diseño tradicional con cerda suave para todo tipo de pisos',
    variants: ['Cerda suave'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400'
  },
  {
    id: 'escoba-dura',
    name: 'Escoba Dura',
    category: 'escobas',
    description: 'Ideal para exteriores y superficies rugosas',
    variants: ['Tipo cerda Zulia'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400'
  },
  {
    id: 'escoba-dr',
    name: 'Escoba DR',
    category: 'escobas',
    description: 'Escoba de diseño ergonómico con cerda suave',
    variants: ['Cerda suave'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400'
  },
  {
    id: 'escoba-wm',
    name: 'Escoba WM',
    category: 'escobas',
    description: 'Modelo profesional para limpieza eficiente',
    variants: ['Cerda suave'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400'
  },
  {
    id: 'escoba-neon',
    name: 'Escoba Neón',
    category: 'escobas',
    description: 'Diseño moderno con colores vibrantes',
    variants: ['Cerda suave'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400'
  },

  // Cepillos
  {
    id: 'cepillo-plancha',
    name: 'Cepillo Plancha',
    category: 'cepillos',
    description: 'Cepillo de cerda dura para limpieza profunda',
    variants: ['Cerda dura'],
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'cepillo-brillo',
    name: 'Cepillo Brillo',
    category: 'cepillos',
    description: 'Ideal para dar brillo a superficies delicadas',
    variants: ['Cerda suave'],
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'multiusos-telaranero',
    name: 'Multiusos y Telarañero',
    category: 'cepillos',
    description: 'Herramienta versátil para limpieza general y techos',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'cepillo-bano',
    name: 'Cepillo para Baño',
    category: 'cepillos',
    description: 'Especializado para limpieza de sanitarios',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'limpia-vidrios',
    name: 'Limpia Vidrios',
    category: 'cepillos',
    description: 'Para dejar tus vidrios impecables sin rayas',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'recogedor-plus',
    name: 'Recogedor Plus Banda',
    category: 'cepillos',
    description: 'Recogedor con banda de goma para mejor sellado',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'recogedor-smart',
    name: 'Recogedor Smart',
    category: 'cepillos',
    description: 'Diseño inteligente y ergonómico',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },
  {
    id: 'rastrillo',
    name: 'Rastrillo',
    category: 'cepillos',
    description: 'Para recolección de residuos en exteriores',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },

  // Traperos
  {
    id: 'trapero-microfibra',
    name: 'Trapero de Microfibra',
    category: 'traperos',
    description: 'Máxima absorción y durabilidad con tecnología de microfibra',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400'
  },
  {
    id: 'trapero-copa-500',
    name: 'Trapero Tipo Copa 500',
    category: 'traperos',
    description: 'Trapero tipo copa referencia 500',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400'
  },
  {
    id: 'trapero-copa-800',
    name: 'Trapero Tipo Copa 800',
    category: 'traperos',
    description: 'Trapero tipo copa referencia 800',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400'
  },
  {
    id: 'trapero-copa-1000',
    name: 'Trapero Tipo Copa 1000',
    category: 'traperos',
    description: 'Trapero tipo copa referencia 1000',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400'
  },
  {
    id: 'trapero-copa-1200',
    name: 'Trapero Tipo Copa 1200',
    category: 'traperos',
    description: 'Trapero tipo copa referencia 1200, máxima capacidad',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400'
  },

  // Jabones y Químicos
  {
    id: 'detergente-1000ml',
    name: 'Detergente Líquido Deter Max Biorey 1000ml',
    category: 'jabones',
    description: 'Detergente líquido de alta concentración para ropa, 1000ml',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfp3RatSEVLgb4oYhlmfiXztweqVNwJbX6HSi-9-C8hjC-5r0GSWgNeszvhDq6PgCnLYqZjpp_m2nyfRSN5wQbHmwICdFHo-jP_ZzO6FpeGIQlQl1KkBPHa4zZlLi036MOMDxd8qzb3sqPk4_DXC9HfvGuCFlYcs_cJffqGjRgd-zRV4ylRpqNmYP8zVeGsR-x7RFOqnaTFpuwk3ErpcSgzDTbVGidKSPCnBOxryjGBS8C6wEKz7wfUPzXiGoHNMQVpNIA3xF_QiQ'
  },
  {
    id: 'detergente-2000ml',
    name: 'Detergente Líquido Deter Max Biorey 2000ml',
    category: 'jabones',
    description: 'Detergente líquido de alta concentración para ropa, 2000ml',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfp3RatSEVLgb4oYhlmfiXztweqVNwJbX6HSi-9-C8hjC-5r0GSWgNeszvhDq6PgCnLYqZjpp_m2nyfRSN5wQbHmwICdFHo-jP_ZzO6FpeGIQlQl1KkBPHa4zZlLi036MOMDxd8qzb3sqPk4_DXC9HfvGuCFlYcs_cJffqGjRgd-zRV4ylRpqNmYP8zVeGsR-x7RFOqnaTFpuwk3ErpcSgzDTbVGidKSPCnBOxryjGBS8C6wEKz7wfUPzXiGoHNMQVpNIA3xF_QiQ'
  },
  {
    id: 'detergente-4000ml',
    name: 'Detergente Líquido Deter Max Biorey 4000ml',
    category: 'jabones',
    description: 'Detergente líquido de alta concentración para ropa, 4000ml',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfp3RatSEVLgb4oYhlmfiXztweqVNwJbX6HSi-9-C8hjC-5r0GSWgNeszvhDq6PgCnLYqZjpp_m2nyfRSN5wQbHmwICdFHo-jP_ZzO6FpeGIQlQl1KkBPHa4zZlLi036MOMDxd8qzb3sqPk4_DXC9HfvGuCFlYcs_cJffqGjRgd-zRV4ylRpqNmYP8zVeGsR-x7RFOqnaTFpuwk3ErpcSgzDTbVGidKSPCnBOxryjGBS8C6wEKz7wfUPzXiGoHNMQVpNIA3xF_QiQ'
  },
  {
    id: 'jabon-liquido-manos',
    name: 'Jabón Líquido para Manos Antibacterial',
    category: 'jabones',
    description: 'Jabón líquido antibacterial para manos, suave y efectivo',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'
  },
  {
    id: 'jabon-dado',
    name: 'Jabón Dado',
    category: 'jabones',
    description: 'Jabón en barra tradicional para múltiples usos',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'
  },
  {
    id: 'jabon-dado-poker',
    name: 'Jabón Dado Poker 250g',
    category: 'jabones',
    description: 'Jabón en barra presentación taza de 250 gramos',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'
  },
  {
    id: 'crema-lavaloza',
    name: 'Crema Lavaloza Yzuax 1000g',
    category: 'jabones',
    description: 'Crema lavaloza aroma limón, presentación de 1000g',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'
  },
  {
    id: 'limpia-vidrios-quimico',
    name: 'Limpia Vidrios Profesional',
    category: 'jabones',
    description: 'Limpiador de vidrios sin rayas ni manchas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWZ1ojFpcgKguS13-QrwkZ6s3uxg33yrZ_qxTGOKzlJYc79D04JpPPYNfqSnvrjPvKP2P2waR5fthLeceGttjaL4JP4dPqS15nED5UeFXAQjaODsfsUZGLnlF189E8n6s65XiI0uyLXZB1coaRWe1qyTjHQBZ0tbexNz6ujPVVIdYKs-SEOTgPAw03TsAPw6O51lLMN2CYW3pdlrXn2y482wYQYx232c8A2oFKl-vLkS5m5FlDVZSMfHtpg1pOPVKN0KGoMu1LyXU'
  },
  {
    id: 'silicona-madera',
    name: 'Silicona para Madera',
    category: 'jabones',
    description: 'Silicona especializada para limpieza y cuidado de madera',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'
  },

  // Esponjas
  {
    id: 'esponja-power-multiuso',
    name: 'Esponja Power Multiuso x2',
    category: 'esponjas',
    description: 'Esponjas multiuso marca Power, paquete de 2 unidades',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'esponjilla-power-brillo',
    name: 'Esponjilla Power de Brillo x12',
    category: 'esponjas',
    description: 'Esponjillas de brillo marca Power, paquete de 12 unidades',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'esponjilla-earth',
    name: 'Esponjilla Earth x12',
    category: 'esponjas',
    description: 'Esponjillas marca Earth, paquete de 12 unidades',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'esponjilla-james',
    name: 'Esponjilla James x12',
    category: 'esponjas',
    description: 'Esponjillas marca James, paquete de 12 unidades',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'sabra-super-7x10',
    name: 'Sabra Super Abrasiva 7x10cm',
    category: 'esponjas',
    description: 'Ideal para trabajo pesado, ollas quemadas y parrillas',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'sabra-super-10x14',
    name: 'Sabra Super Abrasiva 10x14cm',
    category: 'esponjas',
    description: 'Ideal para trabajo pesado, ollas quemadas y parrillas - tamaño grande',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'esponja-malla',
    name: 'Esponja de Malla Sencilla x12 pares',
    category: 'esponjas',
    description: 'Esponjas de malla, presentación de 12 pares',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'esponja-doble-uso',
    name: 'Esponja Doble Uso x24',
    category: 'esponjas',
    description: 'Esponjas de doble uso, paquete de 24 unidades',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },
  {
    id: 'esponja-brilla-ollas',
    name: 'Esponja Brilla Ollas',
    category: 'esponjas',
    description: 'Especial para dar brillo a ollas y utensilios de cocina',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400'
  },

  // Varios
  {
    id: 'guantes-domesticos-7',
    name: 'Guantes Domésticos Talla 7',
    category: 'varios',
    description: 'Guantes de látex para limpieza del hogar',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400'
  },
  {
    id: 'guantes-domesticos-7.5',
    name: 'Guantes Domésticos Talla 7½',
    category: 'varios',
    description: 'Guantes de látex para limpieza del hogar',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400'
  },
  {
    id: 'guantes-industriales',
    name: 'Guantes Industriales',
    category: 'varios',
    description: 'Guantes resistentes para trabajo pesado',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400'
  },
  {
    id: 'guantes-desechables',
    name: 'Guantes Desechables x100',
    category: 'varios',
    description: 'Guantes desechables especiales para restaurantes, caja de 100 unidades',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400'
  },
  {
    id: 'cinta-enmascarar',
    name: 'Cinta de Enmascarar Rioto 20mt',
    category: 'varios',
    description: 'Cinta de enmascarar marca Rioto, rollo de 20 metros',
    image: 'https://images.unsplash.com/photo-1625683496726-e6df5763c0e0?w=400'
  },
  {
    id: 'cinta-transparente',
    name: 'Cinta Transparente Delgada 12mm',
    category: 'varios',
    description: 'Rollo de cinta transparente delgada de 12mm',
    image: 'https://images.unsplash.com/photo-1625683496726-e6df5763c0e0?w=400'
  }
];
