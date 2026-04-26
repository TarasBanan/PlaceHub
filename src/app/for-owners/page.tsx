import { ownerPlans } from '@/data/ownerPlans';

export default function ForOwnersPage() {
  return (
    <section className="py-10">
      <div className="container-shell">
        <h1 className="mb-6 text-3xl font-semibold">Для владельцев</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {ownerPlans.map((plan) => (
            <article key={plan.name} className="rounded-lg border border-parchment p-4">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="my-2">{plan.price}</p>
              <ul className="list-disc pl-5 text-sm text-stone-600">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
