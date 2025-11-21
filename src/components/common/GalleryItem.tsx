import Image from 'next/image';
import { GalleryImage } from '@/types';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  image: GalleryImage;
  onClick?: () => void;
  className?: string;
}

export default function GalleryItem({
  image,
  onClick,
  className,
}: GalleryItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100',
        className
      )}
    >
      {/* 이미지 */}
      <div className="relative w-full aspect-square">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            {image.title && (
              <h3 className="text-white font-bold text-lg md:text-xl mb-2 text-center">
                {image.title}
              </h3>
            )}
            {image.description && (
              <p className="text-white/90 text-sm text-center">
                {image.description}
              </p>
            )}
          </div>
        </div>

        {/* 카테고리 뱃지 */}
        {image.category && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full shadow-md">
            {image.category}
          </div>
        )}
      </div>
    </div>
  );
}
