import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';
import { Header } from './Header';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={cn('flex-1', className)}>{children}</main>
    </div>
  );
}