import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/layout/Container';
import { ServiceHero } from '@/components/customer/ServiceHero';
import { ServiceIncludes } from '@/components/customer/ServiceIncludes';
import { BookingSection } from '@/components/customer/BookingSection';
import type { SlotGroup, SlotItem } from '@/components/customer/BookingSection';
import { mockServices } from '@/data/mockServices';
import { mockProviders } from '@/data/mockProviders';
import { mockAvailability } from '@/data/mockAvailability';
import { formatTime, formatDateLabel } from '@/lib/dates';

type PageParams = Promise<{ id: string }>;
type PageSearchParams = Promise<{ providerId?: string }>;

export async function generateMetadata(props: {
  params: PageParams;
}): Promise<Metadata> {
  const { id } = await props.params;
  const service = mockServices.find((s) => s.id === id);
  return {
    title: service ? `${service.name} · ServiceFlow` : 'Service · ServiceFlow',
  };
}

export default async function ServiceDetailsPage(props: {
  params: PageParams;
  searchParams: PageSearchParams;
}) {
  const { id } = await props.params;
  const { providerId } = await props.searchParams;

  const service = mockServices.find((s) => s.id === id);
  if (!service) notFound();

  const provider = mockProviders.find((p) => p.id === providerId);
  if (!provider || !provider.serviceIds.includes(service.id)) notFound();

  const today = new Date().toISOString().slice(0, 10);

  const availableSlots = mockAvailability
    .filter(
      (slot) =>
        slot.serviceId === service.id &&
        slot.providerId === provider.id &&
        slot.status === 'available' &&
        slot.date >= today,
    )
    .sort(
      (a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime),
    );

  // Group by date with friendly date labels
  const tomorrow = (() => {
    const d = new Date(today + 'T00:00:00');
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  })();

  const amSlotsByDate = new Map<string, SlotItem[]>();
  const pmSlotsByDate = new Map<string, SlotItem[]>();

  for (const slot of availableSlots) {
    const hour = parseInt(slot.startTime.split(':')[0], 10);
    const item: SlotItem = {
      id: slot.id,
      timeLabel: formatTime(slot.startTime),
      endTimeLabel: formatTime(slot.endTime),
    };
    const map = hour < 12 ? amSlotsByDate : pmSlotsByDate;
    const bucket = map.get(slot.date) ?? [];
    map.set(slot.date, bucket);
    bucket.push(item);
  }

  const allDates = [...new Set(availableSlots.map((s) => s.date))];

  const slotGroups: SlotGroup[] = allDates.map((date) => ({
    date,
    dateLabel:
      date === today ? 'Today' : date === tomorrow ? 'Tomorrow' : formatDateLabel(date),
    amSlots: amSlotsByDate.get(date) ?? [],
    pmSlots: pmSlotsByDate.get(date) ?? [],
  }));

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-65px)] bg-cream-50 py-8 sm:py-12">
        <Container>
          <div className="flex flex-col gap-6">
            <ServiceHero service={service} provider={provider} />
            <ServiceIncludes service={service} />
            <BookingSection
              service={service}
              provider={provider}
              slotGroups={slotGroups}
            />
          </div>
        </Container>
      </div>
    </PageShell>
  );
}
