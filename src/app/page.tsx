import { Hero } from '@/components/sections/home/Hero';
import { Calculator } from '@/components/sections/home/Calculator';
import { VenueGrid } from '@/components/catalog/VenueGrid';
import { venues } from '@/data/venues';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-14">
        <div className="container-shell">
          <h2 className="mb-6 text-2xl font-semibold">Популярные площадки</h2>
          <VenueGrid items={venues} />
        </div>
      </section>
      <Calculator />
    </>
  );
}
