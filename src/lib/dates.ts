import type { AvailabilitySlot } from '@/types/availability';

export function formatSlotLabel(slot: AvailabilitySlot, today: string): string {
  const todayDate = new Date(today + 'T00:00:00');
  const tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().slice(0, 10);

  const timeLabel = formatTime(slot.startTime);

  if (slot.date === today) return `Today ${timeLabel}`;
  if (slot.date === tomorrow) return `Tomorrow ${timeLabel}`;

  const date = new Date(slot.date + 'T00:00:00');
  const weekday = date.toLocaleDateString('en-IE', { weekday: 'short' });
  const day = date.getDate();
  const month = date.toLocaleDateString('en-IE', { month: 'short' });
  return `${weekday} ${day} ${month}`;
}

export function formatDateLabel(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-IE', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

export function formatTime(time: string): string {
  const [hourStr, minuteStr] = time.split(':');
  const hour = parseInt(hourStr, 10);
  const period = hour >= 12 ? 'PM' : 'AM';
  const h = hour % 12 || 12;
  return `${h}:${minuteStr} ${period}`;
}