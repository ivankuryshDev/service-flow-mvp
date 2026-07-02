import Link from 'next/link';

interface AvailabilityEmptyStateProps {
  activeStatus: string;
}

export function AvailabilityEmptyState({ activeStatus }: AvailabilityEmptyStateProps) {
  const label = activeStatus === 'all' ? '' : `${activeStatus} `;

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-100 text-ink-300">
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
          />
        </svg>
      </div>
      <div>
        <p className="font-display text-lg font-semibold text-ink-800">
          No {label}slots found.
        </p>
        <p className="mt-1 text-sm text-ink-400">
          {activeStatus === 'all'
            ? 'Slots will appear here once availability is added.'
            : 'Try a different filter to see other slots.'}
        </p>
      </div>
      {activeStatus !== 'all' && (
        <Link
          href="/business/availability"
          className="text-sm font-medium text-yellow-600 hover:text-yellow-700 focus-visible:outline-none focus-visible:underline"
        >
          Clear filter
        </Link>
      )}
    </div>
  );
}
