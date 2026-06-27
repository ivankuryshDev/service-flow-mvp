export type ServiceCategory =
  | 'Laptop repair'
  | 'Phone repair'
  | 'Dental'
  | 'Cleaning'
  | 'Consultation'
  | 'Beauty';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number;
  priceFrom: number;
  includes: string[];
}

export interface Provider {
  id: string;
  name: string;
  serviceIds: string[];
  rating: number;
  reviewsCount: number;
  location: string;
  address: string;
  shortDescription: string;
}