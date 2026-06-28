import { Container } from '@/components/layout/Container';

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 4l3 3-3 3" />
      <path d="M20 7H8a4 4 0 0 0-4 4" />
      <path d="M7 20l-3-3 3-3" />
      <path d="M4 17h12a4 4 0 0 0 4-4" />
    </svg>
  );
}

const benefits = [
  {
    icon: <BoltIcon />,
    title: 'Instant confirmation',
    text: 'See live openings and lock in a time on the spot — no phone tag, no waiting.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Trusted local pros',
    text: 'Every provider is reviewed and rated by customers near you. No guesswork.',
  },
  {
    icon: <SwapIcon />,
    title: 'Free to change',
    text: 'Plans shift. Reschedule or cancel free up to 24 hours before your booking.',
  },
];

export function HomeBenefits() {
  return (
    <section className="bg-cream-100 py-16">
      <Container>
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-yellow-700">
            <span
              className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-400"
              aria-hidden="true"
            />
            Why ServiceFlow
          </div>
          <h2 className="font-display text-3xl font-bold text-ink-900">
            Booking that feels like sunshine
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                {b.icon}
              </div>
              <h3 className="mb-2 font-semibold text-ink-900">{b.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
