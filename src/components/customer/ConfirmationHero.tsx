interface ConfirmationHeroProps {
  bookingRef: string;
  serviceName: string;
  providerName: string;
}

export function ConfirmationHero({ bookingRef, serviceName, providerName }: ConfirmationHeroProps) {
  return (
    <div className="flex flex-col items-center gap-5 py-8 text-center sm:py-12">
      {/* Success halo */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success-100">
        <svg
          className="h-10 w-10 text-success-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>

      {/* Status + headline */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-success-700">
          Booking confirmed
        </p>
        <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
          You&apos;re all booked.
        </h1>
        <p className="mt-1 text-base text-ink-500">
          Your <span className="font-medium text-ink-800">{serviceName}</span> with{' '}
          <span className="font-medium text-ink-800">{providerName}</span> is confirmed.
        </p>
      </div>

      {/* Reference chip */}
      <div className="inline-flex items-center gap-2 rounded-pill bg-cream-100 px-4 py-2">
        <span className="text-xs text-ink-400">Booking reference</span>
        <span className="font-mono text-sm font-medium text-ink-900">{bookingRef}</span>
      </div>
    </div>
  );
}
