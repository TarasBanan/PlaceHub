import { Locale } from '@/lib/i18n';

type LocalizedText = {
  ru: string;
  en: string;
};

export function localizeText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export const homeContent = {
  popularTitle: { ru: 'Популярные площадки этой недели', en: 'Popular venues this week' },
  aboutTitle: { ru: 'PlaceHub — быстрый подбор площадок без долгих переписок', en: 'PlaceHub — quick venue matching without endless messaging' },
  aboutText: {
    ru: 'Сервис помогает компаниям и частным клиентам находить лофты, студии, переговорные и event-пространства с прозрачными условиями аренды. В каталоге — реальные фото, фильтры по задачам и поддержка менеджера до подтверждения брони.',
    en: 'The service helps teams and private clients find lofts, studios, meeting rooms and event spaces with transparent rental terms. The catalog includes real photos, task-based filters and manager support until booking is confirmed.'
  },
  howItWorks: {
    ru: [
      { title: 'Бриф за 1 минуту', text: 'Укажите формат события, дату и количество гостей.' },
      { title: 'Умный отбор', text: 'Система покажет только релевантные варианты по бюджету и задачам.' },
      { title: 'Проверка деталей', text: 'Сравните условия аренды, правила и комплектацию площадок.' },
      { title: 'Подтверждение', text: 'Отправьте заявку и получите ответ менеджера с финальными условиями.' }
    ],
    en: [
      { title: '1-minute brief', text: 'Set event format, date and guest count.' },
      { title: 'Smart shortlist', text: 'The system returns relevant options by budget and goals.' },
      { title: 'Detail check', text: 'Compare rental rules, conditions and included options.' },
      { title: 'Confirmation', text: 'Submit request and get final terms from a manager.' }
    ]
  }
};

export const catalogContent = {
  title: { ru: 'Каталог площадок', en: 'Venue catalog' },
  subtitle: {
    ru: 'Фильтруйте пространства по формату мероприятия, вместимости и бюджету. Результаты обновляются без перезагрузки страницы.',
    en: 'Filter spaces by event format, capacity and budget. Results update without page reload.'
  }
};

export const pricingContent: { addons: Array<[string, string]> } = {
  addons: [
    ['Проектор / Projector', 'от 1 500 ₽'],
    ['Звуковое оборудование / Sound system', 'от 3 000 ₽'],
    ['Световое оборудование / Lighting', 'от 4 000 ₽'],
    ['Кейтеринг / Catering', 'от 1 200 ₽ / гость'],
    ['Администратор / Administrator', 'от 2 500 ₽ / час'],
    ['Уборка после мероприятия / Post-event cleaning', 'от 4 000 ₽']
  ]
};

export const aboutContent = {
  title: { ru: 'О сервисе PlaceHub', en: 'About PlaceHub' },
  mission: {
    ru: 'Мы делаем бронирование городских пространств быстрым и прозрачным: от первого фильтра до подтверждённой заявки в одном интерфейсе.',
    en: 'We make city-space booking fast and transparent: from first filter to confirmed request in one interface.'
  },
  values: {
    ru: [
      { title: 'Прозрачность', text: 'Показываем реальные фото, условия аренды и понятную структуру заявки.' },
      { title: 'Скорость', text: 'Среднее время первого ответа по заявке — до 15 минут в рабочие часы.' },
      { title: 'Поддержка', text: 'Менеджер помогает с подбором площадки и координацией деталей.' }
    ],
    en: [
      { title: 'Transparency', text: 'Real photos, clear rental terms and understandable request flow.' },
      { title: 'Speed', text: 'Average first response time is up to 15 minutes during business hours.' },
      { title: 'Support', text: 'A manager helps with venue selection and event coordination.' }
    ]
  },
  timeline: {
    ru: [
      '2019 — запуск пилотного каталога в Москве.',
      '2021 — подключены корпоративные тарифы для владельцев.',
      '2023 — расширение до 12 городов и добавление подборок по сценариям.',
      '2026 — двуязычный интерфейс и улучшенный self-service для клиентов.'
    ],
    en: [
      '2019 — pilot catalog launched in Moscow.',
      '2021 — corporate plans for venue owners introduced.',
      '2023 — expanded to 12 cities with scenario-based collections.',
      '2026 — bilingual interface and improved client self-service.'
    ]
  },
  stats: {
    ru: [
      '450+ площадок в расширенном каталоге',
      '12 городов присутствия',
      '18 000+ заявок на бронирование',
      '4.8 средний рейтинг площадок',
      '300+ владельцев-партнёров',
      'Поддержка 7 дней в неделю'
    ],
    en: [
      '450+ venues in the expanded catalog',
      '12 cities covered',
      '18,000+ booking requests',
      '4.8 average venue rating',
      '300+ venue-owner partners',
      'Support 7 days a week'
    ]
  }
};

export const contactsContent = {
  title: { ru: 'Контакты', en: 'Contacts' },
  description: {
    ru: 'Поможем подобрать площадку под презентацию, лекцию, съёмку или корпоратив. Отвечаем ежедневно с 09:00 до 21:00.',
    en: 'We help select venues for presentations, lectures, shoots and corporate events. Daily support from 09:00 to 21:00.'
  },
  details: {
    ru: ['Email: hello@placehub.ru', 'Телефон: +7 900 000-00-00', 'Telegram: @placehub_support', 'Адрес офиса: Москва, ул. Лесная, 7', 'График: ежедневно 09:00–21:00'],
    en: ['Email: hello@placehub.ru', 'Phone: +7 900 000-00-00', 'Telegram: @placehub_support', 'Office: Moscow, Lesnaya st. 7', 'Hours: daily 09:00–21:00']
  },
  socials: {
    ru: ['VK: vk.com/placehub', 'Telegram канал: t.me/placehub_ru'],
    en: ['VK: vk.com/placehub', 'Telegram channel: t.me/placehub_ru']
  }
};

export const ownersContent = {
  title: { ru: 'Для владельцев площадок', en: 'For venue owners' },
  lead: {
    ru: 'Подключайте объект к PlaceHub и получайте поток целевых заявок, управление загрузкой и статистику бронирований в одном кабинете.',
    en: 'Connect your venue to PlaceHub and get targeted requests, occupancy management and booking analytics in one dashboard.'
  },
  steps: {
    ru: [
      'Заполните форму и отправьте информацию о площадке.',
      'Команда верифицирует объект и подготовит карточку.',
      'Выберите тариф и опубликуйтесь в каталоге.',
      'Получайте заявки и управляйте расписанием онлайн.'
    ],
    en: [
      'Fill in the form and submit venue details.',
      'Our team verifies the venue and prepares the listing.',
      'Choose a plan and publish in the catalog.',
      'Receive requests and manage schedule online.'
    ]
  },
  requirements: {
    ru: ['Актуальные фото и честное описание площадки.', 'Понятные правила аренды и доступность календаря.', 'Оперативное подтверждение входящих заявок.'],
    en: ['Up-to-date photos and accurate description.', 'Clear rental rules and available calendar.', 'Fast confirmation of incoming requests.']
  }
};
