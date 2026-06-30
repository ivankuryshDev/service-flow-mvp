interface BookingsHeaderProps {
  businessName: string;
  totalCount: number;
}

export function BookingsHeader({ businessName, totalCount }: BookingsHeaderProps) {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Bookings</h1>
      <p className="mt-1 text-sm text-ink-500">
        {businessName} · {totalCount} total
      </p>
    </div>
  );
}
