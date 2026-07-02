import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { formatDuration } from '@/lib/formatters';
import type { Service, Provider, ServiceCategory } from '@/types/service';

interface ResultCardProps {
  service: Service;
  provider: Provider;
  nextSlotLabel: string | null;
  openTodayCount: number;
  openTodaySlotTimes: string[];
  isRecommended?: boolean;
}

const FALLBACK_THUMBNAIL_GRADIENT = 'from-ink-500 to-ink-300';

const THUMBNAIL_GRADIENTS: Partial<Record<ServiceCategory, string>> = {
  'Laptop repair': 'from-ink-700 to-ink-500',
  'Phone repair': 'from-yellow-600 to-yellow-400',
  Dental: 'from-success-500 to-success-100',
  Cleaning: 'from-yellow-400 to-yellow-100',
  Consultation: 'from-ink-500 to-ink-300',
  Beauty: 'from-yellow-500 to-yellow-200',
};

export function ResultCard({
  service,
  provider,
  nextSlotLabel,
  openTodayCount,
  openTodaySlotTimes,
  isRecommended,
}: ResultCardProps) {
  const thumbnailGradient = THUMBNAIL_GRADIENTS[service.category] ?? FALLBACK_THUMBNAIL_GRADIENT;

  const remainingToday = openTodayCount - openTodaySlotTimes.length;
  const hasTodaySlots = openTodaySlotTimes.length > 0;
  const availabilityChipLabel = hasTodaySlots ? 'Today' : 'Next available';
  const availabilityChips = hasTodaySlots ? openTodaySlotTimes : nextSlotLabel ? [nextSlotLabel] : [];

  return (
    <Link
      href={`/services/${service.id}?providerId=${provider.id}`}
      aria-label={`View availability for ${service.name} with ${provider.name}`}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
    >
      <Card
        padding="none"
        className={`overflow-hidden transition-all duration-150 group-hover:-translate-y-0.5 group-hover:shadow-lg ${
          isRecommended
            ? 'border-yellow-300 bg-gradient-to-b from-yellow-50 to-white'
            : 'border-border-soft'
        }`}
      >
        {isRecommended && (
          <div className="flex items-center gap-2 bg-yellow-400 px-6 py-2 text-xs font-bold uppercase tracking-wide text-ink-900">
            <svg className="h-3.5 w-3.5 fill-ink-900" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l2.2 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            Recommended for you
          </div>
        )}

        <div className="flex flex-col gap-5 p-5 sm:flex-row">
          {/* Thumbnail */}
          <div
            className={`relative h-32 w-full shrink-0 overflow-hidden rounded-lg bg-gradient-to-br sm:h-auto sm:w-40 ${thumbnailGradient}`}
          >
            {openTodayCount > 0 && (
              <span className="absolute bottom-3 left-3 rounded-pill bg-ink-900/80 px-3 py-1 text-xs font-semibold text-cream-50">
                {openTodayCount} open today
              </span>
            )}
          </div>

          {/* Main content */}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-sm font-bold text-ink-500">{provider.name}</p>
              <span className="flex shrink-0 items-center gap-1.5 text-sm">
                <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
                </svg>
                <span className="font-bold text-ink-800">{provider.rating}</span>
                <span className="text-ink-400">({provider.reviewsCount})</span>
              </span>
            </div>

            <h3 className="font-display text-lg font-bold leading-snug text-ink-900 sm:text-2xl">
              {service.name}
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-ink-400">
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

            {availabilityChips.length > 0 && (
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-success-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-success-500 ring-2 ring-success-100" />
                  {availabilityChipLabel}
                </span>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  {availabilityChips.map((time, i) => (
                    <span
                      key={`today-slot-${time}-${i}`}
                      className={
                        i === 0
                          ? 'rounded-pill border border-yellow-400 bg-yellow-50 px-2.5 py-1 font-mono text-xs font-bold text-yellow-700'
                          : 'rounded-pill border border-border-soft bg-white px-2.5 py-1 font-mono text-xs text-ink-700'
                      }
                    >
                      {time}
                    </span>
                  ))}
                  {hasTodaySlots && remainingToday > 0 && (
                    <span className="text-xs font-medium text-ink-400">+{remainingToday} more</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Price + CTA */}
          <div className="flex flex-row items-center justify-between gap-3 border-t border-border-soft pt-4 sm:shrink-0 sm:flex-col sm:items-end sm:justify-between sm:border-l sm:border-t-0 sm:pt-0 sm:pl-5">
            <div>
              <p className="text-xs text-ink-400">Starting from</p>
              <p className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                €{service.priceFrom}
              </p>
            </div>
            <span className="inline-flex items-center whitespace-nowrap rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors group-hover:bg-yellow-500">
              View availability
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
