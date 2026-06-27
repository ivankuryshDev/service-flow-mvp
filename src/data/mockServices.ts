import type { Service } from '@/types/service';

export const mockServices: Service[] = [
  {
    id: 'svc-1',
    name: 'Laptop Repair',
    category: 'Laptop repair',
    description:
      'Professional diagnosis and repair for all laptop brands and models. From screen replacements to motherboard fixes.',
    durationMinutes: 90,
    priceFrom: 49,
    includes: [
      'Free diagnosis',
      'Part replacement',
      '90-day warranty',
      'Data safety guaranteed',
    ],
  },
  {
    id: 'svc-2',
    name: 'Phone Screen Repair',
    category: 'Phone repair',
    description:
      'Fast, professional screen replacements for iPhone, Samsung, and all major smartphone brands.',
    durationMinutes: 45,
    priceFrom: 39,
    includes: [
      'OEM-quality parts',
      'Same-day service',
      '60-day warranty',
      'Water resistance re-seal',
    ],
  },
  {
    id: 'svc-3',
    name: 'Dental Check-up & Clean',
    category: 'Dental',
    description:
      'Comprehensive dental examination, scale and clean, and personalised oral health advice.',
    durationMinutes: 60,
    priceFrom: 85,
    includes: [
      'Full mouth examination',
      'Scale & polish',
      'X-ray if needed',
      'Treatment plan',
    ],
  },
  {
    id: 'svc-4',
    name: 'Home Deep Clean',
    category: 'Cleaning',
    description:
      'Thorough deep cleaning of your home by experienced, vetted cleaners. Supplies included.',
    durationMinutes: 180,
    priceFrom: 95,
    includes: [
      'All cleaning supplies',
      'Vetted cleaners',
      'Before & after photos',
      'Satisfaction guarantee',
    ],
  },
  {
    id: 'svc-5',
    name: 'Business Consultation',
    category: 'Consultation',
    description:
      'One-on-one consultation with an experienced business advisor. Strategy, finance, or operations.',
    durationMinutes: 60,
    priceFrom: 120,
    includes: [
      'Needs assessment',
      'Action plan',
      'Follow-up email summary',
      'Resource pack',
    ],
  },
  {
    id: 'svc-6',
    name: 'Hair & Style Appointment',
    category: 'Beauty',
    description:
      'Full hair styling appointment including cut, blow-dry, and personalised style consultation.',
    durationMinutes: 75,
    priceFrom: 55,
    includes: [
      'Style consultation',
      'Wash & condition',
      'Cut & blow-dry',
      'Finish & styling tips',
    ],
  },
];