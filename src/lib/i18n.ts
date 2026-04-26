export type Locale = 'ru' | 'en';

export const locales: Locale[] = ['ru', 'en'];

type TranslationDictionary = {
  nav: { home: string; catalog: string; collections: string; pricing: string; owners: string; about: string; contacts: string; faq: string; login: string };
  common: { details: string; inFavourites: string; toFavourites: string; language: string; faq: string; reviews: string; priceFrom: string; perHour: string };
  home: { reviewsTitle: string; faqTitle: string; openAnswer: string; openFaqPage: string };
  hero: { title: string; text: string; find: string; addVenue: string };
  calculator: { title: string; equipment: string; catering: string; cleaning: string; admin: string; total: string };
  pricing: { addonsTitle: string; customNote: string; title: string; description: string };
};

export const translations: Record<Locale, TranslationDictionary> = {
  ru: {
    nav: { home: 'Главная', catalog: 'Каталог', collections: 'Подборки', pricing: 'Услуги', owners: 'Для владельцев', about: 'О сервисе', contacts: 'Контакты', faq: 'FAQ', login: 'Войти' },
    common: { details: 'Подробнее', inFavourites: 'В избранном', toFavourites: 'В избранное', language: 'Язык', faq: 'FAQ', reviews: 'Отзывы клиентов', priceFrom: 'от', perHour: '/ час' },
    home: { reviewsTitle: 'Отзывы клиентов', faqTitle: 'FAQ', openAnswer: 'Открыть ответ', openFaqPage: 'Перейти на страницу FAQ' },
    hero: { title: 'Найдите идеальное пространство для работы, съёмки или мероприятия', text: 'Бронируйте коворкинги, переговорные, фотостудии, лофты и event-площадки в одном сервисе.', find: 'Найти площадку', addVenue: 'Добавить свою площадку' },
    calculator: { title: 'Калькулятор аренды', equipment: 'Техника', catering: 'Кейтеринг', cleaning: 'Уборка', admin: 'Администратор', total: 'Итого' },
    pricing: { addonsTitle: 'Дополнительные услуги', customNote: 'Стоимость аренды основной площадки рассчитывается индивидуально после уточнения формата события.', title: 'Дополнительные услуги', description: 'Мы не публикуем фиксированные базовые ставки: каждая площадка оценивается индивидуально по дате, загрузке и формату мероприятия.' }
  },
  en: {
    nav: { home: 'Home', catalog: 'Catalog', collections: 'Collections', pricing: 'Services', owners: 'For Owners', about: 'About', contacts: 'Contacts', faq: 'FAQ', login: 'Sign in' },
    common: { details: 'Details', inFavourites: 'In favourites', toFavourites: 'Add to favourites', language: 'Language', faq: 'FAQ', reviews: 'Client reviews', priceFrom: 'from', perHour: '/ hour' },
    home: { reviewsTitle: 'Client reviews', faqTitle: 'FAQ', openAnswer: 'Open answer', openFaqPage: 'Open FAQ page' },
    hero: { title: 'Find the right space for work, shooting, or events', text: 'Book coworkings, meeting rooms, photo studios, lofts, and event venues in one service.', find: 'Find venue', addVenue: 'Add your venue' },
    calculator: { title: 'Rental calculator', equipment: 'Equipment', catering: 'Catering', cleaning: 'Cleaning', admin: 'Administrator', total: 'Total' },
    pricing: { addonsTitle: 'Additional services', customNote: 'Base venue rental is quoted individually after event details are confirmed.', title: 'Additional services', description: 'We do not publish fixed base rates: each venue is priced individually depending on date, occupancy and event format.' }
  }
};
