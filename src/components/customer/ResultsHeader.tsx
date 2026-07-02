import type { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { formatDateLabel } from '@/lib/dates';

interface ResultsHeaderProps {
  category?: string;
  location?: string;
  date?: string;
  currentMaxPrice?: number;
  rating?: string;
  avail?: string;
  sort?: string;
}

const AVAIL_LABELS: Record<string, string> = {
  today: 'Today',
  week: 'This week',
};

const SORT_LABELS: Record<string, string> = {
  'top-rated': 'Top rated',
  'price-asc': 'Price: low to high',
};

function TagIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.169.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 6.75 17.25 4.5" />
    </svg>
  );
}

function EuroIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5 6.5a6 6 0 1 0 0 11M4 10h9M4 14h7.5"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v18m9-4.5L21 21m0 0-4.5-4.5M21 21V3" />
    </svg>
  );
}

export function ResultsHeader({
  category,
  location,
  date,
  currentMaxPrice,
  rating,
  avail,
  sort,
}: ResultsHeaderProps) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (location) params.set('location', location);
  if (date) params.set('date', date);
  const backHref = params.toString() ? `/?${params.toString()}` : '/';

  const contextItems: ReactNode[] = [
    <span key="category" className="inline-flex items-center gap-1.5">
      <TagIcon />
      {category ?? 'All categories'}
    </span>,
  ];

  if (location) {
    contextItems.push(
      <span key="location" className="inline-flex items-center gap-1.5">
        <PinIcon />
        {location}
      </span>,
    );
  }

  if (date) {
    contextItems.push(
      <span key="date" className="inline-flex items-center gap-1.5">
        <CalendarIcon />
        {formatDateLabel(date)}
      </span>,
    );
  }

  if (currentMaxPrice !== undefined) {
    contextItems.push(
      <span key="price" className="inline-flex items-center gap-1.5">
        <EuroIcon />
        {`Up to €${currentMaxPrice}`}
      </span>,
    );
  }

  if (rating && rating !== 'any') {
    contextItems.push(
      <span key="rating" className="inline-flex items-center gap-1.5">
        <StarIcon />
        {`${rating}+`}
      </span>,
    );
  }

  if (avail && AVAIL_LABELS[avail]) {
    contextItems.push(
      <span key="avail" className="inline-flex items-center gap-1.5">
        <ClockIcon />
        {AVAIL_LABELS[avail]}
      </span>,
    );
  }

  if (sort && sort !== 'recommended' && SORT_LABELS[sort]) {
    contextItems.push(
      <span key="sort" className="inline-flex items-center gap-1.5">
        <SortIcon />
        {SORT_LABELS[sort]}
      </span>,
    );
  }

  return (
    <div className="sticky top-0 z-30 h-auto border-b border-border-soft bg-cream-100/90 backdrop-blur lg:h-12">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 py-2.5 lg:h-12 lg:py-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-semibold text-ink-800">
            {contextItems.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-x-3">
                {i > 0 && (
                  <span aria-hidden="true" className="font-bold text-ink-300">
                    ·
                  </span>
                )}
                {item}
              </span>
            ))}
          </div>
          <Link
            href={backHref}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-pill border border-border bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-all duration-150 hover:bg-cream-50 active:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
          >
            <PencilIcon />
            Edit search
          </Link>
        </div>
      </Container>
    </div>
  );
}
