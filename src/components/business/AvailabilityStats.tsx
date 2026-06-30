interface Counts {
  available: number;
  booked: number;
  blocked: number;
  unavailable: number;
}

interface AvailabilityStatsProps {
  counts: Counts;
}

const chips = [
  { key: 'available' as const,   label: 'Available',   className: 'bg-success-100 text-success-700' },
  { key: 'booked' as const,      label: 'Booked',      className: 'bg-warning-100 text-warning-700' },
  { key: 'blocked' as const,     label: 'Blocked',     className: 'bg-cream-200 text-ink-500' },
  { key: 'unavailable' as const, label: 'Unavailable', className: 'bg-cream-100 text-ink-300' },
];

export function AvailabilityStats({ counts }: AvailabilityStatsProps) {
  const visible = chips.filter((c) => counts[c.key] > 0);
  if (visible.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((chip) => (
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
