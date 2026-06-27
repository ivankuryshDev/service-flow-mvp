'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

const navItems = [
  {
    label: 'Dashboard',
    href: '/business',
    exact: true,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
      </svg>
    ),
  },
  {
    label: 'Bookings',
    href: '/business/bookings',
    exact: false,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
  {
    label: 'Availability',
    href: '/business/availability',
    exact: false,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
];

export function BusinessSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border-soft bg-white">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-border-soft">
        <span className="h-4 w-4 rounded-sm bg-yellow-400 shrink-0" aria-hidden="true" />
        <span className="font-display font-bold text-base text-ink-900 tracking-tight leading-none">
          ServiceFlow
        </span>
        <span className="ml-auto rounded-pill bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
          Business
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 p-3 flex-1" aria-label="Business navigation">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150',
                isActive
                  ? 'bg-cream-100 text-ink-900 font-semibold'
                  : 'text-ink-500 hover:bg-cream-50 hover:text-ink-800',
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border-soft p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-ink-400 hover:text-ink-700 transition-colors duration-150"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Customer view
        </Link>
      </div>
    </aside>
  );
}