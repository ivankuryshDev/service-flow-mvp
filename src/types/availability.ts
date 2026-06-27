export type SlotStatus = 'available' | 'booked' | 'blocked' | 'unavailable';

export interface AvailabilitySlot {
  id: string;
  providerId: string;
  serviceId: string;
  date: string;       // YYYY-MM-DD
  startTime: string;  // HH:mm
  endTime: string;    // HH:mm
  status: SlotStatus;
}