import type { Provider } from '@/types/service';

export const mockProviders: Provider[] = [
  {
    id: 'prv-1',
    name: 'Dublin Laptop Care',
    serviceIds: ['svc-1'],
    rating: 4.9,
    reviewsCount: 214,
    location: 'Dublin 2',
    address: '14 Grafton Quarter, Dublin 2',
    shortDescription:
      'Award-winning repair shop specialising in all major laptop brands. Same-day repairs available.',
  },
  {
    id: 'prv-2',
    name: 'FixIt Fast Dublin',
    serviceIds: ['svc-1', 'svc-2'],
    rating: 4.7,
    reviewsCount: 318,
    location: 'Dublin 1',
    address: '9 Henry Street, Dublin 1',
    shortDescription:
      "Dublin's fastest repair service. Phones and laptops fixed while you wait.",
  },
  {
    id: 'prv-3',
    name: 'PhoneClinic Rathmines',
    serviceIds: ['svc-2'],
    rating: 4.8,
    reviewsCount: 162,
    location: 'Rathmines',
    address: '22 Rathmines Road Upper, Dublin 6',
    shortDescription:
      'Specialist phone repair clinic. All models, all brands, genuine parts.',
  },
  {
    id: 'prv-4',
    name: 'Smile Dental Studio',
    serviceIds: ['svc-3'],
    rating: 4.9,
    reviewsCount: 89,
    location: 'Ballsbridge',
    address: '5 Pembroke Road, Dublin 4',
    shortDescription:
      'Modern dental practice offering gentle, comprehensive care for the whole family.',
  },
  {
    id: 'prv-5',
    name: 'SparklePro Cleaning',
    serviceIds: ['svc-4'],
    rating: 4.6,
    reviewsCount: 243,
    location: 'Dublin 8',
    address: 'Serving all Dublin areas',
    shortDescription:
      'Trusted home cleaning service. Vetted, insured cleaners with 5-star reviews.',
  },
  {
    id: 'prv-6',
    name: 'Business Edge Advisors',
    serviceIds: ['svc-5'],
    rating: 5.0,
    reviewsCount: 47,
    location: 'Dublin 2',
    address: '31 Merrion Square, Dublin 2',
    shortDescription:
      'Experienced business consultants helping SMEs grow. Former founders and CFOs on the team.',
  },
  {
    id: 'prv-7',
    name: 'Studio Noir',
    serviceIds: ['svc-6'],
    rating: 4.8,
    reviewsCount: 178,
    location: 'Ranelagh',
    address: '18 Ranelagh Road, Dublin 6',
    shortDescription:
      'Premium hair salon specialising in cuts, colour, and styling for all hair types.',
  },
  {
    id: 'prv-8',
    name: 'The Cut Room',
    serviceIds: ['svc-6'],
    rating: 4.7,
    reviewsCount: 134,
    location: 'Dún Laoghaire',
    address: "7 Upper George's Street, Dún Laoghaire",
    shortDescription:
      'Creative salon with expert stylists. Walk-ins welcome, appointments preferred.',
  },
];