export type CollectionItem = {
  slug: string;
  title: string;
  description: string;
  venueCount: number;
  averagePrice: string;
};

export const collections: CollectionItem[] = [
  { slug: 'business-meetings', title: 'Площадки для бизнес-встреч', description: 'Переговорные и конференц-залы для команд и советов директоров.', venueCount: 32, averagePrice: 'от 2 200 ₽/час' },
  { slug: 'photo-natural-light', title: 'Фотостудии с естественным светом', description: 'Студии с большими окнами, циклорамой и гримерками.', venueCount: 24, averagePrice: 'от 2 500 ₽/час' },
  { slug: 'lofts-up-to-50', title: 'Лофты для вечеринок до 50 гостей', description: 'Камерные пространства для дней рождения и вечеринок.', venueCount: 19, averagePrice: 'от 4 500 ₽/час' },
  { slug: 'lectures-workshops', title: 'Залы для лекций и мастер-классов', description: 'Аудитории с рассадкой и проектором для образовательных событий.', venueCount: 28, averagePrice: 'от 3 800 ₽/час' },
  { slug: 'product-launch', title: 'Площадки для презентаций продукта', description: 'Площадки с экраном, звуком и отдельной welcome-зоной.', venueCount: 17, averagePrice: 'от 6 000 ₽/час' },
  { slug: 'corporate-events', title: 'Пространства для корпоративов', description: 'Лофты и event-залы под командные мероприятия.', venueCount: 22, averagePrice: 'от 7 500 ₽/час' },
  { slug: 'podcast-studios', title: 'Студии для записи подкастов', description: 'Готовые сетапы для аудио- и видеоподкастов.', venueCount: 14, averagePrice: 'от 3 000 ₽/час' },
  { slug: 'local-brand-popups', title: 'Пространства для локальных брендов', description: 'Шоурумы и pop-up площадки в проходных локациях.', venueCount: 16, averagePrice: 'от 5 000 ₽/час' }
];
