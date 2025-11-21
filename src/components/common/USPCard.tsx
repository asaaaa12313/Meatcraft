import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface USPCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function USPCard({
  icon,
  title,
  description,
  className,
}: USPCardProps) {
  return (
    <div
      className={cn(
        'group p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200',
        className
      )}
    >
      <div className="flex flex-col items-center text-center">
        {/* 아이콘 */}
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-100 transition-colors">
          {icon}
        </div>

        {/* 제목 */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* 설명 */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
