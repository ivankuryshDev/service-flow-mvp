import { cn } from '@/lib/cn';

interface Counts {
  all: number;
  available: number;
  booked: number;
  blocked: number;
  unavailable: number;
}

interface AvailabilityFiltersProps {
  activeStatus: string;
  counts: Counts;
  onStatusChange: (status: string) => void;
}

const tabs = [
  { key: 'all',         label: 'All' },
  { key: 'available',   label: 'Available' },
  { key: 'booked',      label: 'Booked' },
  { key: 'blocked',     label: 'Blocked' },
  { key: 'unavailable', label: 'Unavailable' },
] as const;

export function AvailabilityFilters({ activeStatus, counts, onStatusChange }: AvailabilityFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter slots by status">
      {tabs.map((tab) => {
        const isActive = activeStatus === tab.key;
        const count = counts[tab.key];
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onStatusChange(tab.key)}
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2',
              isActive
                ? 'bg-ink-900 text-white'
                : 'border border-border-soft bg-white text-ink-600 hover:bg-cream-50',
            )}
          >
            {tab.label}
            {count > 0 && (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-xs tabular-nums',
                  isActive ? 'bg-white/20 text-white' : 'bg-cream-100 text-ink-500',
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
