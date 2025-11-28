'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAV_ITEMS, STORE_INFO } from '@/lib/constants';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{STORE_INFO.name}</span>
            <span className={cn("text-2xl font-bold", scrolled ? "text-[#8B4513]" : "text-white")}>
              맛있는고기에솜씨를더하다 소답중동점
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", scrolled ? "text-gray-700" : "text-white")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">메뉴 열기</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors",
                scrolled
                  ? (pathname === item.href ? "text-[#8B4513]" : "text-gray-900 hover:text-[#8B4513]")
                  : (pathname === item.href ? "text-white" : "text-white/90 hover:text-white")
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant={scrolled ? "primary" : "secondary"}
            size="sm"
            onClick={() => window.open(STORE_INFO.naverBookingUrl, '_blank')}
          >
            네이버 예약
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{STORE_INFO.name}</span>
              <span className="text-xl font-bold text-[#8B4513]">맛있는고기에솜씨를더하다 소답중동점</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">메뉴 닫기</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50",
                      pathname === item.href ? "text-[#8B4513]" : "text-gray-900"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  fullWidth
                  onClick={() => window.open(STORE_INFO.naverBookingUrl, '_blank')}
                >
                  네이버 예약하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
