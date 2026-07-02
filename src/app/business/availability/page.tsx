import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mockAvailability } from '@/data/mockAvailability';

export const metadata: Metadata = {
  title: 'Availability · ServiceFlow',
};
import { mockProviders } from '@/data/mockProviders';
import { mockServices } from '@/data/mockServices';
import { formatDateLabel } from '@/lib/dates';
import { AvailabilityHeader } from '@/components/business/AvailabilityHeader';
import { AvailabilityStats } from '@/components/business/AvailabilityStats';
import { AvailabilityFilters } from '@/components/business/AvailabilityFilters';
import { AvailabilityDayGroup } from '@/components/business/AvailabilityDayGroup';
import { AvailabilityEmptyState } from '@/components/business/AvailabilityEmptyState';
import type { EnrichedSlot } from '@/components/business/AvailabilitySlotCard';
import type { DayGroup } from '@/components/business/AvailabilityDayGroup';

type PageSearchParams = Promise<{ status?: string }>;

const slotStatuses = ['available', 'booked', 'blocked', 'unavailable'] as const;
type SlotStatusFilter = (typeof slotStatuses)[number];

export default async function BusinessAvailabilityPage(props: { searchParams: PageSearchParams }) {
  const { status } = await props.searchParams;

  const demoProviderId = 'prv-1';
  const businessProvider = mockProviders.find((p) => p.id === demoProviderId);
  if (!businessProvider) notFound();

  const today = new Date().toISOString().slice(0, 10);
  const d = new Date(today + 'T00:00:00');
  d.setDate(d.getDate() + 1);
  const tomorrow = d.toISOString().slice(0, 10);

  const activeStatus: SlotStatusFilter | 'all' = (slotStatuses as readonly string[]).includes(
    status ?? '',
  )
    ? (status as SlotStatusFilter)
    : 'all';

  const allEnriched: EnrichedSlot[] = mockAvailability
    .filter((s) => s.providerId === demoProviderId)
    .flatMap((slot) => {
      const service = mockServices.find((svc) => svc.id === slot.serviceId);
      if (!service) return [];
      return [{ slot, service }];
    })
    .sort(
      (a, b) =>
        a.slot.date.localeCompare(b.slot.date) ||
        a.slot.startTime.localeCompare(b.slot.startTime),
    );

  const filtered =
    activeStatus === 'all'
      ? allEnriched
      : allEnriched.filter((item) => item.slot.status === activeStatus);

  const grouped = new Map<string, EnrichedSlot[]>();
  for (const item of filtered) {
    const bucket = grouped.get(item.slot.date) ?? [];
    grouped.set(item.slot.date, bucket);
    bucket.push(item);
  }

  const dayGroups: DayGroup[] = Array.from(grouped.entries()).map(([date, slots]) => ({
    date,
    dateLabel:
      date === today ? 'Today' : date === tomorrow ? 'Tomorrow' : formatDateLabel(date),
    isPast: date < today,
    isToday: date === today,
    slots,
  }));

  const counts = {
    all: allEnriched.length,
    available: allEnriched.filter((i) => i.slot.status === 'available').length,
    booked: allEnriched.filter((i) => i.slot.status === 'booked').length,
    blocked: allEnriched.filter((i) => i.slot.status === 'blocked').length,
    unavailable: allEnriched.filter((i) => i.slot.status === 'unavailable').length,
  };

  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
      <AvailabilityHeader businessName={businessProvider.name} totalCount={allEnriched.length} />
      <AvailabilityStats counts={counts} />
      <AvailabilityFilters activeStatus={activeStatus} counts={counts} />
      {dayGroups.length === 0 ? (
        <AvailabilityEmptyState activeStatus={activeStatus} />
      ) : (
        dayGroups.map((group) => (
          <AvailabilityDayGroup key={group.date} group={group} />
        ))
      )}
    </div>
  );
}
