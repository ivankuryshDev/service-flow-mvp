import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function BusinessCta() {
  return (
    <section className="border-t border-border-soft py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-cream-100 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="mb-2 font-display text-2xl font-bold text-ink-900">
              Run a local service?
            </h2>
            <p className="max-w-md text-ink-500">
              List your openings on ServiceFlow and fill your calendar with customers nearby.
            </p>
          </div>
          <Link
            href="/business"
            className="inline-flex shrink-0 items-center rounded-pill border border-border bg-white px-6 py-3 font-medium text-ink-800 transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          >
            Go to business area
          </Link>
        </div>
      </Container>
    </section>
  );
}
