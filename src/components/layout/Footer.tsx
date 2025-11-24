import React from 'react';
import Link from 'next/link';
import { STORE_INFO, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-white">
              {STORE_INFO.name}
            </span>
            <p className="text-sm leading-6 text-gray-300">
              스페인 듀록과 듀얼 숙성 시스템으로<br />
              완성된 프리미엄 고기의 참맛을 느껴보세요.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">메뉴</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {NAV_ITEMS.slice(0, 4).map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">고객지원</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {NAV_ITEMS.slice(4).map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">매장 정보</h3>
                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                  <li>주소: {STORE_INFO.address}</li>
                  <li>전화: {STORE_INFO.phone}</li>
                  <li>영업시간: {STORE_INFO.businessHours[0].hours}</li>
                  <li>대표: {STORE_INFO.ownerName}</li>
                  <li>사업자번호: {STORE_INFO.businessNumber}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
