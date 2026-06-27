'use client';

import { cn } from '@/lib/cn';
import { type SelectHTMLAttributes, useId } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

export function Select({
  label,
  error,
  hint,
  options,
  placeholder,
  className,
  id: externalId,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error && errorId, !error && hint && hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-ink-800">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full appearance-none rounded-md border bg-white px-4 py-3 pr-10 text-base text-ink-800',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-yellow-500/35 focus:border-yellow-500',
            error ? 'border-error-500' : 'border-border',
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-ink-400"
          aria-hidden="true"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && (
        <p id={errorId} className="text-sm text-error-500">
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={hintId} className="text-sm text-ink-400">
          {hint}
        </p>
      )}
    </div>
  );
}