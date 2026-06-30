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
}

export function AvailabilitySlotCard({ item }: AvailabilitySlotCardProps) {
  const { slot, service } = item;
  return (
    <div className="flex items-center gap-4 px-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="font-mono text-sm font-semibold text-ink-900">
          {formatTime(slot.startTime)} – {formatTime(slot.endTime)}
        </p>
        <p className="text-xs text-ink-400 mt-0.5">{service.name}</p>
        <p className="font-mono text-xs text-ink-300 mt-0.5">{slot.id}</p>
      </div>
      <Badge variant={slot.status} />
    </div>
  );
}
