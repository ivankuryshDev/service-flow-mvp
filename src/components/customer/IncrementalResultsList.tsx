'use client';

import { Children, useEffect, useRef, useState, type ReactNode } from 'react';

const INITIAL_COUNT = 5;
const BATCH_SIZE = 5;
const REVEAL_DELAY_MS = 1000;

interface IncrementalResultsListProps {
  children: ReactNode;
}

export function IncrementalResultsList({ children }: IncrementalResultsListProps) {
  const items = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(Math.min(INITIAL_COUNT, items.length));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = visibleCount < items.length;

  useEffect(() => {
    if (!hasMore || isLoadingMore) return;
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoadingMore(true);
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  useEffect(() => {
    if (!isLoadingMore) return;
    const timer = setTimeout(() => {
      setVisibleCount((count) => Math.min(count + BATCH_SIZE, items.length));
      setIsLoadingMore(false);
    }, REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isLoadingMore, items.length]);

  return (
    <>
      <ul className="flex flex-col gap-4" role="list">
        {items.slice(0, visibleCount)}
      </ul>
      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex h-16 items-center justify-center gap-2"
          aria-live="polite"
        >
          {isLoadingMore && (
            <>
              <svg className="h-5 w-5 animate-spin text-yellow-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-sm text-ink-500">Loading more…</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
