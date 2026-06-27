export type BookingStatus = 'new' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  reference: string;    // e.g. SF-1001
  serviceId: string;
  providerId: string;
  slotId: string;
  customerName: string;
  contact: string;      // email or phone
  note?: string;
  status: BookingStatus;
  price: number;
  createdAt: string;    // ISO datetime
}