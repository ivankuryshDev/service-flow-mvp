'use client';

import { cn } from '@/lib/cn';
import { type InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  className,
  id: externalId,
  ...props
}: InputProps) {
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
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          'w-full rounded-md border bg-white px-4 py-3 text-base text-ink-800',
          'placeholder:text-ink-400',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-yellow-500/35 focus:border-yellow-500',
          error ? 'border-error-500' : 'border-border',
          className,
        )}
        {...props}
      />
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