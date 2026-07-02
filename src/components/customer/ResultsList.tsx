import type { ReactNode } from 'react';
import type { Service, Provider } from '@/types/service';
import type { AvailabilitySlot } from '@/types/availability';
import { ResultCard } from './ResultCard';
import { EmptyResults } from './EmptyResults';

export interface ResultItem {
  service: Service;
  provider: Provider;
  nextSlot: AvailabilitySlot | null;
  nextSlotLabel: string | null;
  openTodayCount: number;
  openTodaySlotTimes: string[];
}

interface ResultsListProps {
  results: ResultItem[];
  category?: string;
  location?: string;
  hasActiveFilters?: boolean;
  clearHref?: string;
  sortControl: ReactNode;
}

export function ResultsList({
  results,
  category,
  location,
  hasActiveFilters,
  clearHref,
  sortControl,
}: ResultsListProps) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
          {results.length} service{results.length === 1 ? '' : 's'} available
        </p>
        {sortControl}
      </div>

      {results.length === 0 ? (
        <EmptyResults
          category={category}
          location={location}
          hasActiveFilters={hasActiveFilters}
          clearHref={clearHref}
        />
      ) : (
        <ul className="flex flex-col gap-4" role="list">
          {results.map((item, i) => (
            <li key={`${item.provider.id}-${item.service.id}`}>
              <ResultCard
                service={item.service}
                provider={item.provider}
                nextSlotLabel={item.nextSlotLabel}
                openTodayCount={item.openTodayCount}
                openTodaySlotTimes={item.openTodaySlotTimes}
                isRecommended={i === 0}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
