interface BookingsStatsProps {
  counts: {
    new: number;
    confirmed: number;
    completed: number;
    cancelled: number;
  };
}

const chips = [
  { key: 'new',       label: 'New',       className: 'bg-yellow-50 text-yellow-700' },
  { key: 'confirmed', label: 'Confirmed', className: 'bg-success-100 text-success-700' },
  { key: 'completed', label: 'Completed', className: 'bg-cream-100 text-ink-600' },
  { key: 'cancelled', label: 'Cancelled', className: 'bg-error-100 text-error-700' },
] as const;

export function BookingsStats({ counts }: BookingsStatsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip.key}
          className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-medium ${chip.className}`}
        >
          {chip.label}
          <span className="font-semibold tabular-nums">{counts[chip.key]}</span>
        </span>
      ))}
    </div>
  );
}
