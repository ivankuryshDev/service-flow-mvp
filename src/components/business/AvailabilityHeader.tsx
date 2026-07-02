interface AvailabilityHeaderProps {
  businessName: string;
  totalCount: number;
  onAddSlot: () => void;
}

export function AvailabilityHeader({ businessName, totalCount, onAddSlot }: AvailabilityHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Availability</h1>
        <p className="mt-1 text-sm text-ink-500">
          {businessName} · {totalCount} {totalCount === 1 ? 'slot' : 'slots'} total
        </p>
      </div>
      <button
        type="button"
        onClick={onAddSlot}
        className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add time slot
      </button>
    </div>
  );
}
