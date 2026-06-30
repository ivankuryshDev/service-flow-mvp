import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface StatCardProps {
  count: string | number;
  label: string;
  sublabel?: string;
  iconEl: ReactNode;
  iconBg: string;
  iconColor: string;
  dark?: boolean;
  className?: string;
}

function StatCard({ count, label, sublabel, iconEl, iconBg, iconColor, dark, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-xl border p-5 shadow-sm',
        dark ? 'bg-ink-900 border-ink-800' : 'bg-white border-border-soft',
        className,
      )}
    >
      <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', iconBg, iconColor)}>
        {iconEl}
      </div>
      <div>
        <p className={cn('font-display text-3xl font-bold', dark ? 'text-white' : 'text-ink-900')}>
          {count}
        </p>
        <p className={cn('mt-0.5 text-sm font-medium', dark ? 'text-ink-300' : 'text-ink-500')}>
          {label}
        </p>
        {sublabel && (
          <p className={cn('text-xs', dark ? 'text-ink-400' : 'text-ink-400')}>
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}

interface StatsGridProps {
  newCount: number;
  confirmedCount: number;
  completedCount: number;
  cancelledCount: number;
  totalValue: number;
}

export function StatsGrid({
  newCount,
  confirmedCount,
  completedCount,
  cancelledCount,
  totalValue,
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      <StatCard
        count={newCount}
        label="New"
        sublabel="Awaiting action"
        iconBg="bg-yellow-100"
        iconColor="text-yellow-700"
        iconEl={
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
          </svg>
        }
      />

      <StatCard
        count={confirmedCount}
        label="Confirmed"
        iconBg="bg-success-100"
        iconColor="text-success-700"
        iconEl={
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        }
      />

      <StatCard
        count={completedCount}
        label="Completed"
        iconBg="bg-cream-200"
        iconColor="text-ink-600"
        iconEl={
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        }
      />

      <StatCard
        count={cancelledCount}
        label="Cancelled"
        iconBg="bg-error-100"
        iconColor="text-error-700"
        iconEl={
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        }
      />

      <StatCard
        count={`€${totalValue}`}
        label="Booking value"
        sublabel="Active bookings"
        iconBg="bg-white/10"
        iconColor="text-yellow-400"
        dark
        className="col-span-2 sm:col-span-1"
        iconEl={
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        }
      />
    </div>
  );
}
