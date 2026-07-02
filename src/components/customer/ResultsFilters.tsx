'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';

const SERVICE_CATEGORIES = [
  'Laptop repair',
  'Phone repair',
  'Dental',
  'Cleaning',
  'Consultation',
  'Beauty',
] as const;

interface ResultsFiltersProps {
  category?: string;
  location?: string;
  date?: string;
  sort?: string;
  sliderMaxPrice: number;
  currentMaxPrice?: number;
  rating?: string;
  avail?: string;
  isActive: boolean;
  clearHref: string;
}

function buildHref(params: {
  location?: string;
  date?: string;
  category?: string;
  maxPrice?: number;
  rating?: string;
  avail?: string;
  sort?: string;
}): string {
  const sp = new URLSearchParams();
  if (params.location) sp.set('location', params.location);
  if (params.date) sp.set('date', params.date);
  if (params.category) sp.set('category', params.category);
  if (params.maxPrice !== undefined) sp.set('maxPrice', String(params.maxPrice));
  if (params.rating && params.rating !== 'any') sp.set('rating', params.rating);
  if (params.avail && params.avail !== 'any') sp.set('avail', params.avail);
  if (params.sort && params.sort !== 'recommended') sp.set('sort', params.sort);
  const qs = sp.toString();
  return qs ? `/results?${qs}` : '/results';
}

function FilterSection({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={cn('flex flex-col gap-3', !last && 'border-b border-border-soft pb-5')}>
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-400">{title}</h3>
      {children}
    </div>
  );
}

function CategoryRow({
  name,
  value,
  label,
  current,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  current: string;
  onChange: () => void;
}) {
  const checked = current === value;
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-md py-1 text-sm font-medium text-ink-700 hover:text-ink-900">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <span
        className={cn(
          'flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition-colors',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-yellow-500 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-white',
          checked ? 'border-yellow-500' : 'border-border-soft bg-white',
        )}
      >
        {checked && <span className="h-[8px] w-[8px] rounded-full bg-yellow-400" />}
      </span>
      {label}
    </label>
  );
}

function PillOption({
  name,
  value,
  label,
  current,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  current: string;
  onChange: () => void;
}) {
  const active = current === value;
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={active}
        onChange={onChange}
        className="sr-only peer"
      />
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-yellow-500 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-white',
          active
            ? 'border-yellow-400 bg-yellow-50 text-yellow-800'
            : 'border-border-soft bg-white text-ink-600 hover:border-yellow-200 hover:text-ink-800',
        )}
      >
        {label}
      </span>
    </label>
  );
}

function PriceRangeFilter({
  sliderMaxPrice,
  currentMaxPrice,
  onCommit,
}: {
  sliderMaxPrice: number;
  currentMaxPrice?: number;
  onCommit: (value: number | undefined) => void;
}) {
  const [draftMaxPrice, setDraftMaxPrice] = useState(currentMaxPrice ?? sliderMaxPrice);

  function commit(e: React.SyntheticEvent<HTMLInputElement>) {
    const raw = Number(e.currentTarget.value);
    const normalized = raw >= sliderMaxPrice ? undefined : raw;
    if (normalized === currentMaxPrice) return;
    onCommit(normalized);
  }

  const percent = sliderMaxPrice > 0 ? (draftMaxPrice / sliderMaxPrice) * 100 : 0;
  const bubbleLeft = Math.min(96, Math.max(4, percent));
  const label = draftMaxPrice >= sliderMaxPrice ? `€${sliderMaxPrice}+` : `€${draftMaxPrice}`;

  return (
    <>
      <div className="text-sm font-medium text-ink-700">
        Up to <strong className="font-semibold text-ink-900">{label}</strong>
      </div>
      <div className="relative pt-6">
        <input
          type="range"
          min={0}
          max={sliderMaxPrice}
          step={1}
          value={draftMaxPrice}
          onChange={(e) => setDraftMaxPrice(Number(e.target.value))}
          onPointerUp={commit}
          onKeyUp={commit}
          onBlur={commit}
          className="peer w-full accent-yellow-500"
          aria-label="Maximum price"
        />
        <div
          className="pointer-events-none absolute -top-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-900 px-2 py-0.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-150 peer-focus:opacity-100"
          style={{ left: `${bubbleLeft}%` }}
        >
          {label}
        </div>
      </div>
      <div className="flex justify-between text-xs text-ink-400">
        <span>€0</span>
        <span>€{sliderMaxPrice}+</span>
      </div>
    </>
  );
}

export function ResultsFilters({
  category,
  location,
  date,
  sort,
  sliderMaxPrice,
  currentMaxPrice,
  rating,
  avail,
  isActive,
  clearHref,
}: ResultsFiltersProps) {
  const router = useRouter();

  function navigate(overrides: Partial<{
    category: string | undefined;
    maxPrice: number | undefined;
    rating: string;
    avail: string;
    sort: string;
  }>) {
    router.replace(
      buildHref({
        location,
        date,
        category,
        maxPrice: currentMaxPrice,
        rating,
        avail,
        sort,
        ...overrides,
      }),
      { scroll: false },
    );
  }

  return (
    <div className="rounded-xl border border-border-soft bg-white p-5 shadow-sm">
      {/* Sidebar header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink-900">Filters</h2>
        {isActive && (
          <Link
            href={clearHref}
            scroll={false}
            className="text-xs font-medium text-yellow-700 hover:text-yellow-800 focus-visible:outline-none focus-visible:underline"
          >
            Clear filters
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <FilterSection title="Category">
          <CategoryRow
            name="category"
            value=""
            label="All categories"
            current={category ?? ''}
            onChange={() => navigate({ category: undefined })}
          />
          {SERVICE_CATEGORIES.map((c) => (
            <CategoryRow
              key={c}
              name="category"
              value={c}
              label={c}
              current={category ?? ''}
              onChange={() => navigate({ category: c })}
            />
          ))}
        </FilterSection>

        <FilterSection title="Price range">
          <PriceRangeFilter
            key={`${sliderMaxPrice}-${currentMaxPrice ?? 'max'}`}
            sliderMaxPrice={sliderMaxPrice}
            currentMaxPrice={currentMaxPrice}
            onCommit={(value) => navigate({ maxPrice: value })}
          />
        </FilterSection>

        <FilterSection title="Rating">
          <div className="flex flex-wrap gap-2">
            <PillOption name="rating" value="any" label="Any"  current={rating ?? 'any'} onChange={() => navigate({ rating: 'any' })} />
            <PillOption name="rating" value="4"   label="4.0+" current={rating ?? 'any'} onChange={() => navigate({ rating: '4' })} />
            <PillOption name="rating" value="4.5" label="4.5+" current={rating ?? 'any'} onChange={() => navigate({ rating: '4.5' })} />
            <PillOption name="rating" value="4.8" label="4.8+" current={rating ?? 'any'} onChange={() => navigate({ rating: '4.8' })} />
          </div>
        </FilterSection>

        <FilterSection title="Availability">
          <div className="flex flex-wrap gap-2">
            <PillOption name="avail" value="any"   label="Any time"  current={avail ?? 'any'} onChange={() => navigate({ avail: 'any' })} />
            <PillOption name="avail" value="today" label="Today"     current={avail ?? 'any'} onChange={() => navigate({ avail: 'today' })} />
            <PillOption name="avail" value="week"  label="This week" current={avail ?? 'any'} onChange={() => navigate({ avail: 'week' })} />
          </div>
        </FilterSection>

        <FilterSection title="Sort by" last>
          <select
            name="sort"
            value={sort ?? 'recommended'}
            onChange={(e) => navigate({ sort: e.target.value })}
            className="w-full rounded-md border border-border-soft bg-white px-3 py-2 text-sm text-ink-800 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/35"
          >
            <option value="recommended">Recommended</option>
            <option value="top-rated">Top rated</option>
            <option value="price-asc">Price: low to high</option>
          </select>
        </FilterSection>
      </div>
    </div>
  );
}
