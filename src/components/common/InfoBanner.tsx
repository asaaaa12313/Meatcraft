import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface InfoBannerProps {
  title?: string;
  message: ReactNode;
  variant?: 'info' | 'warning' | 'success' | 'error';
  icon?: ReactNode;
  className?: string;
}

export default function InfoBanner({
  title,
  message,
  variant = 'info',
  icon,
  className,
}: InfoBannerProps) {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  const iconColors = {
    info: 'text-blue-500',
    warning: 'text-yellow-500',
    success: 'text-green-500',
    error: 'text-red-500',
  };

  return (
    <div
      className={cn(
        'rounded-lg border p-4 md:p-5',
        variants[variant],
        className
      )}
    >
      <div className="flex items-start space-x-3">
        {/* 아이콘 */}
        <div className={cn('flex-shrink-0 mt-0.5', iconColors[variant])}>
          {icon || <InformationCircleIcon className="w-6 h-6" />}
        </div>

        {/* 내용 */}
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-1 text-sm md:text-base">
              {title}
            </h4>
          )}
          <div className="text-sm md:text-base leading-relaxed">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
