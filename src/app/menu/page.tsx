'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { SectionTitle } from '@/components/common/SectionTitle';
import { MenuCard } from '@/components/sections/MenuCard';
import { menuData } from '@/data/menu';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMenus = selectedCategory === 'all'
    ? menuData
    : menuData.filter(category => category.id === selectedCategory);

  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">메뉴</h1>
          <p className="text-xl md:text-2xl">프리미엄 숙성육부터 다양한 메뉴까지</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="전체 메뉴"
          description="스페인 듀록 숙성육을 중심으로 다양한 메뉴를 준비했습니다"
        />

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === 'all'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            전체
          </button>
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 메뉴 리스트 */}
        <div className="space-y-16">
          {filteredMenus.map((category) => (
            <section key={category.id} id={category.id}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h2>
                {category.description && (
                  <p className="text-gray-800 dark:text-gray-300 font-medium">{category.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 안내 사항 */}
        <div className="mt-16 p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">메뉴 안내</h3>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300 font-medium">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>가격은 부가세 포함 금액입니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>메뉴 가격 및 구성은 사정에 따라 변경될 수 있습니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>스페인 듀록을 사용합니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>1인 1메뉴 주문 부탁드립니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>셀프바 이용 시 개인 위생에 협조 부탁드립니다.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
