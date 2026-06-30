import { notFound } from 'next/navigation';
import { BookingsHeader } from '@/components/business/BookingsHeader';
import { BookingsStats } from '@/components/business/BookingsStats';
import { BookingsFilters } from '@/components/business/BookingsFilters';
import { BookingsTable } from '@/components/business/BookingsTable';
import type { EnrichedBooking } from '@/components/business/BookingsTable';
import { BookingMobileCard } from '@/components/business/BookingMobileCard';
import { BookingsEmptyState } from '@/components/business/BookingsEmptyState';
import { mockBookings } from '@/data/mockBookings';
import { mockAvailability } from '@/data/mockAvailability';
import { mockServices } from '@/data/mockServices';
import { mockProviders } from '@/data/mockProviders';
import type { Booking } from '@/types/booking';

const validStatuses = ['new', 'confirmed', 'completed', 'cancelled'] as const;
type ValidStatus = (typeof validStatuses)[number];

type PageSearchParams = Promise<{ status?: string }>;

export default async function BusinessBookingsPage(props: { searchParams: PageSearchParams }) {
  const { status } = await props.searchParams;

  const demoProviderId = 'prv-1';
  const businessProvider = mockProviders.find((p) => p.id === demoProviderId);
  if (!businessProvider) notFound();

  const activeStatus: ValidStatus | 'all' = (validStatuses as readonly string[]).includes(
    status ?? '',
  )
    ? (status as ValidStatus)
    : 'all';

  function joinBooking(b: Booking): EnrichedBooking | null {
    const slot     = mockAvailability.find((s) => s.id === b.slotId);
    const service  = mockServices.find((s) => s.id === b.serviceId);
    const provider = mockProviders.find((p) => p.id === b.providerId);
    if (!slot || !service || !provider) return null;
    return { booking: b, slot, service, provider };
  }

  const allEnriched = mockBookings
    .filter((b) => b.providerId === demoProviderId)
    .map(joinBooking)
    .filter((item): item is EnrichedBooking => item !== null)
    .sort(
      (a, b) =>
        b.slot.date.localeCompare(a.slot.date) ||
        b.slot.startTime.localeCompare(a.slot.startTime),
    );

  const filtered =
    activeStatus === 'all'
      ? allEnriched
      : allEnriched.filter((item) => item.booking.status === activeStatus);

  const counts = {
    all:       allEnriched.length,
    new:       allEnriched.filter((i) => i.booking.status === 'new').length,
    confirmed: allEnriched.filter((i) => i.booking.status === 'confirmed').length,
    completed: allEnriched.filter((i) => i.booking.status === 'completed').length,
    cancelled: allEnriched.filter((i) => i.booking.status === 'cancelled').length,
  };

  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
      <BookingsHeader businessName={businessProvider.name} totalCount={allEnriched.length} />
      <BookingsStats counts={counts} />
      <BookingsFilters activeStatus={activeStatus} counts={counts} />

      {filtered.length === 0 ? (
        <BookingsEmptyState activeStatus={activeStatus} />
      ) : (
        <>
          <BookingsTable items={filtered} />
          <div className="flex flex-col gap-4 md:hidden">
            {filtered.map((item) => (
              <BookingMobileCard key={item.booking.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
