interface AvailabilityHeaderProps {
  businessName: string;
  totalCount: number;
}

export function AvailabilityHeader({ businessName, totalCount }: AvailabilityHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Availability</h1>
        <p className="mt-1 text-sm text-ink-500">
          {businessName} · {totalCount} {totalCount === 1 ? 'slot' : 'slots'} total
        </p>
      </div>
      <button
        disabled
        aria-disabled="true"
        className="inline-flex shrink-0 items-center gap-2 rounded-pill border border-border bg-white px-5 py-2.5 text-sm font-medium text-ink-300 cursor-not-allowed"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add time slot
        <span className="text-xs text-ink-200">· Coming soon</span>
      </button>
    </div>
  );
}
