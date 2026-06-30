import Link from 'next/link';

export function QuickActions() {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink-400">Quick actions</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/business/bookings"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
          View all bookings
        </Link>
        <Link
          href="/business/availability"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3.5 text-sm font-semibold text-ink-800 shadow-sm transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          Manage availability
        </Link>
      </div>
    </div>
  );
}
