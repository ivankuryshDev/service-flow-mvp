import type { Service, Provider } from '@/types/service';
import type { AvailabilitySlot } from '@/types/availability';
import { ResultCard } from './ResultCard';
import { EmptyResults } from './EmptyResults';

export interface ResultItem {
  service: Service;
  provider: Provider;
  nextSlot: AvailabilitySlot | null;
  nextSlotLabel: string | null;
}

interface ResultsListProps {
  results: ResultItem[];
  category?: string;
  location?: string;
  hasActiveFilters?: boolean;
  clearHref?: string;
}

export function ResultsList({
  results,
  category,
  location,
  hasActiveFilters,
  clearHref,
}: ResultsListProps) {
  if (results.length === 0) {
    return (
      <EmptyResults
        category={category}
        location={location}
        hasActiveFilters={hasActiveFilters}
        clearHref={clearHref}
      />
    );
  }
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {results.map((item, i) => (
        <li key={`${item.provider.id}-${item.service.id}`}>
          <ResultCard
            service={item.service}
            provider={item.provider}
            nextSlotLabel={item.nextSlotLabel}
            isRecommended={i === 0}
          />
        </li>
      ))}
    </ul>
  );
}
