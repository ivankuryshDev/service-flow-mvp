'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

const navLinks = [{ label: 'Find services', href: '/results' }];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border-soft">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-sm"
          >
            <span className="h-4 w-4 rounded-sm bg-yellow-400" aria-hidden="true" />
            <span className="font-display font-bold text-lg text-ink-900 tracking-tight">
              ServiceFlow
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'text-sm transition-colors duration-150',
                    isActive
                      ? 'text-ink-900 font-semibold'
                      : 'text-ink-500 hover:text-ink-800',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/business"
              className="inline-flex items-center rounded-pill border border-border px-4 py-2 text-sm text-ink-800 transition-colors duration-150 hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              Business area
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink-500 hover:bg-cream-100 hover:text-ink-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-border-soft bg-white">
          <Container>
            <nav className="flex flex-col gap-1 py-3" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm transition-colors duration-150',
                      isActive
                        ? 'bg-cream-100 text-ink-900 font-semibold'
                        : 'text-ink-600 hover:bg-cream-50 hover:text-ink-900',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/business"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-md px-3 py-2 text-sm text-ink-500 hover:bg-cream-50 hover:text-ink-900 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              >
                Business area
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}