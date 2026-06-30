import Link from 'next/link';

interface AvailabilityOverviewProps {
  availableCount: number;
  bookedCount: number;
}

export function AvailabilityOverview({ availableCount, bookedCount }: AvailabilityOverviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-cream-100 p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-yellow-700">Availability</p>
        <p className="mt-2 font-display text-2xl font-bold text-ink-900">
          {availableCount} open slot{availableCount !== 1 ? 's' : ''} upcoming
        </p>

        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-lg bg-white/70 px-4 py-2.5">
            <span className="text-sm text-ink-600">Available</span>
            <span className="font-mono text-sm font-semibold text-success-700">{availableCount}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/70 px-4 py-2.5">
            <span className="text-sm text-ink-600">Booked</span>
            <span className="font-mono text-sm font-semibold text-ink-700">{bookedCount}</span>
          </div>
        </div>

        <Link
          href="/business/availability"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-700 hover:text-yellow-600 focus-visible:outline-none focus-visible:underline"
        >
          Manage availability
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Reminder card */}
      <div className="rounded-xl border border-border-soft bg-white p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Tip</p>
        <p className="mt-1 text-sm font-medium text-ink-800">Keep slots up to date</p>
        <p className="mt-1 text-xs leading-relaxed text-ink-500">
          Customers can only book available slots. Add or block slots to keep your schedule accurate.
        </p>
        <Link
          href="/business/availability"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-yellow-600 hover:text-yellow-700 focus-visible:outline-none focus-visible:underline"
        >
          Go to availability →
        </Link>
      </div>
    </div>
  );
}
