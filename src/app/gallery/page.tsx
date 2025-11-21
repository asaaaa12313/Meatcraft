'use client';

import { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import GalleryItem from '@/components/common/GalleryItem';
import { galleryData, getGalleryCategories } from '@/data/gallery';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = getGalleryCategories();

  const filteredImages = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary-700 to-accent-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">갤러리</h1>
          <p className="text-xl md:text-2xl">맛있는 순간들을 사진으로 담았습니다</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="매장과 메뉴"
          description="신선한 재료와 정성스러운 조리 과정을 확인하세요"
        />

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            전체
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category || 'all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>

        {/* 안내 메시지 */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-gray-800 font-medium">
            해당 카테고리에 이미지가 없습니다.
          </div>
        )}

        {/* 하단 안내 */}
        <div className="mt-16 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl text-center">
          <h3 className="font-bold text-xl mb-3">더 많은 사진을 원하시나요?</h3>
          <p className="text-gray-800 font-medium mb-4">
            인스타그램에서 더 많은 매장 사진과 메뉴를 확인하실 수 있습니다.
          </p>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            인스타그램 보러가기
          </a>
        </div>
      </div>
    </div>
  );
}
