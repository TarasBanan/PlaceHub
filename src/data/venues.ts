import { Venue } from '@/types/venue';

export const venues: Venue[] = [
  {
    id: '1', slug: 'loft-sever', title: 'Loft Север', category: 'Лофты', city: 'Москва', district: 'Савёловский',
    address: 'ул. Новодмитровская, 1', pricePerHour: 4000, capacity: 80, rating: 4.9,
    images: ['https://images.unsplash.com/photo-1511578314322-379afb476865'],
    description: 'Пространство для презентаций, вечеринок и камерных корпоративов с отдельной welcome-зоной.',
    amenities: ['Wi‑Fi', 'Проектор', 'Звук', 'Парковка'], rules: ['Без пиротехники', 'Тишина после 23:00'], tags: ['Популярное', 'Быстрое подтверждение'], isPopular: true
  },
  {
    id: '2', slug: 'studio-white', title: 'Studio White', category: 'Фотостудии', city: 'Москва', district: 'Басманный',
    address: 'ул. Бауманская, 8', pricePerHour: 2500, capacity: 20, rating: 4.8,
    images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36'],
    description: 'Светлая студия с циклорамой, постоянным светом и отдельной гримерной.',
    amenities: ['Гримерка', 'Свет', 'Кухня'], rules: ['Бережно к декору'], tags: ['Новинка'], isPopular: true
  },
  {
    id: '3', slug: 'workpoint-room', title: 'WorkPoint Room', category: 'Переговорные комнаты', city: 'Москва', district: 'Тверской',
    address: 'ул. Тверская, 15', pricePerHour: 1800, capacity: 12, rating: 4.7,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c'],
    description: 'Переговорная с экраном, маркерной стеной и кофе-зоной в центре города.',
    amenities: ['Экран', 'Wi‑Fi', 'Флипчарт'], rules: ['Без еды в зале'], tags: ['Быстрое подтверждение'], isPopular: false
  },
  {
    id: '4', slug: 'skyroom-hall', title: 'SkyRoom Hall', category: 'Конференц-залы', city: 'Москва', district: 'Пресненский',
    address: 'Пресненская наб., 10', pricePerHour: 6000, capacity: 120, rating: 4.9,
    images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3'],
    description: 'Панорамный зал для конференций и запусков продуктов с техподдержкой.',
    amenities: ['Сцена', 'Звук', 'Онлайн-трансляция'], rules: ['Монтаж за 2 часа до события'], tags: ['Популярное'], isPopular: true
  },
  {
    id: '5', slug: 'podcast-base', title: 'Podcast Base', category: 'Пространства для подкастов', city: 'Москва', district: 'Хамовники',
    address: 'ул. Льва Толстого, 16', pricePerHour: 3000, capacity: 6, rating: 4.8,
    images: ['https://images.unsplash.com/photo-1478737270239-2f02b77fc618'],
    description: 'Студия для записи видео- и аудиоподкастов с инженером на смене.',
    amenities: ['Микрофоны', 'Камеры', 'Звукоизоляция'], rules: ['Только по предварительной записи'], tags: ['Новинка'], isPopular: false
  },
  {
    id: '6', slug: 'popup-corner', title: 'PopUp Corner', category: 'Поп-ап площадки', city: 'Санкт-Петербург', district: 'Центральный',
    address: 'Невский пр., 45', pricePerHour: 5000, capacity: 50, rating: 4.6,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8'],
    description: 'Шоурум в проходной локации для запусков локальных брендов и маркетов.',
    amenities: ['Витрины', 'Склад', 'Кассовая зона'], rules: ['Согласование брендинга заранее'], tags: ['Быстрое подтверждение'], isPopular: false
  }
];
