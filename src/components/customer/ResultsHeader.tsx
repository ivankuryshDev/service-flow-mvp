import Link from 'next/link';
import { formatDateLabel } from '@/lib/dates';

interface ResultsHeaderProps {
  count: number;
  category?: string;
  location?: string;
  date?: string;
}

export function ResultsHeader({ count, category, location, date }: ResultsHeaderProps) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (location) params.set('location', location);
  if (date) params.set('date', date);
  const backHref = params.toString() ? `/?${params.toString()}` : '/';

  const summaryParts: string[] = [
    category ?? 'All services',
    location ? `in ${location}` : null,
    date ? formatDateLabel(date) : null,
  ].filter((p): p is string => p !== null);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
        {count === 0 ? 'No results' : `${count} result${count === 1 ? '' : 's'}`}
      </h1>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-500">
        <span>{summaryParts.join(' · ')}</span>
        <span aria-hidden="true">·</span>
        <Link
          href={backHref}
          className="font-medium text-yellow-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-sm"
        >
          Modify search
        </Link>
      </div>
    </div>
  );
}
