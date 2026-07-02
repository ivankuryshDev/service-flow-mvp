'use client';

import { useState, useMemo } from 'react';
import { BookingsStats } from './BookingsStats';
import { BookingsFilters } from './BookingsFilters';
import { BookingsTable } from './BookingsTable';
import { BookingMobileCard } from './BookingMobileCard';
import { BookingsEmptyState } from './BookingsEmptyState';
import { BookingDetailPanel } from './BookingDetailPanel';
import type { EnrichedBooking } from './BookingsTable';
import type { BookingStatus } from '@/types/booking';

type ValidStatus = BookingStatus | 'all';

interface BookingsManagerProps {
  initialBookings: EnrichedBooking[];
  initialStatus: ValidStatus;
}

export function BookingsManager({ initialBookings, initialStatus }: BookingsManagerProps) {
  const [overrides, setOverrides] = useState<Record<string, BookingStatus>>({});
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<ValidStatus>(initialStatus);

  const bookings = useMemo(
    () =>
      initialBookings.map((item) => ({
        ...item,
        booking: {
          ...item.booking,
          status: overrides[item.booking.id] ?? item.booking.status,
        },
      })),
    [initialBookings, overrides],
  );

  const counts = useMemo(
    () => ({
      all:       bookings.length,
      new:       bookings.filter((i) => i.booking.status === 'new').length,
      confirmed: bookings.filter((i) => i.booking.status === 'confirmed').length,
      completed: bookings.filter((i) => i.booking.status === 'completed').length,
      cancelled: bookings.filter((i) => i.booking.status === 'cancelled').length,
    }),
    [bookings],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return bookings.filter((item) => {
      const matchesStatus =
        activeStatus === 'all' || item.booking.status === activeStatus;
      const matchesSearch =
        !q ||
        [
          item.booking.customerName,
          item.booking.reference,
          item.booking.contact,
          item.service.name,
        ].some((s) => s.toLowerCase().includes(q));
      return matchesStatus && matchesSearch;
    });
  }, [bookings, activeStatus, search]);

  const openItem = openId
    ? bookings.find((i) => i.booking.id === openId) ?? null
    : null;

  const handleStatusChange = (id: string, status: BookingStatus) =>
    setOverrides((prev) => ({ ...prev, [id]: status }));

  const handleClearFilter = () => {
    setSearch('');
    setActiveStatus('all');
  };

  return (
    <>
      <BookingsStats counts={counts} />

      {/* Text search */}
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by customer, reference, service or contact…"
          aria-label="Search bookings"
          className="w-full rounded-xl border border-border-soft bg-white py-2.5 pl-9 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
        />
      </div>

      <BookingsFilters
        activeStatus={activeStatus}
        counts={counts}
        onStatusChange={(s) => setActiveStatus(s as ValidStatus)}
      />

      {filtered.length === 0 ? (
        <BookingsEmptyState
          activeStatus={activeStatus}
          hasSearch={search.trim().length > 0}
          onClearFilter={handleClearFilter}
        />
      ) : (
        <>
          <BookingsTable items={filtered} onRowClick={setOpenId} />
          <div className="flex flex-col gap-4 md:hidden">
            {filtered.map((item) => (
              <BookingMobileCard
                key={item.booking.id}
                item={item}
                onClick={() => setOpenId(item.booking.id)}
              />
            ))}
          </div>
        </>
      )}

      {openItem && (
        <BookingDetailPanel
          item={openItem}
          onClose={() => setOpenId(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </>
  );
}
