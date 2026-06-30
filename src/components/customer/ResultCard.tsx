import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { formatDuration } from '@/lib/formatters';
import type { Service, Provider } from '@/types/service';

interface ResultCardProps {
  service: Service;
  provider: Provider;
  nextSlotLabel: string | null;
  isRecommended?: boolean;
}

export function ResultCard({ service, provider, nextSlotLabel, isRecommended }: ResultCardProps) {
  return (
    <Card padding="none" className="flex flex-col overflow-hidden transition-shadow duration-150 hover:shadow-md">
      <div className="flex flex-1 flex-col gap-4 p-6">
        {isRecommended && (
          <span className="self-start inline-flex items-center rounded-pill bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
            Recommended
          </span>
        )}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{service.name}</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 leading-snug">{provider.name}</h3>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-500">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {formatDuration(service.durationMinutes)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink-500 line-clamp-2">{provider.shortDescription}</p>
      </div>
      <div className="flex items-center justify-between border-t border-border-soft px-6 py-4">
        <div>
          <p className="text-xs text-ink-400">Starting from</p>
          <p className="text-lg font-semibold text-ink-900">€{service.priceFrom}</p>
          {nextSlotLabel && (
            <p className="mt-0.5 text-xs font-medium text-success-700">{nextSlotLabel}</p>
          )}
        </div>
        <Link
          href={`/services/${service.id}?providerId=${provider.id}`}
          className="inline-flex items-center rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
        >
          View availability
        </Link>
      </div>
    </Card>
  );
}
