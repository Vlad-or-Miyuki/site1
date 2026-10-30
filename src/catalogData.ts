export type StoreBrand = {
  id: string;
  name: string;
  phone: string;
  phoneHref?: string;
  category: string;
  image?: string;
  imageAlt?: string;
};

// Каталог хранится в проекте, чтобы список можно было спокойно дополнять до появления админки.
export const storeBrands: StoreBrand[] = [
  {
    id: 'dzheri',
    name: 'Диваны',
    phone: '+7 (***) ***-**-**',
    category: 'Мягкая мебель',
    image: '/images/brands/dzheri-sofa.png',
    imageAlt: 'Диван в интерьере мебельного салона',
  },
  {
    id: 'kitchens',
    name: 'Кухни',
    phone: '+7 (***) ***-**-**',
    category: 'Кухонная мебель',
  },
  {
    id: 'armchairs',
    name: 'Кресла',
    phone: '+7 (***) ***-**-**',
    category: 'Мягкая мебель',
  },
  {
    id: 'beds',
    name: 'Кровати и матрасы',
    phone: '+7 (***) ***-**-**',
    category: 'Мебель для спальни',
  },
  {
    id: 'wardrobes',
    name: 'Шкафы и хранение',
    phone: '+7 (***) ***-**-**',
    category: 'Системы хранения',
  },
  {
    id: 'tables-and-chairs',
    name: 'Столы и стулья',
    phone: '+7 (***) ***-**-**',
    category: 'Обеденная зона',
  },
  {
    id: 'dressers',
    name: 'Комоды и тумбы',
    phone: '+7 (***) ***-**-**',
    category: 'Мебель для хранения',
  },
  {
    id: 'interior-details',
    name: 'Свет и интерьер',
    phone: '+7 (***) ***-**-**',
    category: 'Предметы для дома',
  },
];
