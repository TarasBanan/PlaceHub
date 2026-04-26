import { Venue } from '@/types/venue';

export const venues: Venue[] = [
  {
    id: '1', slug: 'loft-sever', title: 'Loft Север', category: 'Лофты', city: 'Москва', district: 'Савёловский',
    address: 'ул. Новодмитровская, 1', pricePerHour: 4000, capacity: 80, rating: 4.9,
    images: ['https://images.unsplash.com/photo-1511578314322-379afb476865'],
    description: 'Пространство для презентаций и камерных мероприятий.',
    amenities: ['Wi‑Fi', 'Проектор', 'Звук'], rules: ['Без пиротехники', 'Тишина после 23:00'], tags: ['Популярное', 'Быстрое подтверждение'], isPopular: true
  },
  {
    id: '2', slug: 'studio-white', title: 'Studio White', category: 'Фотостудии', city: 'Москва', district: 'Басманный',
    address: 'ул. Бауманская, 8', pricePerHour: 2500, capacity: 20, rating: 4.8,
    images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36'],
    description: 'Светлая студия с циклорамой и мебелью.',
    amenities: ['Гримерка', 'Свет'], rules: ['Бережно к декору'], tags: ['Новинка'], isPopular: true
  },
  {
    id: '3', slug: 'workpoint-room', title: 'WorkPoint Room', category: 'Переговорные комнаты', city: 'Москва', district: 'Тверской',
    address: 'ул. Тверская, 15', pricePerHour: 1800, capacity: 12, rating: 4.7,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c'],
    description: 'Переговорная с экраном и кофе-зоной.',
    amenities: ['Экран', 'Wi‑Fi'], rules: ['Без еды в зале'], tags: ['Быстрое подтверждение'], isPopular: false
  }
];
