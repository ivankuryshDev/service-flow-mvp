import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/layout/Container';
import { ConfirmationHero } from '@/components/customer/ConfirmationHero';
import { BookingSummaryCard } from '@/components/customer/BookingSummaryCard';
import { NextSteps } from '@/components/customer/NextSteps';
import { mockServices } from '@/data/mockServices';
import { mockProviders } from '@/data/mockProviders';
import { mockAvailability } from '@/data/mockAvailability';
import { formatDateLabel, formatTime } from '@/lib/dates';

export const metadata: Metadata = {
  title: 'Booking Confirmed · ServiceFlow',
};

type PageSearchParams = Promise<{
  serviceId?: string;
  providerId?: string;
  slotId?: string;
  customerName?: string;
  contact?: string;
  note?: string;
}>;

function generateRef(slotId: string): string {
  const num = parseInt(slotId.replace('slot-', ''), 10);
  return `SF-${(num * 127 + 1000).toString().slice(-4)}`;
}

export default async function BookingConfirmationPage(props: { searchParams: PageSearchParams }) {
  const { serviceId, providerId, slotId, customerName, contact, note } =
    await props.searchParams;

  // Friendly state when required params are missing
  if (!serviceId || !providerId || !slotId || !customerName || !contact) {
    return (
      <PageShell>
        <div className="min-h-[calc(100vh-65px)] bg-cream-50 py-16">
          <Container>
            <div className="flex flex-col items-center gap-6 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cream-100 text-ink-300">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-display text-xl font-semibold text-ink-900">Booking not found</h1>
                <p className="max-w-sm text-sm leading-relaxed text-ink-500">
                  This confirmation link is missing booking details. Please complete a booking from the search page.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center rounded-pill bg-yellow-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
              >
                Back to search
              </Link>
            </div>
          </Container>
        </div>
      </PageShell>
    );
  }

  const service = mockServices.find((s) => s.id === serviceId);
  if (!service) notFound();

  const provider = mockProviders.find((p) => p.id === providerId);
  if (!provider) notFound();

  const slot = mockAvailability.find(
    (s) =>
      s.id === slotId &&
      s.serviceId === service.id &&
      s.providerId === provider.id,
  );
  if (!slot) notFound();

  const bookingRef = generateRef(slotId);
  const slotDateLabel = formatDateLabel(slot.date);
  const slotTimeLabel = formatTime(slot.startTime);
  const slotEndLabel = formatTime(slot.endTime);

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-65px)] bg-cream-50 py-8 sm:py-12">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            <ConfirmationHero
              bookingRef={bookingRef}
              serviceName={service.name}
              providerName={provider.name}
            />

            <BookingSummaryCard
              service={service}
              provider={provider}
              slotDateLabel={slotDateLabel}
              slotTimeLabel={slotTimeLabel}
              slotEndLabel={slotEndLabel}
              customerName={customerName}
              contact={contact}
              note={note}
            />

            <NextSteps />

            {/* Action links */}
            <div className="flex flex-col items-center gap-3 pb-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-pill bg-yellow-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Find another service
              </Link>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex w-full items-center justify-center rounded-pill border border-border bg-white px-6 py-3 text-sm font-medium text-ink-400 opacity-60 sm:w-auto"
              >
                Add to calendar (coming soon)
              </button>
            </div>
          </div>
        </Container>
      </div>
    </PageShell>
  );
}
