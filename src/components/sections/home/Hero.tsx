import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-mysteria py-20 text-white">
      <div className="container-shell space-y-6">
        <h1 className="max-w-3xl text-4xl font-semibold md:text-6xl">Найдите идеальное пространство для работы, съёмки или мероприятия</h1>
        <p className="max-w-2xl text-white/80">Бронируйте коворкинги, переговорные, фотостудии, лофты и event-площадки в одном сервисе.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/catalog" className="rounded-sm bg-cream px-4 py-2 text-charcoal">Найти площадку</Link>
          <Link href="/for-owners" className="rounded-sm border border-white/30 px-4 py-2">Добавить свою площадку</Link>
        </div>
      </div>
    </section>
  );
}
