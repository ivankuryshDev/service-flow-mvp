import Link from 'next/link';

interface AvailabilityEmptyStateProps {
  activeStatus: string;
}

export function AvailabilityEmptyState({ activeStatus }: AvailabilityEmptyStateProps) {
  const label = activeStatus === 'all' ? '' : `${activeStatus} `;

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <svg
        className="mb-4 h-12 w-12 text-ink-200"
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
      <p className="text-sm font-medium text-ink-500">
        No {label}slots found.
      </p>
      {activeStatus !== 'all' && (
        <Link
          href="/business/availability"
          className="mt-4 text-sm font-medium text-yellow-700 underline underline-offset-2 hover:text-yellow-800"
        >
          Clear filter
        </Link>
      )}
    </div>
  );
}
