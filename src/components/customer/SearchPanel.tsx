'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';

interface DateOption {
  iso: string;
  weekday: string;
  day: string;
}

interface DatePickerState {
  dates: DateOption[];
  selectedDate: string;
}

const categoryOptions = [
  { value: 'Laptop repair', label: 'Laptop Repair' },
  { value: 'Phone repair',  label: 'Phone Repair' },
  { value: 'Dental',        label: 'Dental' },
  { value: 'Cleaning',      label: 'Cleaning' },
  { value: 'Consultation',  label: 'Consultation' },
  { value: 'Beauty',        label: 'Hair & Beauty' },
];

export function SearchPanel() {
  const [location, setLocation] = useState('');
  const [datePicker, setDatePicker] = useState<DatePickerState>({ dates: [], selectedDate: '' });

  useEffect(() => {
    const today = new Date();
    const built = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return {
        iso: d.toISOString().split('T')[0],
        weekday:
          i === 0
            ? 'TODAY'
            : d.toLocaleDateString('en-IE', { weekday: 'short' }).toUpperCase(),
        day: String(d.getDate()),
      };
    });
    // Dates are computed client-side only to avoid SSR/hydration date mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDatePicker({ dates: built, selectedDate: built[0].iso });
  }, []);

  const selectDate = (iso: string) =>
    setDatePicker((prev) => ({ ...prev, selectedDate: iso }));

  return (
    <form method="GET" action="/results" className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      {/* Row 1: Service + Location */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Category select */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sf-category" className="text-sm font-medium text-ink-800">
            What do you need?
          </label>
          <select
            id="sf-category"
            name="category"
            defaultValue=""
            className="w-full appearance-none rounded-md border border-border bg-white px-4 py-3 text-base text-ink-800 transition-colors focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/35"
          >
            <option value="" disabled>
              Select a service
            </option>
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sf-location" className="text-sm font-medium text-ink-800">
            Location
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
            </svg>
            <input
              id="sf-location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              className="w-full rounded-md border border-border bg-white py-3 pl-10 pr-4 text-base text-ink-800 placeholder:text-ink-400 transition-colors focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/35"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Date picker */}
      {datePicker.dates.length > 0 && (
        <div className="mt-5">
          <p className="mb-3 text-sm font-medium text-ink-800">When works for you?</p>
          <div className="flex flex-wrap gap-2">
            {datePicker.dates.map((d) => (
              <button
                key={d.iso}
                type="button"
                onClick={() => selectDate(d.iso)}
                aria-pressed={datePicker.selectedDate === d.iso}
                className={cn(
                  'flex min-w-[3.5rem] flex-col items-center rounded-lg border px-3 py-2 transition-colors duration-150',
                  datePicker.selectedDate === d.iso
                    ? 'border-yellow-400 bg-yellow-400 font-semibold text-ink-900'
                    : 'border-border-soft bg-white text-ink-700 hover:border-yellow-300',
                )}
              >
                <span className="text-[10px] font-medium leading-none">{d.weekday}</span>
                <span className="mt-0.5 text-base font-bold leading-none">{d.day}</span>
              </button>
            ))}
          </div>
          <input type="hidden" name="date" value={datePicker.selectedDate} />
        </div>
      )}

      {/* Row 3: Hint + Submit */}
      <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-400">
          Free to change up to 24 hours before. No booking fees.
        </p>
        <button
          type="submit"
          disabled={!location.trim()}
          className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-yellow-400 px-6 py-3 text-base font-semibold text-ink-900 shadow-sm transition-all hover:bg-yellow-500 hover:shadow-md active:bg-yellow-600 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m21 21-4-4" />
          </svg>
          Find services
        </button>
      </div>
    </form>
  );
}
