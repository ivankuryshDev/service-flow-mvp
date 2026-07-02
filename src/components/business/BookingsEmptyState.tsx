interface BookingsEmptyStateProps {
  activeStatus: string;
  hasSearch?: boolean;
  onClearFilter?: () => void;
}

export function BookingsEmptyState({ activeStatus, hasSearch, onClearFilter }: BookingsEmptyStateProps) {
  const isFiltered = activeStatus !== 'all' || hasSearch;
  const label = activeStatus === 'all' ? '' : `${activeStatus} `;

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-100 text-ink-300">
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
        </svg>
      </div>
      <div>
        <p className="font-display text-lg font-semibold text-ink-800">
          {isFiltered ? 'No bookings match' : `No ${label}bookings found.`}
        </p>
        <p className="mt-1 text-sm text-ink-400">
          {isFiltered
            ? 'Try a different status, search term, or clear your filters.'
            : 'Bookings will appear here once customers start booking.'}
        </p>
      </div>
      {isFiltered && onClearFilter && (
        <button
          type="button"
          onClick={onClearFilter}
          className="text-sm font-medium text-yellow-600 hover:text-yellow-700 focus-visible:outline-none focus-visible:underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
