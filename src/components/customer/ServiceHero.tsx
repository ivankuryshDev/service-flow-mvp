import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { formatDuration } from '@/lib/formatters';
import type { Service, Provider } from '@/types/service';

interface ServiceHeroProps {
  service: Service;
  provider: Provider;
}

export function ServiceHero({ service, provider }: ServiceHeroProps) {
  return (
    <Card padding="none" className="overflow-hidden">
      {/* Back link */}
      <div className="border-b border-border-soft px-6 py-3">
        <Link
          href={`/results?category=${encodeURIComponent(service.category)}`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-sm"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to results
        </Link>
      </div>

      {/* Main hero content */}
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
        {/* Left: provider + service info */}
        <div className="flex flex-col gap-4">
          {/* Category + duration chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-pill bg-cream-100 px-3 py-1 text-xs font-medium text-ink-600">
              {service.category}
            </span>
            <span className="inline-flex items-center rounded-pill bg-cream-100 px-3 py-1 text-xs font-medium text-ink-600">
              {formatDuration(service.durationMinutes)}
            </span>
          </div>

          {/* Service name eyebrow + provider name heading */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{service.name}</p>
            <h1 className="mt-1 font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
              {provider.name}
            </h1>
          </div>

          {/* Rating + location */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
              </svg>
              <span className="font-medium text-ink-800">{provider.rating}</span>
              <span>({provider.reviewsCount} reviews)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
              </svg>
              {provider.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {provider.address}
            </span>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-ink-500">{provider.shortDescription}</p>
        </div>

        {/* Right: price */}
        <div className="shrink-0 sm:text-right">
          <p className="text-xs text-ink-400">Starting from</p>
          <p className="font-display text-3xl font-bold text-ink-900">€{service.priceFrom}</p>
        </div>
      </div>
    </Card>
  );
}
