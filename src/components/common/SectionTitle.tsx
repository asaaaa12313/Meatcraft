import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-[#8B4513] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg font-semibold text-[#D4AF37]">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-20 bg-[#D4AF37]",
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  );
}
