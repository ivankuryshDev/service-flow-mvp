import { Badge } from '@/components/ui/Badge';
import { formatTime } from '@/lib/dates';
import type { AvailabilitySlot } from '@/types/availability';
import type { Service } from '@/types/service';

export interface EnrichedSlot {
  slot: AvailabilitySlot;
  service: Service;
}

interface AvailabilitySlotCardProps {
  item: EnrichedSlot;
  onBlock?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export function AvailabilitySlotCard({ item, onBlock, onRemove }: AvailabilitySlotCardProps) {
  const { slot, service } = item;
  const isDemo = slot.id.startsWith('demo-');

  return (
    <div className="flex items-center gap-4 px-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="font-mono text-sm font-semibold text-ink-900">
          {formatTime(slot.startTime)} – {formatTime(slot.endTime)}
        </p>
        <p className="text-xs text-ink-400 mt-0.5">{service.name}</p>
        <p className="font-mono text-xs text-ink-300 mt-0.5">{slot.id}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Badge variant={slot.status} />

        {onBlock && slot.status === 'available' && (
          <button
            type="button"
            onClick={() => onBlock(slot.id)}
            className="text-xs font-medium text-ink-400 hover:text-ink-700 focus-visible:outline-none focus-visible:underline"
          >
            Block
          </button>
        )}

        {onRemove && isDemo && (
          <button
            type="button"
            onClick={() => onRemove(slot.id)}
            className="text-xs font-medium text-error-500 hover:text-error-700 focus-visible:outline-none focus-visible:underline"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
