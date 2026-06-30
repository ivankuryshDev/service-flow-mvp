import { formatDuration } from '@/lib/formatters';
import type { Service } from '@/types/service';

interface ServiceIncludesProps {
  service: Service;
}

export function ServiceIncludes({ service }: ServiceIncludesProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border-soft bg-white p-6 sm:p-8">
      {/* What's included */}
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">The details</p>
        <h2 className="mt-1 font-display text-xl font-bold text-ink-900">What&apos;s included</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-success-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Meta tiles */}
      <div className="grid grid-cols-1 gap-4 border-t border-border-soft pt-6 sm:grid-cols-3">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Duration</p>
            <p className="text-sm text-ink-500">{formatDuration(service.durationMinutes)}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Free cancellation</p>
            <p className="text-sm text-ink-500">Up to 24 hours before</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Verified provider</p>
            <p className="text-sm text-ink-500">Identity &amp; insurance checked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
