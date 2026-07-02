import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mockAvailability } from '@/data/mockAvailability';
import { mockProviders } from '@/data/mockProviders';
import { mockServices } from '@/data/mockServices';
import { AvailabilityManager } from '@/components/business/AvailabilityManager';
import type { EnrichedSlot } from '@/components/business/AvailabilitySlotCard';

export const metadata: Metadata = {
  title: 'Availability · ServiceFlow',
};

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

  const initialStatus: SlotStatusFilter | 'all' = (
    slotStatuses as readonly string[]
  ).includes(status ?? '')
    ? (status as SlotStatusFilter)
    : 'all';

  const initialSlots: EnrichedSlot[] = mockAvailability
    .filter((s) => s.providerId === demoProviderId)
    .flatMap((slot) => {
      const service = mockServices.find((svc) => svc.id === slot.serviceId);
      if (!service) return [];
      return [{ slot, service }];
    });

  const providerServiceIds = [
    ...new Set(
      mockAvailability
        .filter((s) => s.providerId === demoProviderId)
        .map((s) => s.serviceId),
    ),
  ];
  const providerServices = mockServices.filter((s) =>
    providerServiceIds.includes(s.id),
  );

  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
      <AvailabilityManager
        initialSlots={initialSlots}
        initialStatus={initialStatus}
        today={today}
        tomorrow={tomorrow}
        providerServices={providerServices}
        demoProviderId={demoProviderId}
        businessName={businessProvider.name}
      />
    </div>
  );
}
