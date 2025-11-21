import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  align?: 'left' | 'center' | 'right';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  variant = 'light',
  className,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const textColors = {
    light: {
      subtitle: 'text-secondary-500',
      title: 'text-gray-900',
      description: 'text-gray-600',
    },
    dark: {
      subtitle: 'text-secondary-300',
      title: 'text-white',
      description: 'text-gray-200',
    },
  };

  const colors = textColors[variant];

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)}>
      {subtitle && (
        <div className={cn('font-semibold text-sm md:text-base mb-2 tracking-wide uppercase', colors.subtitle)}>
          {subtitle}
        </div>
      )}
      <h2 className={cn('text-3xl md:text-4xl lg:text-5xl font-bold mb-4', colors.title)}>
        {title}
      </h2>
      {description && (
        <p className={cn('text-base md:text-lg max-w-2xl mx-auto', colors.description)}>
          {description}
        </p>
      )}
    </div>
  );
}
