import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Review } from '@/types';
import { Card } from '@/components/common/Card';
import { formatDate } from '@/lib/utils';

interface ReviewCardProps {
    review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
    return (
        <Card className="p-6 h-full flex flex-col">
            <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`h-5 w-5 ${i < review.rating ? 'text-[#D4AF37]' : 'text-gray-200'
                                }`}
                        />
                    ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                    {formatDate(review.date)}
                </span>
            </div>
            <p className="text-gray-700 mb-4 flex-grow line-clamp-4">
                {review.content}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="font-medium text-gray-900">{review.author}</span>
                {review.source && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {review.source}
                    </span>
                )}
            </div>
        </Card>
    );
}
