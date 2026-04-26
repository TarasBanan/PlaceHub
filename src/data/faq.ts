export type FaqItem = {
  slug: string;
  question: { ru: string; en: string };
  answer: { ru: string; en: string };
};

export const faq: FaqItem[] = [
  { slug: 'how-to-book', question: { ru: 'Как забронировать площадку?', en: 'How do I book a venue?' }, answer: { ru: 'Выберите площадку в каталоге, заполните форму заявки и дождитесь подтверждения менеджера.', en: 'Choose a venue in the catalog, submit the booking form, and wait for manager confirmation.' } },
  { slug: 'cancel-booking', question: { ru: 'Можно ли отменить бронирование?', en: 'Can I cancel booking?' }, answer: { ru: 'Да, отмена возможна по правилам площадки и срокам, указанным в карточке.', en: 'Yes, cancellation is possible according to venue rules and deadlines shown on the venue page.' } },
  { slug: 'price-factors', question: { ru: 'От чего зависит стоимость аренды?', en: 'What affects the rental price?' }, answer: { ru: 'На цену влияют дата, длительность, количество гостей и дополнительные услуги.', en: 'Price depends on date, duration, number of guests and selected add-on services.' } },
  { slug: 'pre-visit', question: { ru: 'Можно ли посмотреть площадку заранее?', en: 'Can I visit a venue before booking?' }, answer: { ru: 'Да, по согласованию с владельцем и при наличии свободного слота.', en: 'Yes, by agreement with the owner and when a preview slot is available.' } },
  { slug: 'equipment', question: { ru: 'Есть ли площадки с оборудованием?', en: 'Are venues with equipment available?' }, answer: { ru: 'Да, используйте фильтры каталога: проектор, звук, свет и другие опции.', en: 'Yes, use catalog filters for projector, sound, lighting and other options.' } },
  { slug: 'catering', question: { ru: 'Можно ли заказать кейтеринг?', en: 'Can I order catering?' }, answer: { ru: 'Да, кейтеринг добавляется как дополнительная услуга в заявке.', en: 'Yes, catering can be added as an additional service in your request.' } },
  { slug: 'add-venue', question: { ru: 'Как добавить свою площадку?', en: 'How can I add my venue?' }, answer: { ru: 'Заполните форму на странице «Для владельцев», после проверки мы опубликуем карточку.', en: 'Submit the form on the For Owners page; after verification we publish your listing.' } },
  { slug: 'who-confirms', question: { ru: 'Кто подтверждает заявку?', en: 'Who confirms requests?' }, answer: { ru: 'Заявки подтверждают менеджер PlaceHub и владелец площадки.', en: 'Requests are confirmed by a PlaceHub manager and the venue owner.' } },
  { slug: 'online-payment', question: { ru: 'Можно ли оплатить онлайн?', en: 'Is online payment available?' }, answer: { ru: 'Да, для части площадок доступна онлайн-оплата после подтверждения.', en: 'Yes, online payment is available for selected venues after confirmation.' } },
  { slug: 'event-day-support', question: { ru: 'Есть ли поддержка в день мероприятия?', en: 'Is there event-day support?' }, answer: { ru: 'Да, поддержка доступна в чате и по телефону в рабочие часы.', en: 'Yes, support is available via chat and phone during working hours.' } }
];
