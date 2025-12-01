'use client';

import { useState } from 'react';
import ReviewCard from '@/components/common/ReviewCard';
import { Button } from '@/components/common/Button';
import { Review } from '@/types';

interface ReviewListProps {
    initialReviews: Review[];
}

export function ReviewList({ initialReviews }: ReviewListProps) {
    const [visibleCount, setVisibleCount] = useState(10);
    const visibleReviews = initialReviews.slice(0, visibleCount);
    const hasMore = visibleCount < initialReviews.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {visibleReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>

            {hasMore && (
                <div className="text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={handleLoadMore}
                        className="min-w-[200px]"
                    >
                        더 보러가기
                    </Button>
                </div>
            )}
        </div>
    );
}
