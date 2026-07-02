import { Badge } from '@/components/ui/Badge';
import { formatDateLabel, formatTime } from '@/lib/dates';
import type { EnrichedBooking } from './BookingsTable';

interface BookingMobileCardProps {
  item: EnrichedBooking;
  onClick: () => void;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function BookingMobileCard({ item: { booking, slot, service }, onClick }: BookingMobileCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Booking ${booking.reference} for ${booking.customerName}`}
      className="cursor-pointer rounded-xl border border-border-soft bg-white p-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
    >
      {/* Row 1: avatar + name + status */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-700"
          aria-hidden="true"
        >
          {getInitials(booking.customerName)}
        </div>
        <span className="flex-1 font-medium text-ink-900">{booking.customerName}</span>
        <Badge variant={booking.status} />
      </div>

      {/* Row 2: service + date + time */}
      <p className="mt-2 text-xs text-ink-500">
        {service.name}
        <span className="mx-1.5 text-ink-300">·</span>
        {formatDateLabel(slot.date)}
        <span className="mx-1.5 text-ink-300">·</span>
        <span className="font-mono">{formatTime(slot.startTime)}</span>
      </p>

      {/* Row 3: contact + price */}
      <div className="mt-2 flex items-center justify-between">
        <span className="truncate text-xs text-ink-400">{booking.contact}</span>
        <span className="ml-3 shrink-0 font-mono text-sm font-semibold text-ink-800">
          €{booking.price}
        </span>
      </div>
    </div>
  );
}
