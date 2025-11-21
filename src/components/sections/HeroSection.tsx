'use client';

import Button from '@/components/common/Button';
import { handlePhoneCall, handleExternalLink } from '@/lib/utils';
import { STORE_INFO } from '@/lib/constants';
import { getHeroImage } from '@/lib/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${getHeroImage()})` }}
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* 서브 카피 */}
        <div className="mb-4 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-secondary-500/90 backdrop-blur-sm rounded-full text-sm md:text-base font-semibold text-white">
            스페인 듀록 × 침지숙성 × 건식숙성
          </span>
        </div>

        {/* 메인 카피 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          숙성의 차이가
          <br />
          <span className="text-secondary-400">맛의 차이</span>
        </h1>

        {/* 설명 */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-400 max-w-3xl mx-auto">
          세계 3대 명품 돼지고기 스페인 듀록을<br className="md:hidden" />
          20일간 침지·건식 듀얼 숙성으로 완성한<br className="md:hidden" />
          창원 소답중동점 프리미엄 고기집
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleExternalLink(STORE_INFO.naverBookingUrl, 'hero_booking')}
            className="min-w-[200px]"
          >
            네이버 예약하기
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handlePhoneCall(STORE_INFO.phone)}
            className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
          >
            전화 문의
          </Button>
        </div>

        {/* 스크롤 다운 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
