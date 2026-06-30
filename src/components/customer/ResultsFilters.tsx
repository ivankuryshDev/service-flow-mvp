'use client';
import { useRef } from 'react';

interface ResultsFiltersProps {
  category?: string;
  location?: string;
  date?: string;
  sort?: string;
}

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'top-rated', label: 'Top rated' },
  { value: 'price-asc', label: 'Price: low to high' },
] as const;

export function ResultsFilters({ category, location, date, sort }: ResultsFiltersProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} method="GET" action="/results" className="flex items-center gap-2.5">
      {category && <input type="hidden" name="category" value={category} />}
      {location && <input type="hidden" name="location" value={location} />}
      {date && <input type="hidden" name="date" value={date} />}
      <label htmlFor="sort" className="shrink-0 text-sm text-ink-500">
        Sort
      </label>
      <select
        id="sort"
        name="sort"
        defaultValue={sort ?? 'recommended'}
        onChange={() => formRef.current?.requestSubmit()}
        className="rounded-md border border-border-soft bg-white px-3 py-2 text-sm text-ink-800 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/35"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </form>
  );
}
