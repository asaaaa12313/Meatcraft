import SectionTitle from '@/components/common/SectionTitle';
import ReviewCard from '@/components/common/ReviewCard';
import { reviewData, getAverageRating, getTotalReviewCount, getPhotoReviews } from '@/data/review';
import { Metadata } from 'next';
import { StarIcon } from '@heroicons/react/24/solid';
import { STORE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: '고객 후기',
  description: '맛있는고기에솜씨를더하다를 다녀가신 고객님들의 생생한 후기',
};

export default function ReviewPage() {
  const averageRating = getAverageRating();
  const totalCount = getTotalReviewCount();
  const photoReviews = getPhotoReviews();

  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">고객 후기</h1>
          <p className="text-xl md:text-2xl">생생한 방문 후기를 확인하세요</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 평균 평점 섹션 */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-50 to-secondary-50 rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-10 h-10 md:w-12 md:h-12 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
              {averageRating}
            </div>
            <p className="text-xl text-gray-800 font-medium mb-6">
              {totalCount}개의 리뷰 평균
            </p>
            <a
              href={STORE_INFO.naverPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              네이버 플레이스에서 더 보기
            </a>
          </div>
        </section>

        {/* 포토 리뷰 */}
        {photoReviews.length > 0 && (
          <section className="mb-16">
            <SectionTitle
              title="포토 리뷰"
              subtitle="Photo Reviews"
              description="고객님들이 직접 찍은 생생한 사진들"
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {photoReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}

        {/* 전체 리뷰 */}
        <section>
          <SectionTitle
            title="전체 리뷰"
            subtitle="All Reviews"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviewData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        {/* 리뷰 작성 안내 */}
        <div className="mt-16 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl text-center">
          <h3 className="font-bold text-xl mb-3">방문 후기를 남겨주세요!</h3>
          <p className="text-gray-800 font-medium mb-6">
            소중한 후기는 저희에게 큰 힘이 됩니다.<br />
            네이버 플레이스 또는 네이버 예약을 통해 리뷰를 남겨주시면 감사하겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={STORE_INFO.naverPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              네이버 플레이스 리뷰 작성
            </a>
            <a
              href={STORE_INFO.naverBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-semibold"
            >
              네이버 예약 리뷰 작성
            </a>
          </div>
        </div>

        {/* 리뷰 통계 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {reviewData.filter(r => r.rating === 5).length}
            </div>
            <div className="text-sm text-gray-800 font-medium">⭐ 5점 리뷰</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {photoReviews.length}
            </div>
            <div className="text-sm text-gray-800 font-medium">📷 포토 리뷰</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {averageRating}
            </div>
            <div className="text-sm text-gray-800 font-medium">⭐ 평균 평점</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {totalCount}
            </div>
            <div className="text-sm text-gray-800 font-medium">💬 전체 리뷰</div>
          </div>
        </div>
      </div>
    </div>
  );
}
