import { Card } from '@/components/ui/Card';
import type { Service, Provider } from '@/types/service';

interface BookingSummaryCardProps {
  service: Service;
  provider: Provider;
  slotDateLabel: string;
  slotTimeLabel: string;
  slotEndLabel: string;
  customerName: string;
  contact: string;
  note?: string;
}

export function BookingSummaryCard({
  service,
  provider,
  slotDateLabel,
  slotTimeLabel,
  slotEndLabel,
  customerName,
  contact,
  note,
}: BookingSummaryCardProps) {
  return (
    <Card padding="none" className="overflow-hidden">
      {/* Card header */}
      <div className="bg-ink-900 px-6 py-4">
        <p className="text-xs font-medium uppercase tracking-wide text-yellow-400">Booking summary</p>
        <p className="mt-1 font-display text-lg font-bold text-white">{service.name}</p>
      </div>

      {/* Detail rows */}
      <div className="divide-y divide-border-soft">
        {/* Service */}
        <div className="flex items-center gap-3 px-6 py-3.5">
          <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>
          <span className="shrink-0 text-sm text-ink-400">Service</span>
          <span className="ml-auto text-right text-sm font-medium text-ink-800">
            {service.name}
            <span className="ml-1.5 inline-flex items-center rounded-pill bg-cream-100 px-2 py-0.5 text-xs text-ink-500">
              {service.category}
            </span>
          </span>
        </div>

        {/* Provider */}
        <div className="flex items-center gap-3 px-6 py-3.5">
          <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <span className="shrink-0 text-sm text-ink-400">Provider</span>
          <span className="ml-auto text-right text-sm font-medium text-ink-800">
            {provider.name}
            <span className="ml-1.5 inline-flex items-center rounded-pill bg-success-100 px-2 py-0.5 text-xs text-success-700">
              Verified
            </span>
          </span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-3 px-6 py-3.5">
          <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <span className="shrink-0 text-sm text-ink-400">Date</span>
          <span className="ml-auto font-mono text-sm font-medium text-ink-800">{slotDateLabel}</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3 px-6 py-3.5">
          <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="shrink-0 text-sm text-ink-400">Time</span>
          <span className="ml-auto font-mono text-sm font-medium text-ink-800">
            {slotTimeLabel} – {slotEndLabel}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 px-6 py-3.5">
          <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
          </svg>
          <span className="shrink-0 text-sm text-ink-400">Location</span>
          <span className="ml-auto text-right text-sm font-medium text-ink-800">{provider.address}</span>
        </div>

        {/* Customer */}
        <div className="flex items-center gap-3 px-6 py-3.5">
          <svg className="h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span className="shrink-0 text-sm text-ink-400">Contact</span>
          <span className="ml-auto text-right text-sm font-medium text-ink-800">
            {customerName} · {contact}
          </span>
        </div>

        {/* Note (optional) */}
        {note && (
          <div className="flex items-start gap-3 px-6 py-3.5">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <div>
              <span className="text-sm text-ink-400">Note</span>
              <p className="mt-0.5 text-sm italic text-ink-500">{note}</p>
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between bg-cream-50 px-6 py-4">
          <span className="text-sm text-ink-500">Total from</span>
          <span className="font-display text-2xl font-bold text-ink-900">€{service.priceFrom}</span>
        </div>
      </div>
    </Card>
  );
}
