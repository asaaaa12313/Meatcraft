import { Review } from '@/types';
import { formatDate, cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/24/solid';

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export default function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        'bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-800',
        className
      )}
    >
      {/* 리뷰 내용 */}
      <div className="p-5">
        {/* 별점 */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={cn(
                  'w-5 h-5',
                  index < review.rating
                    ? 'text-yellow-400'
                    : 'text-gray-600'
                )}
              />
            ))}
          </div>
          <span className="ml-2 text-sm font-semibold text-white">
            {review.rating.toFixed(1)}
          </span>
        </div>

        {/* 리뷰 텍스트 */}
        <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
          {review.content}
        </p>

        {/* 리뷰 작성자 및 날짜 */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {review.author.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-white">
              {review.author}
            </span>
          </div>

          <time className="text-xs text-gray-400">
            {formatDate(review.date)}
          </time>
        </div>

        {/* 출처 */}
        {review.source && (
          <div className="mt-3 inline-block">
            <span className="text-xs font-bold text-white bg-[#03C75A] px-2 py-1 rounded">
              {review.source}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
