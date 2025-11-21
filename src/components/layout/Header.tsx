'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAV_ITEMS, STORE_INFO } from '@/lib/constants';
import { handleExternalLink } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-xl md:text-2xl font-bold text-primary-600 transition-colors group-hover:text-primary-700">
              맛있는고기에솜씨를더하다
            </div>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-md hover:bg-primary-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 네이버 예약 버튼 (데스크탑) */}
          <button
            onClick={() => handleExternalLink(STORE_INFO.naverBookingUrl, 'naver_booking_header')}
            className="hidden lg:flex items-center px-6 py-2.5 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-medium shadow-sm"
          >
            네이버 예약
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* 모바일 네이버 예약 버튼 */}
            <button
              onClick={() => {
                handleExternalLink(STORE_INFO.naverBookingUrl, 'naver_booking_mobile');
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 w-full px-4 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-medium text-center"
            >
              네이버 예약
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
