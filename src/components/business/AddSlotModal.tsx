'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { formatTime } from '@/lib/dates';
import type { AvailabilitySlot } from '@/types/availability';
import type { Service } from '@/types/service';

interface AddSlotModalProps {
  onClose: () => void;
  onAdd: (slot: Omit<AvailabilitySlot, 'id' | 'providerId'>, service: Service) => void;
  providerServices: Service[];
  today: string;
}

const TIME_OPTIONS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00',
] as const;

interface FormState {
  serviceId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'available' | 'blocked';
}

interface FormErrors {
  serviceId?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
}

export function AddSlotModal({ onClose, onAdd, providerServices, today }: AddSlotModalProps) {
  const firstInputRef = useRef<HTMLSelectElement>(null);

  const [form, setForm] = useState<FormState>({
    serviceId: providerServices[0]?.id ?? '',
    date: '',
    startTime: '09:00',
    endTime: '10:00',
    status: 'available',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Focus first field on mount
  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const next: FormErrors = {};
    if (!form.date) next.date = 'Date is required.';
    if (!form.startTime) next.startTime = 'Start time is required.';
    if (!form.endTime) next.endTime = 'End time is required.';
    if (form.startTime && form.endTime && form.endTime <= form.startTime) {
      next.endTime = 'End time must be after start time.';
    }

    const service = providerServices.find((s) => s.id === form.serviceId);
    if (!service) next.serviceId = 'Please select a valid service.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    onAdd(
      {
        serviceId: form.serviceId,
        date: form.date,
        startTime: form.startTime,
        endTime: form.endTime,
        status: form.status,
      },
      service!,
    );
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-ink-900/50"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-slot-title"
          className="w-full max-w-md rounded-2xl bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border-soft px-6 py-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                Availability
              </p>
              <h2 id="add-slot-title" className="mt-0.5 font-display text-lg font-bold text-ink-900">
                Add time slot
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-lg p-1.5 text-ink-400 hover:bg-cream-100 hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-5 px-6 py-5">

              {/* Service */}
              <Field label="Service" error={errors.serviceId}>
                <select
                  ref={firstInputRef}
                  value={form.serviceId}
                  onChange={(e) => set('serviceId', e.target.value)}
                  className={selectClass(!!errors.serviceId)}
                >
                  {providerServices.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Date */}
              <Field label="Date" error={errors.date}>
                <input
                  type="date"
                  value={form.date}
                  min={today}
                  onChange={(e) => set('date', e.target.value)}
                  className={inputClass(!!errors.date)}
                />
              </Field>

              {/* Start + End time */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Start time" error={errors.startTime}>
                  <select
                    value={form.startTime}
                    onChange={(e) => set('startTime', e.target.value)}
                    className={selectClass(!!errors.startTime)}
                  >
                    {TIME_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {formatTime(t)}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="End time" error={errors.endTime}>
                  <select
                    value={form.endTime}
                    onChange={(e) => set('endTime', e.target.value)}
                    className={selectClass(!!errors.endTime)}
                  >
                    {TIME_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {formatTime(t)}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Status */}
              <Field label="Status">
                <select
                  value={form.status}
                  onChange={(e) => set('status', e.target.value as 'available' | 'blocked')}
                  className={selectClass(false)}
                >
                  <option value="available">Available</option>
                  <option value="blocked">Blocked</option>
                </select>
              </Field>

            </div>

            {/* Footer */}
            <div className="flex gap-3 border-t border-border-soft px-6 py-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-pill border border-border-soft bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
              >
                Add slot
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-ink-700">{label}</label>
      {children}
      {error && (
        <p className="text-xs text-error-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function selectClass(hasError: boolean) {
  return cn(
    'w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2',
    hasError ? 'border-error-400' : 'border-border-soft',
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2',
    hasError ? 'border-error-400' : 'border-border-soft',
  );
}
