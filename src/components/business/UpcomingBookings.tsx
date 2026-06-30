import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatTime, formatDateLabel } from '@/lib/dates';
import type { Booking } from '@/types/booking';
import type { AvailabilitySlot } from '@/types/availability';
import type { Service, Provider } from '@/types/service';

export interface BookingItem {
  booking: Booking;
  slot: AvailabilitySlot;
  service: Service;
  provider: Provider;
}

interface UpcomingBookingsProps {
  todayItems: BookingItem[];
  upcomingItems: BookingItem[];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function UpcomingBookings({ todayItems, upcomingItems }: UpcomingBookingsProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Today's schedule */}
      <Card padding="none">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-base font-bold text-ink-900">Today&apos;s schedule</h2>
            {todayItems.length > 0 && (
              <span className="inline-flex items-center rounded-pill bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-700">
                {todayItems.length}
              </span>
            )}
          </div>
          <Link
            href="/business/bookings"
            className="text-xs font-medium text-yellow-600 hover:text-yellow-700 focus-visible:outline-none focus-visible:underline"
          >
            View all →
          </Link>
        </div>

        <div className="border-t border-border-soft">
          {todayItems.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-ink-400">No bookings scheduled for today.</p>
            </div>
          ) : (
            <ul className="divide-y divide-border-soft" role="list">
              {todayItems.map(({ booking, slot, service }) => (
                <li key={booking.id} className="flex items-center gap-4 px-5 py-4">
                  <span className="w-14 shrink-0 font-mono text-sm tabular-nums text-ink-500">
                    {formatTime(slot.startTime)}
                  </span>
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-700"
                    aria-hidden="true"
                  >
                    {getInitials(booking.customerName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink-900">{booking.customerName}</p>
                    <p className="truncate text-xs text-ink-400">{service.name}</p>
                  </div>
                  <Badge variant={booking.status} />
                  <span className="shrink-0 font-mono text-sm font-semibold text-ink-700">
                    €{booking.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>

      {/* Upcoming bookings */}
      <Card padding="none">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="font-display text-base font-bold text-ink-900">Upcoming</h2>
          <Link
            href="/business/bookings"
            className="text-xs font-medium text-yellow-600 hover:text-yellow-700 focus-visible:outline-none focus-visible:underline"
          >
            View all →
          </Link>
        </div>

        <div className="border-t border-border-soft">
          {upcomingItems.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-ink-400">No upcoming bookings.</p>
            </div>
          ) : (
            <ul className="divide-y divide-border-soft" role="list">
              {upcomingItems.slice(0, 3).map(({ booking, slot, service }) => (
                <li key={booking.id} className="flex items-center gap-4 px-5 py-4">
                  <div className="w-20 shrink-0">
                    <p className="text-xs font-medium text-ink-700">{formatDateLabel(slot.date)}</p>
                    <p className="font-mono text-xs text-ink-400">{formatTime(slot.startTime)}</p>
                  </div>
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-xs font-bold text-ink-500"
                    aria-hidden="true"
                  >
                    {getInitials(booking.customerName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink-900">{booking.customerName}</p>
                    <p className="truncate text-xs text-ink-400">{service.name}</p>
                  </div>
                  <Badge variant={booking.status} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  );
}
