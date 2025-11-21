'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuCard from '@/components/common/MenuCard';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { getRecommendedMenus } from '@/data/menu';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function FeaturedMenuSection() {
  const recommendedMenus = getRecommendedMenus();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === recommendedMenus.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendedMenus.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Signature Menu"
          title="시그니처 메뉴"
          description="맛있는고기에솜씨를더하다가 자신있게 추천하는 대표 메뉴입니다"
        />

        {/* 데스크탑: 그리드 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {recommendedMenus.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* 모바일/태블릿: 슬라이더 */}
        <div className="lg:hidden relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recommendedMenus.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* 슬라이더 컨트롤 */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="이전 메뉴"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="다음 메뉴"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-6">
            {recommendedMenus.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`${index + 1}번째 메뉴로 이동`}
              />
            ))}
          </div>
        </div>

        {/* 전체 메뉴 보기 버튼 */}
        <div className="text-center">
          <Link href="/menu">
            <Button variant="outline" size="lg">
              전체 메뉴 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
