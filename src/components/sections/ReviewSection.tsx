'use client';

import Link from 'next/link';
import ReviewCard from '@/components/common/ReviewCard';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/common/Button';
import { getLatestReviews, getAverageRating, getTotalReviewCount } from '@/data/review';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ReviewSection() {
  const latestReviews = getLatestReviews(3);
  const averageRating = getAverageRating();
  const totalCount = getTotalReviewCount();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Customer Reviews"
          title="고객 후기"
          description="맛있는고기에솜씨를더하다를 다녀가신 고객님들의 생생한 후기입니다"
        />

        {/* 평균 평점 */}
        <div className="flex flex-col items-center justify-center mb-12 p-8 bg-white rounded-2xl shadow-md max-w-md mx-auto">
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className="w-8 h-8 text-yellow-400"
              />
            ))}
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-2">
            5.0
          </div>
          <p className="text-gray-600">
            약 811개의 리뷰 5점 만점
          </p>
        </div>

        {/* 리뷰 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {latestReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* 전체 리뷰 보기 버튼 */}
        <div className="text-center">
          <Link href="/review">
            <Button variant="outline" size="lg">
              전체 리뷰 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
