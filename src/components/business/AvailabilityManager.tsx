'use client';

import { useState, useMemo } from 'react';
import { formatDateLabel } from '@/lib/dates';
import { AvailabilityHeader } from './AvailabilityHeader';
import { AvailabilityStats } from './AvailabilityStats';
import { AvailabilityFilters } from './AvailabilityFilters';
import { AvailabilityDayGroup } from './AvailabilityDayGroup';
import { AvailabilityEmptyState } from './AvailabilityEmptyState';
import { AddSlotModal } from './AddSlotModal';
import type { EnrichedSlot } from './AvailabilitySlotCard';
import type { DayGroup } from './AvailabilityDayGroup';
import type { AvailabilitySlot } from '@/types/availability';
import type { Service } from '@/types/service';

type SlotStatusFilter = 'available' | 'booked' | 'blocked' | 'unavailable';

interface AvailabilityManagerProps {
  initialSlots: EnrichedSlot[];
  initialStatus: SlotStatusFilter | 'all';
  today: string;
  tomorrow: string;
  providerServices: Service[];
  demoProviderId: string;
  businessName: string;
}

export function AvailabilityManager({
  initialSlots,
  initialStatus,
  today,
  tomorrow,
  providerServices,
  demoProviderId,
  businessName,
}: AvailabilityManagerProps) {
  const [slots, setSlots] = useState<EnrichedSlot[]>(initialSlots);
  const [activeStatus, setActiveStatus] = useState<SlotStatusFilter | 'all'>(initialStatus);
  const [modalOpen, setModalOpen] = useState(false);

  const counts = useMemo(
    () => ({
      all:         slots.length,
      available:   slots.filter((s) => s.slot.status === 'available').length,
      booked:      slots.filter((s) => s.slot.status === 'booked').length,
      blocked:     slots.filter((s) => s.slot.status === 'blocked').length,
      unavailable: slots.filter((s) => s.slot.status === 'unavailable').length,
    }),
    [slots],
  );

  const filtered = useMemo(
    () =>
      activeStatus === 'all'
        ? slots
        : slots.filter((s) => s.slot.status === activeStatus),
    [slots, activeStatus],
  );

  const dayGroups = useMemo<DayGroup[]>(() => {
    const sorted = [...filtered].sort(
      (a, b) =>
        a.slot.date.localeCompare(b.slot.date) ||
        a.slot.startTime.localeCompare(b.slot.startTime),
    );
    const grouped = new Map<string, EnrichedSlot[]>();
    for (const item of sorted) {
      const bucket = grouped.get(item.slot.date) ?? [];
      grouped.set(item.slot.date, bucket);
      bucket.push(item);
    }
    return Array.from(grouped.entries()).map(([date, items]) => ({
      date,
      dateLabel:
        date === today ? 'Today' : date === tomorrow ? 'Tomorrow' : formatDateLabel(date),
      isPast: date < today,
      isToday: date === today,
      slots: items,
    }));
  }, [filtered, today, tomorrow]);

  const handleAdd = (
    slotData: Omit<AvailabilitySlot, 'id' | 'providerId'>,
    service: Service,
  ) => {
    const newItem: EnrichedSlot = {
      slot: {
        id: `demo-${Date.now()}`,
        providerId: demoProviderId,
        ...slotData,
      },
      service,
    };
    setSlots((prev) => [...prev, newItem]);
  };

  const handleBlock = (id: string) =>
    setSlots((prev) =>
      prev.map((s) =>
        s.slot.id === id ? { ...s, slot: { ...s.slot, status: 'blocked' } } : s,
      ),
    );

  const handleRemove = (id: string) =>
    setSlots((prev) => prev.filter((s) => s.slot.id !== id));

  return (
    <>
      <AvailabilityHeader
        businessName={businessName}
        totalCount={slots.length}
        onAddSlot={() => setModalOpen(true)}
      />

      <AvailabilityStats counts={counts} />

      <AvailabilityFilters
        activeStatus={activeStatus}
        counts={counts}
        onStatusChange={(s) => setActiveStatus(s as SlotStatusFilter | 'all')}
      />

      {dayGroups.length === 0 ? (
        <AvailabilityEmptyState
          activeStatus={activeStatus}
          onClearFilter={() => setActiveStatus('all')}
        />
      ) : (
        dayGroups.map((group) => (
          <AvailabilityDayGroup
            key={group.date}
            group={group}
            onBlock={handleBlock}
            onRemove={handleRemove}
          />
        ))
      )}

      {modalOpen && (
        <AddSlotModal
          onClose={() => setModalOpen(false)}
          onAdd={handleAdd}
          providerServices={providerServices}
          today={today}
        />
      )}
    </>
  );
}
