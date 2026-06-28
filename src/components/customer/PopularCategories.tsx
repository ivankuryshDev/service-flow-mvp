import Link from 'next/link';
import { Container } from '@/components/layout/Container';

function LaptopIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ToothIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C9.5 2 7 4 7 7c0 1.5.7 3.2 1.2 4.8.6 1.6.8 3.7.8 5.2 0 1.7.4 3 3 3s3-1.3 3-3c0-1.5.2-3.6.8-5.2C16.3 10.2 17 8.5 17 7c0-3-2.5-5-5-5z" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 15l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9" cy="11" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

const categories = [
  { value: 'Laptop repair', label: 'Laptop Repair', count: '2 providers', icon: <LaptopIcon /> },
  { value: 'Phone repair',  label: 'Phone Repair',  count: '2 providers', icon: <PhoneIcon /> },
  { value: 'Dental',        label: 'Dental',        count: '1 provider',  icon: <ToothIcon /> },
  { value: 'Cleaning',      label: 'Cleaning',      count: '1 provider',  icon: <BrushIcon /> },
  { value: 'Consultation',  label: 'Consultation',  count: '1 provider',  icon: <ChatIcon /> },
  { value: 'Beauty',        label: 'Hair & Beauty', count: '2 providers', icon: <ScissorsIcon /> },
];

export function PopularCategories() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Popular categories
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Browse what&apos;s being booked most right now.
            </p>
          </div>
          <Link
            href="/results"
            className="shrink-0 text-sm font-medium text-yellow-700 hover:underline"
          >
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={`/results?category=${encodeURIComponent(cat.value)}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border-soft bg-white p-5 text-center transition-all duration-150 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
            >
              <span className="text-ink-500 transition-colors group-hover:text-yellow-600">
                {cat.icon}
              </span>
              <span className="text-sm font-medium text-ink-800">{cat.label}</span>
              <span className="text-xs text-ink-400">{cat.count}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
