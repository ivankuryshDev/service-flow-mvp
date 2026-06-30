import Link from 'next/link';
import { cn } from '@/lib/cn';

interface Counts {
  all: number;
  new: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

interface BookingsFiltersProps {
  activeStatus: string;
  counts: Counts;
}

const tabs = [
  { key: 'all',       label: 'All',       href: '/business/bookings' },
  { key: 'new',       label: 'New',       href: '/business/bookings?status=new' },
  { key: 'confirmed', label: 'Confirmed', href: '/business/bookings?status=confirmed' },
  { key: 'completed', label: 'Completed', href: '/business/bookings?status=completed' },
  { key: 'cancelled', label: 'Cancelled', href: '/business/bookings?status=cancelled' },
] as const;

export function BookingsFilters({ activeStatus, counts }: BookingsFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter bookings by status">
      {tabs.map((tab) => {
        const isActive = activeStatus === tab.key;
        const count = counts[tab.key];
        return (
          <Link
            key={tab.key}
            href={tab.href}
            role="tab"
            aria-current={isActive ? 'page' : undefined}
            aria-selected={isActive}
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
          </Link>
        );
      })}
    </div>
  );
}
