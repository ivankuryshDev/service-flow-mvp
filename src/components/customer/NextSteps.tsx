const steps = [
  {
    number: 1,
    title: "You're confirmed",
    description: 'Your slot is reserved. No further action needed — just show up.',
  },
  {
    number: 2,
    title: 'Arrive ready',
    description: 'Arrive a few minutes early and bring anything relevant to your appointment.',
  },
  {
    number: 3,
    title: 'Leave a review',
    description: 'After your service, share your experience to help others find great providers.',
  },
] as const;

export function NextSteps() {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">After this</p>
      <h2 className="mt-1 font-display text-xl font-bold text-ink-900">What happens next</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col gap-3 rounded-xl border border-border-soft bg-white p-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-ink-900">
              {step.number}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
