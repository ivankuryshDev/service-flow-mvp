import Link from 'next/link';

interface EmptyResultsProps {
  category?: string;
  location?: string;
}

export function EmptyResults({ category, location }: EmptyResultsProps) {
  const hasFilters = category || location;

  return (
    <div className="flex flex-col items-center gap-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cream-100 text-ink-300">
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-xl font-semibold text-ink-900">No providers found</h2>
        <p className="max-w-sm text-sm leading-relaxed text-ink-500">
          {hasFilters
            ? `We couldn't find any providers${category ? ` for "${category}"` : ''}${location ? ` in ${location}` : ''}. Try adjusting your search.`
            : 'Try searching for a service category or location to find providers near you.'}
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center rounded-pill bg-yellow-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
      >
        Back to search
      </Link>
    </div>
  );
}
