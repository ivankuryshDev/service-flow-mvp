import Link from 'next/link';
import { formatDateLabel } from '@/lib/dates';

interface DashboardHeaderProps {
  businessName: string;
  today: string;
}

export function DashboardHeader({ businessName, today }: DashboardHeaderProps) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
          {formatDateLabel(today)}
        </p>
        <h1 className="mt-1 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
          {greeting}, {businessName}
        </h1>
      </div>
      <Link
        href="/business/availability"
        className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add availability
      </Link>
    </div>
  );
}
