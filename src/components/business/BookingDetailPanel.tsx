'use client';

import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/Badge';
import { formatDateLabel, formatTime } from '@/lib/dates';
import { cn } from '@/lib/cn';
import type { EnrichedBooking } from './BookingsTable';
import type { BookingStatus } from '@/types/booking';

interface BookingDetailPanelProps {
  item: EnrichedBooking;
  onClose: () => void;
  onStatusChange: (id: string, status: BookingStatus) => void;
}

type TimelineState = 'done' | 'current' | 'upcoming' | 'cancelled';

interface TimelineStep {
  label: string;
  sub: string;
  state: TimelineState;
}

function timelineSteps(status: BookingStatus): TimelineStep[] {
  switch (status) {
    case 'new':
      return [
        { label: 'Booking received', sub: 'Submitted by customer online', state: 'done' },
        { label: 'Awaiting your confirmation', sub: 'Action needed', state: 'current' },
        { label: 'Appointment', sub: 'Slot reserved, not yet confirmed', state: 'upcoming' },
      ];
    case 'confirmed':
      return [
        { label: 'Booking received', sub: 'Submitted by customer online', state: 'done' },
        { label: 'Confirmed', sub: 'You confirmed this booking', state: 'done' },
        { label: 'Upcoming appointment', sub: 'Customer slot is locked in', state: 'current' },
      ];
    case 'completed':
      return [
        { label: 'Booking received', sub: 'Submitted by customer online', state: 'done' },
        { label: 'Confirmed', sub: 'You confirmed this booking', state: 'done' },
        { label: 'Completed', sub: 'Service finished', state: 'done' },
      ];
    case 'cancelled':
      return [
        { label: 'Booking received', sub: 'Submitted by customer online', state: 'done' },
        { label: 'Cancelled', sub: 'Booking was cancelled', state: 'cancelled' },
      ];
  }
}

const dotClass: Record<TimelineState, string> = {
  done:      'bg-success-500',
  current:   'bg-yellow-400 ring-2 ring-yellow-400 ring-offset-2',
  upcoming:  'border-2 border-border-soft bg-white',
  cancelled: 'bg-error-500',
};

export function BookingDetailPanel({ item, onClose, onStatusChange }: BookingDetailPanelProps) {
  const { booking, slot, service, provider } = item;
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, [booking.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const steps = timelineSteps(booking.status);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-ink-900/40"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-white shadow-2xl sm:max-w-md"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border-soft px-6 py-5">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-400">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
              {booking.reference}
            </span>
            <h2 id="drawer-title" className="font-display text-xl font-bold text-ink-900">
              {booking.customerName}
            </h2>
            <Badge variant={booking.status} />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close booking details"
            className="rounded-lg p-1.5 text-ink-400 hover:bg-cream-100 hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="flex flex-col gap-7">

            {/* Contact */}
            <section>
              <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-ink-400">Contact</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 text-sm text-ink-700">
                  <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>{booking.contact}</span>
                </div>
              </div>
            </section>

            {/* Service details */}
            <section>
              <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-ink-400">Booking details</p>
              <div className="divide-y divide-border-soft rounded-xl border border-border-soft bg-cream-50">
                <DetailRow label="Service" value={service.name} />
                <DetailRow label="Provider" value={provider.name} />
                <DetailRow label="Date" value={formatDateLabel(slot.date)} mono />
                <DetailRow
                  label="Time"
                  value={`${formatTime(slot.startTime)} – ${formatTime(slot.endTime)}`}
                  mono
                />
                <DetailRow label="Price" value={`€${booking.price}`} mono highlight />
              </div>
            </section>

            {/* Customer note */}
            <section>
              <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-ink-400">Customer note</p>
              <div className="flex gap-3 rounded-xl border border-border-soft bg-white px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <p className={cn('text-sm leading-relaxed', booking.note ? 'text-ink-700' : 'text-ink-400')}>
                  {booking.note ?? 'No note left with this booking.'}
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink-400">Timeline</p>
              <div className="flex flex-col">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={cn('mt-1 h-2.5 w-2.5 shrink-0 rounded-full', dotClass[step.state])} />
                      {i < steps.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-border-soft" style={{ minHeight: 28 }} />
                      )}
                    </div>
                    <div className={cn('pb-5', i === steps.length - 1 && 'pb-0')}>
                      <p className={cn('text-sm font-medium', step.state === 'upcoming' ? 'text-ink-400' : 'text-ink-800')}>
                        {step.label}
                      </p>
                      <p className="text-xs text-ink-400">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-border-soft px-6 py-5">
          {booking.status === 'new' && (
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onStatusChange(booking.id, 'confirmed')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-yellow-400 px-5 py-3 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Confirm booking
              </button>
              <button
                type="button"
                onClick={() => onStatusChange(booking.id, 'cancelled')}
                className="text-sm font-medium text-error-600 hover:text-error-700 focus-visible:outline-none focus-visible:underline"
              >
                Cancel booking
              </button>
            </div>
          )}

          {booking.status === 'confirmed' && (
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onStatusChange(booking.id, 'completed')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill border border-success-500 bg-white px-5 py-3 text-sm font-semibold text-success-700 shadow-sm transition-colors hover:bg-success-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success-500 focus-visible:ring-offset-2"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Mark completed
              </button>
              <button
                type="button"
                onClick={() => onStatusChange(booking.id, 'cancelled')}
                className="text-sm font-medium text-error-600 hover:text-error-700 focus-visible:outline-none focus-visible:underline"
              >
                Cancel booking
              </button>
            </div>
          )}

          {booking.status === 'completed' && (
            <div className="flex items-center gap-2 text-sm font-medium text-success-700">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Completed · €{booking.price} received
            </div>
          )}

          {booking.status === 'cancelled' && (
            <div className="flex items-center gap-2 text-sm font-medium text-error-600">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              This booking was cancelled
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

function DetailRow({
  label,
  value,
  mono,
  highlight,
}: {
  label: string;
  value: string;
  mono?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-xs text-ink-500">{label}</span>
      <span
        className={cn(
          'text-sm font-medium text-ink-800',
          mono && 'font-mono',
          highlight && 'text-base font-bold text-ink-900',
        )}
      >
        {value}
      </span>
    </div>
  );
}
