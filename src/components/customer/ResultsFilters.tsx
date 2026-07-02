'use client';

import { useRef } from 'react';

const SERVICE_CATEGORIES = [
  'Laptop repair',
  'Phone repair',
  'Dental',
  'Cleaning',
  'Consultation',
  'Beauty',
] as const;

const SELECT_CLASS =
  'w-full rounded-md border border-border-soft bg-white px-3 py-2 text-sm text-ink-800 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/35';

interface ResultsFiltersProps {
  category?: string;
  location?: string;
  date?: string;
  sort?: string;
  price?: string;
  rating?: string;
  avail?: string;
  isActive: boolean;
  clearHref: string;
}

function FilterSelect({
  id,
  name,
  label,
  defaultValue,
  onChange,
  children,
}: {
  id: string;
  name: string;
  label: string;
  defaultValue: string;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-ink-500">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className={SELECT_CLASS}
      >
        {children}
      </select>
    </div>
  );
}

export function ResultsFilters({
  category,
  location,
  date,
  sort,
  price,
  rating,
  avail,
  isActive,
  clearHref,
}: ResultsFiltersProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const submit = () => formRef.current?.requestSubmit();

  return (
    <div className="rounded-xl border border-border-soft bg-white p-5 shadow-sm">
      {/* Sidebar header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink-900">Filters</h2>
        {isActive && (
          <a
            href={clearHref}
            className="text-xs font-medium text-yellow-700 hover:text-yellow-800 focus-visible:outline-none focus-visible:underline"
          >
            Clear all
          </a>
        )}
      </div>

      <form ref={formRef} method="GET" action="/results" className="flex flex-col gap-5">
        {location && <input type="hidden" name="location" value={location} />}
        {date && <input type="hidden" name="date" value={date} />}

        <FilterSelect
          id="category"
          name="category"
          label="Category"
          defaultValue={category ?? ''}
          onChange={submit}
        >
          <option value="">All categories</option>
          {SERVICE_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </FilterSelect>

        <FilterSelect
          id="price"
          name="price"
          label="Price"
          defaultValue={price ?? 'any'}
          onChange={submit}
        >
          <option value="any">Any price</option>
          <option value="under50">Under €50</option>
          <option value="50-100">€50–€100</option>
          <option value="100plus">€100+</option>
        </FilterSelect>

        <FilterSelect
          id="rating"
          name="rating"
          label="Rating"
          defaultValue={rating ?? 'any'}
          onChange={submit}
        >
          <option value="any">Any rating</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </FilterSelect>

        <FilterSelect
          id="avail"
          name="avail"
          label="Availability"
          defaultValue={avail ?? 'any'}
          onChange={submit}
        >
          <option value="any">Any time</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
        </FilterSelect>

        <FilterSelect
          id="sort"
          name="sort"
          label="Sort by"
          defaultValue={sort ?? 'recommended'}
          onChange={submit}
        >
          <option value="recommended">Recommended</option>
          <option value="top-rated">Top rated</option>
          <option value="price-asc">Price: low to high</option>
        </FilterSelect>
      </form>
    </div>
  );
}
