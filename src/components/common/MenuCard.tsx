import Image from 'next/image';
import { MenuItem } from '@/types';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

export default function MenuCard({ item, className }: MenuCardProps) {
  return (
    <div
      className={cn(
        'group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200',
        className
      )}
    >
      {/* 이미지 */}
      {item.image && (
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {item.badge && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full shadow-md">
              {item.badge}
            </div>
          )}
        </div>
      )}

      {/* 내용 */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {item.name}
        </h3>

        {item.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {item.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          {/* 단위 */}
          {item.unit && (
            <span className="text-sm text-gray-500">{item.unit}</span>
          )}

          {/* 가격 */}
          <div className="text-primary-600 font-bold text-lg md:text-xl">
            {formatPrice(item.price)}
          </div>
        </div>

        {/* 추가 정보 */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
