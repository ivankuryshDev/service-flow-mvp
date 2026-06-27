import { cn } from '@/lib/cn';
import type { BookingStatus } from '@/types/booking';
import type { SlotStatus } from '@/types/availability';

type BadgeVariant = BookingStatus | SlotStatus;

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  new: 'bg-yellow-50 text-yellow-700',
  confirmed: 'bg-success-100 text-success-700',
  completed: 'bg-cream-100 text-ink-600',
  cancelled: 'bg-error-100 text-error-700',
  available: 'bg-success-100 text-success-700',
  booked: 'bg-warning-100 text-warning-700',
  blocked: 'bg-cream-200 text-ink-500',
  unavailable: 'bg-cream-100 text-ink-300',
};

const variantLabels: Record<BadgeVariant, string> = {
  new: 'New',
  confirmed: 'Confirmed',
  completed: 'Completed',
  cancelled: 'Cancelled',
  available: 'Available',
  booked: 'Booked',
  blocked: 'Blocked',
  unavailable: 'Unavailable',
};

export function Badge({ variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {variantLabels[variant]}
    </span>
  );
}