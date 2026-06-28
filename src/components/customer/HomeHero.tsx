import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';

interface HomeHeroProps {
  children: ReactNode;
}

export function HomeHero({ children }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-16 sm:py-24">
      {/* Decorative yellow glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-300/25 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-yellow-700">
          <span
            className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-400"
            aria-hidden="true"
          />
          Real-time openings near you
        </div>

        {/* Heading */}
        <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
          Book local services
          <br />
          <em className="not-italic text-yellow-500">in seconds.</em>
        </h1>

        {/* Tagline */}
        <p className="mb-8 max-w-lg text-lg text-ink-600">
          Find a trusted local pro, see live availability, and lock in a time — all in one place.
        </p>

        {/* Search panel */}
        {children}

        {/* Trust line */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <span className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5 stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="h-4 w-4 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.18 1.18-6.86-5-4.87 7.1-1.01z" />
              </svg>
            ))}
          </span>
          <strong className="text-ink-800">4.9</strong>
          <span>average from</span>
          <strong className="text-ink-800">2,400+</strong>
          <span>bookings</span>
        </div>
      </Container>
    </section>
  );
}