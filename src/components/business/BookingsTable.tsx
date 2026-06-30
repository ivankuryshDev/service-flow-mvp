import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDateLabel, formatTime } from '@/lib/dates';
import type { Booking } from '@/types/booking';
import type { AvailabilitySlot } from '@/types/availability';
import type { Service, Provider } from '@/types/service';

export interface EnrichedBooking {
  booking: Booking;
  slot: AvailabilitySlot;
  service: Service;
  provider: Provider;
}

interface BookingsTableProps {
  items: EnrichedBooking[];
}

export function BookingsTable({ items }: BookingsTableProps) {
  return (
    <Card padding="none" className="hidden md:block overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-soft bg-cream-50">
            {['Reference', 'Customer', 'Service', 'Date & Time', 'Contact', 'Price', 'Status'].map(
              (col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-ink-400"
                >
                  {col}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-soft">
          {items.map(({ booking, slot, service }) => (
            <tr key={booking.id} className="hover:bg-cream-50/50 transition-colors">
              <td className="px-5 py-4">
                <span className="font-mono text-xs text-ink-500">{booking.reference}</span>
              </td>
              <td className="px-5 py-4">
                <span className="font-medium text-ink-900">{booking.customerName}</span>
              </td>
              <td className="px-5 py-4">
                <span className="text-ink-500">{service.name}</span>
              </td>
              <td className="px-5 py-4">
                <p className="font-mono text-ink-700">{formatDateLabel(slot.date)}</p>
                <p className="font-mono text-xs text-ink-400">{formatTime(slot.startTime)}</p>
              </td>
              <td className="px-5 py-4 max-w-[160px]">
                <span className="block truncate text-ink-500">{booking.contact}</span>
              </td>
              <td className="px-5 py-4">
                <span className="font-mono font-semibold text-ink-800">€{booking.price}</span>
              </td>
              <td className="px-5 py-4">
                <Badge variant={booking.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
