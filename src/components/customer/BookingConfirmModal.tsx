'use client';

import { useEffect, useRef } from 'react';

interface BookingConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  serviceName: string;
  providerName: string;
  dateLabel: string;
  timeLabel: string;
  price: number;
  customerName: string;
  contact: string;
}

export function BookingConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  serviceName,
  providerName,
  dateLabel,
  timeLabel,
  price,
  customerName,
  contact,
}: BookingConfirmModalProps) {
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) confirmRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-900/50" aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        className="relative w-full max-w-md rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-border-soft px-6 py-5">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Almost there</p>
          <h2
            id="confirm-modal-title"
            className="mt-1 font-display text-xl font-bold text-ink-900"
          >
            Confirm your booking
          </h2>
        </div>

        {/* Summary rows */}
        <div className="divide-y divide-border-soft px-6">
          <SummaryRow label="Service" value={serviceName} />
          <SummaryRow label="Provider" value={providerName} />
          <SummaryRow label="Date" value={dateLabel} />
          <SummaryRow label="Time" value={timeLabel} mono />
          <SummaryRow label="Name" value={customerName} />
          <SummaryRow label="Contact" value={contact} />
          <div className="flex items-center justify-between py-3.5">
            <span className="text-sm text-ink-500">Total from</span>
            <span className="font-mono text-lg font-bold text-ink-900">€{price}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-pill border border-border-soft bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
          >
            Back
          </button>
          <button
            ref={confirmRef}
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
          >
            Confirm booking
          </button>
        </div>

        <p className="pb-5 text-center text-xs text-ink-400">
          Confirmed instantly · free to change up to 24h before
        </p>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3.5">
      <span className="text-sm text-ink-500">{label}</span>
      <span className={mono ? 'font-mono text-sm font-medium text-ink-800' : 'text-sm font-medium text-ink-800'}>
        {value}
      </span>
    </div>
  );
}
