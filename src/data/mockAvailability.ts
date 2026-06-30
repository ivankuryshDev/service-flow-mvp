import type { AvailabilitySlot } from '@/types/availability';

export const mockAvailability: AvailabilitySlot[] = [
  // Dublin Laptop Care (prv-1) — Laptop repair (svc-1)
  { id: 'slot-001', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-29', startTime: '09:00', endTime: '10:30', status: 'available' },
  { id: 'slot-002', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-29', startTime: '11:00', endTime: '12:30', status: 'booked' },
  { id: 'slot-003', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-30', startTime: '09:00', endTime: '10:30', status: 'available' },
  { id: 'slot-004', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-30', startTime: '11:00', endTime: '12:30', status: 'available' },
  { id: 'slot-005', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-07-01', startTime: '14:00', endTime: '15:30', status: 'blocked' },
  { id: 'slot-006', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-07-02', startTime: '09:00', endTime: '10:30', status: 'available' },

  // FixIt Fast Dublin (prv-2) — Laptop (svc-1) + Phone (svc-2)
  { id: 'slot-007', providerId: 'prv-2', serviceId: 'svc-1', date: '2026-06-29', startTime: '10:00', endTime: '11:30', status: 'available' },
  { id: 'slot-008', providerId: 'prv-2', serviceId: 'svc-1', date: '2026-06-30', startTime: '13:00', endTime: '14:30', status: 'available' },
  { id: 'slot-009', providerId: 'prv-2', serviceId: 'svc-2', date: '2026-06-29', startTime: '09:00', endTime: '09:45', status: 'booked' },
  { id: 'slot-010', providerId: 'prv-2', serviceId: 'svc-2', date: '2026-06-29', startTime: '10:00', endTime: '10:45', status: 'available' },
  { id: 'slot-011', providerId: 'prv-2', serviceId: 'svc-2', date: '2026-06-30', startTime: '11:00', endTime: '11:45', status: 'available' },
  { id: 'slot-012', providerId: 'prv-2', serviceId: 'svc-2', date: '2026-07-01', startTime: '15:00', endTime: '15:45', status: 'available' },

  // PhoneClinic Rathmines (prv-3) — Phone (svc-2)
  { id: 'slot-013', providerId: 'prv-3', serviceId: 'svc-2', date: '2026-06-29', startTime: '09:00', endTime: '09:45', status: 'available' },
  { id: 'slot-014', providerId: 'prv-3', serviceId: 'svc-2', date: '2026-06-29', startTime: '11:00', endTime: '11:45', status: 'available' },
  { id: 'slot-015', providerId: 'prv-3', serviceId: 'svc-2', date: '2026-06-30', startTime: '09:00', endTime: '09:45', status: 'booked' },
  { id: 'slot-016', providerId: 'prv-3', serviceId: 'svc-2', date: '2026-07-02', startTime: '14:00', endTime: '14:45', status: 'available' },

  // Smile Dental Studio (prv-4) — Dental (svc-3)
  { id: 'slot-017', providerId: 'prv-4', serviceId: 'svc-3', date: '2026-06-30', startTime: '09:00', endTime: '10:00', status: 'available' },
  { id: 'slot-018', providerId: 'prv-4', serviceId: 'svc-3', date: '2026-06-30', startTime: '10:30', endTime: '11:30', status: 'booked' },
  { id: 'slot-019', providerId: 'prv-4', serviceId: 'svc-3', date: '2026-07-01', startTime: '14:00', endTime: '15:00', status: 'available' },
  { id: 'slot-020', providerId: 'prv-4', serviceId: 'svc-3', date: '2026-07-03', startTime: '09:00', endTime: '10:00', status: 'available' },

  // SparklePro Cleaning (prv-5) — Cleaning (svc-4)
  { id: 'slot-021', providerId: 'prv-5', serviceId: 'svc-4', date: '2026-06-29', startTime: '09:00', endTime: '12:00', status: 'available' },
  { id: 'slot-022', providerId: 'prv-5', serviceId: 'svc-4', date: '2026-07-01', startTime: '13:00', endTime: '16:00', status: 'available' },
  { id: 'slot-023', providerId: 'prv-5', serviceId: 'svc-4', date: '2026-07-02', startTime: '09:00', endTime: '12:00', status: 'blocked' },

  // Business Edge Advisors (prv-6) — Consultation (svc-5)
  { id: 'slot-024', providerId: 'prv-6', serviceId: 'svc-5', date: '2026-06-30', startTime: '10:00', endTime: '11:00', status: 'available' },
  { id: 'slot-025', providerId: 'prv-6', serviceId: 'svc-5', date: '2026-07-01', startTime: '14:00', endTime: '15:00', status: 'booked' },
  { id: 'slot-026', providerId: 'prv-6', serviceId: 'svc-5', date: '2026-07-02', startTime: '11:00', endTime: '12:00', status: 'available' },

  // Studio Noir (prv-7) — Beauty (svc-6)
  { id: 'slot-027', providerId: 'prv-7', serviceId: 'svc-6', date: '2026-06-29', startTime: '10:00', endTime: '11:15', status: 'available' },
  { id: 'slot-028', providerId: 'prv-7', serviceId: 'svc-6', date: '2026-06-30', startTime: '14:00', endTime: '15:15', status: 'available' },
  { id: 'slot-029', providerId: 'prv-7', serviceId: 'svc-6', date: '2026-07-01', startTime: '11:00', endTime: '12:15', status: 'booked' },

  // The Cut Room (prv-8) — Beauty (svc-6)
  { id: 'slot-030', providerId: 'prv-8', serviceId: 'svc-6', date: '2026-06-29', startTime: '09:00', endTime: '10:15', status: 'available' },
  { id: 'slot-031', providerId: 'prv-8', serviceId: 'svc-6', date: '2026-07-02', startTime: '15:00', endTime: '16:15', status: 'available' },
  { id: 'slot-032', providerId: 'prv-8', serviceId: 'svc-6', date: '2026-07-03', startTime: '10:00', endTime: '11:15', status: 'available' },

  // Dublin Laptop Care (prv-1) — extra past slots for bookings management demo
  { id: 'slot-033', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-24', startTime: '10:00', endTime: '11:30', status: 'booked' },
  { id: 'slot-034', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-25', startTime: '14:00', endTime: '15:30', status: 'booked' },
  { id: 'slot-035', providerId: 'prv-1', serviceId: 'svc-1', date: '2026-06-28', startTime: '09:00', endTime: '10:30', status: 'booked' },
];