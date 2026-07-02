import { Card } from '@/components/ui/Card';
import { AvailabilitySlotCard } from './AvailabilitySlotCard';
import type { EnrichedSlot } from './AvailabilitySlotCard';

export interface DayGroup {
  date: string;
  dateLabel: string;
  isPast: boolean;
  isToday: boolean;
  slots: EnrichedSlot[];
}

interface AvailabilityDayGroupProps {
  group: DayGroup;
  onBlock?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export function AvailabilityDayGroup({ group, onBlock, onRemove }: AvailabilityDayGroupProps) {
  const headingColor = group.isPast ? 'text-ink-400' : 'text-ink-800';

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h2 className={`font-display text-base font-semibold ${headingColor}`}>
          {group.dateLabel}
        </h2>
        {group.isToday && (
          <span className="rounded-pill bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
            Today
          </span>
        )}
        <span className="text-xs text-ink-400">
          {group.slots.length} {group.slots.length === 1 ? 'slot' : 'slots'}
        </span>
      </div>
      <Card padding="none" className="divide-y divide-border-soft overflow-hidden">
        {group.slots.map((item) => (
          <AvailabilitySlotCard
            key={item.slot.id}
            item={item}
            onBlock={onBlock}
            onRemove={onRemove}
          />
        ))}
      </Card>
    </div>
  );
}
