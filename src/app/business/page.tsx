import { notFound } from 'next/navigation';
import { DashboardHeader } from '@/components/business/DashboardHeader';
import { StatsGrid } from '@/components/business/StatsGrid';
import { UpcomingBookings } from '@/components/business/UpcomingBookings';
import type { BookingItem } from '@/components/business/UpcomingBookings';
import { AvailabilityOverview } from '@/components/business/AvailabilityOverview';
import { QuickActions } from '@/components/business/QuickActions';
import { mockBookings } from '@/data/mockBookings';
import { mockAvailability } from '@/data/mockAvailability';
import { mockServices } from '@/data/mockServices';
import { mockProviders } from '@/data/mockProviders';
import type { Booking } from '@/types/booking';

const demoProviderId = 'prv-1';

export default function BusinessDashboardPage() {
  const today = new Date().toISOString().slice(0, 10);

  const businessProvider = mockProviders.find((p) => p.id === demoProviderId);
  if (!businessProvider) notFound();
  const businessName = businessProvider.name;

  const providerBookings = mockBookings.filter((b) => b.providerId === demoProviderId);

  const newCount       = providerBookings.filter((b) => b.status === 'new').length;
  const confirmedCount = providerBookings.filter((b) => b.status === 'confirmed').length;
  const completedCount = providerBookings.filter((b) => b.status === 'completed').length;
  const cancelledCount = providerBookings.filter((b) => b.status === 'cancelled').length;
  const totalValue     = providerBookings
    .filter((b) => b.status !== 'cancelled')
    .reduce((sum, b) => sum + b.price, 0);

  function joinBooking(b: Booking): BookingItem | null {
    const slot     = mockAvailability.find((s) => s.id === b.slotId);
    const service  = mockServices.find((s) => s.id === b.serviceId);
    const provider = mockProviders.find((p) => p.id === b.providerId);
    if (!slot || !service || !provider) return null;
    return { booking: b, slot, service, provider };
  }

  const todayItems = providerBookings
    .filter((b) => mockAvailability.find((s) => s.id === b.slotId)?.date === today)
    .map(joinBooking)
    .filter((item): item is BookingItem => item !== null)
    .sort((a, b) => a.slot.startTime.localeCompare(b.slot.startTime));

  const upcomingItems = providerBookings
    .filter((b) => {
      const slot = mockAvailability.find((s) => s.id === b.slotId);
      return slot && slot.date > today && b.status !== 'cancelled';
    })
    .map(joinBooking)
    .filter((item): item is BookingItem => item !== null)
    .sort(
      (a, b) =>
        a.slot.date.localeCompare(b.slot.date) ||
        a.slot.startTime.localeCompare(b.slot.startTime),
    );

  const futureSlots    = mockAvailability.filter(
    (s) => s.providerId === demoProviderId && s.date >= today,
  );
  const availableCount = futureSlots.filter((s) => s.status === 'available').length;
  const bookedCount    = futureSlots.filter((s) => s.status === 'booked').length;

  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-8">
        <DashboardHeader businessName={businessName} today={today} />
        <StatsGrid
          newCount={newCount}
          confirmedCount={confirmedCount}
          completedCount={completedCount}
          cancelledCount={cancelledCount}
          totalValue={totalValue}
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <UpcomingBookings todayItems={todayItems} upcomingItems={upcomingItems} />
          <AvailabilityOverview availableCount={availableCount} bookedCount={bookedCount} />
        </div>
        <QuickActions />
      </div>
    </div>
  );
}
