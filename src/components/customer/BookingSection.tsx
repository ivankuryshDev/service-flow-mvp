'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { cn } from '@/lib/cn';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { BookingConfirmModal } from './BookingConfirmModal';
import type { Service, Provider } from '@/types/service';

export interface SlotItem {
  id: string;
  timeLabel: string;
  endTimeLabel: string;
}

export interface SlotGroup {
  date: string;
  dateLabel: string;
  amSlots: SlotItem[];
  pmSlots: SlotItem[];
}

interface BookingSectionProps {
  service: Service;
  provider: Provider;
  slotGroups: SlotGroup[];
}

const bookingSchema = z.object({
  customerName: z.string().min(1, 'Please enter your name.'),
  contact: z.string().min(1, 'Add an email or phone so we can confirm.'),
  note: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingSection({ service, provider, slotGroups }: BookingSectionProps) {
  const router = useRouter();
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [slotError, setSlotError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingData, setPendingData] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<BookingFormValues>();

  const allSlots = slotGroups.flatMap((g) => [...g.amSlots, ...g.pmSlots]);
  const selectedSlot = allSlots.find((s) => s.id === selectedSlotId) ?? null;
  const selectedGroup = selectedSlotId
    ? slotGroups.find(
        (g) =>
          g.amSlots.some((s) => s.id === selectedSlotId) ||
          g.pmSlots.some((s) => s.id === selectedSlotId),
      )
    : null;

  const onSubmit = handleSubmit((data) => {
    if (!selectedSlotId) {
      setSlotError(true);
      return;
    }
    const result = bookingSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof BookingFormValues;
        setError(field, { message: issue.message });
      });
      return;
    }
    setPendingData(result.data);
    setModalOpen(true);
  });

  const handleConfirm = () => {
    if (!pendingData || !selectedSlotId) return;
    const params = new URLSearchParams({
      serviceId: service.id,
      providerId: provider.id,
      slotId: selectedSlotId,
      customerName: pendingData.customerName,
      contact: pendingData.contact,
    });
    if (pendingData.note) params.set('note', pendingData.note);
    router.push(`/booking/confirmation?${params}`);
  };

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Left column: slot picker + form */}
        <div className="flex flex-col gap-8">
          {/* Slot picker */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-400">When</p>
            <h2 className="mt-1 font-display text-xl font-bold text-ink-900">Pick a time</h2>

            {slotGroups.length === 0 ? (
              <div className="mt-4 flex flex-col items-center gap-3 rounded-xl border border-border-soft bg-white py-10 text-center">
                <svg
                  className="h-8 w-8 text-ink-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <p className="text-sm font-medium text-ink-900">No available slots</p>
                <p className="text-sm text-ink-500">Check back soon or try another provider.</p>
              </div>
            ) : (
              <div className="mt-4 flex flex-col gap-5">
                {slotGroups.map((group) => (
                  <div key={group.date}>
                    <p className="mb-3 text-sm font-semibold text-ink-700">{group.dateLabel}</p>

                    {group.amSlots.length > 0 && (
                      <div className="mb-4">
                        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
                          Morning
                        </p>
                        <div
                          className="flex flex-wrap gap-2"
                          role="group"
                          aria-label={`Morning slots for ${group.dateLabel}`}
                        >
                          {group.amSlots.map((slot) => (
                            <SlotButton
                              key={slot.id}
                              slot={slot}
                              isSelected={selectedSlotId === slot.id}
                              onSelect={() => {
                                setSelectedSlotId(
                                  selectedSlotId === slot.id ? null : slot.id,
                                );
                                setSlotError(false);
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {group.pmSlots.length > 0 && (
                      <div>
                        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
                          Afternoon
                        </p>
                        <div
                          className="flex flex-wrap gap-2"
                          role="group"
                          aria-label={`Afternoon slots for ${group.dateLabel}`}
                        >
                          {group.pmSlots.map((slot) => (
                            <SlotButton
                              key={slot.id}
                              slot={slot}
                              isSelected={selectedSlotId === slot.id}
                              onSelect={() => {
                                setSelectedSlotId(
                                  selectedSlotId === slot.id ? null : slot.id,
                                );
                                setSlotError(false);
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {slotError && (
              <p className="mt-3 text-sm text-error-500" role="alert">
                Please select a time slot to continue.
              </p>
            )}
          </div>

          {/* Customer form */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
              Your details
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-ink-900">Who&apos;s it for?</h2>
            <p className="mt-1 text-sm text-ink-500">Fields marked * are required.</p>

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-5 flex flex-col gap-5 rounded-xl border border-border-soft bg-white p-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="Full name *"
                  placeholder="e.g. Aoife Murphy"
                  autoComplete="name"
                  {...register('customerName')}
                  error={errors.customerName?.message}
                />
                <Input
                  label="Email or phone *"
                  placeholder="e.g. aoife@email.com"
                  autoComplete="email"
                  {...register('contact')}
                  error={errors.contact?.message}
                />
              </div>

              <Textarea
                label="Note (optional)"
                placeholder="Any details the provider should know…"
                rows={3}
                {...register('note')}
              />

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-pill bg-yellow-400 px-6 py-3.5 text-base font-semibold text-ink-900 shadow-sm transition-all hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
              >
                Confirm booking
              </button>
            </form>
          </div>
        </div>

        {/* Right column: sticky booking summary (desktop only) */}
        <div className="hidden lg:block">
          <div className="sticky top-6">
            <div className="overflow-hidden rounded-xl border border-border-soft bg-white shadow-sm">
              <div className="bg-ink-900 px-6 py-4">
                <p className="text-xs font-medium uppercase tracking-wide text-yellow-400">
                  Your booking
                </p>
                <p className="mt-1 font-display text-base font-bold text-white">{service.name}</p>
                <p className="text-sm text-ink-400">{provider.name}</p>
              </div>

              <div className="divide-y divide-border-soft px-6">
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm text-ink-500">Provider</span>
                  <span className="text-sm font-medium text-ink-800">{provider.location}</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm text-ink-500">Date</span>
                  <span className="text-sm font-medium text-ink-800">
                    {selectedGroup?.dateLabel ?? (
                      <span className="text-ink-300">Select a time</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm text-ink-500">Time</span>
                  <span
                    className={cn(
                      'text-sm font-medium',
                      selectedSlot ? 'font-mono text-ink-800' : 'text-ink-300',
                    )}
                  >
                    {selectedSlot
                      ? `${selectedSlot.timeLabel} – ${selectedSlot.endTimeLabel}`
                      : 'Select a time'}
                  </span>
                </div>
              </div>

              <div className="bg-cream-50 px-6 py-4">
                <div className="flex items-end justify-between">
                  <p className="text-sm text-ink-500">Total from</p>
                  <p className="font-display text-2xl font-bold text-ink-900">
                    €{service.priceFrom}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4">
                <p className="text-center text-xs text-ink-400">
                  Confirmed instantly · free to change up to 24h before
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        serviceName={service.name}
        providerName={provider.name}
        dateLabel={selectedGroup?.dateLabel ?? ''}
        timeLabel={
          selectedSlot
            ? `${selectedSlot.timeLabel} – ${selectedSlot.endTimeLabel}`
            : ''
        }
        price={service.priceFrom}
        customerName={pendingData?.customerName ?? ''}
        contact={pendingData?.contact ?? ''}
      />
    </>
  );
}

function SlotButton({
  slot,
  isSelected,
  onSelect,
}: {
  slot: SlotItem;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={cn(
        'rounded-pill px-4 py-2 text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2',
        isSelected
          ? 'bg-yellow-400 font-semibold text-ink-900 shadow-sm'
          : 'border border-border-soft bg-white text-ink-700 hover:border-yellow-300 hover:bg-yellow-50',
      )}
    >
      {slot.timeLabel}
    </button>
  );
}
