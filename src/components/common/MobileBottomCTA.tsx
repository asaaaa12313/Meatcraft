'use client';

import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/solid';
import { STORE_INFO } from '@/lib/constants';
import { handlePhoneCall, handleExternalLink } from '@/lib/utils';

export default function MobileBottomCTA() {
  return (
    <>
      {/* 모바일 전용: 하단 고정 CTA 바 */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="grid grid-cols-2 gap-0">
            {/* 전화 버튼 */}
            <button
              onClick={() => handlePhoneCall(STORE_INFO.phone)}
              className="flex items-center justify-center space-x-2 py-4 bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-semibold">전화하기</span>
            </button>

            {/* 예약 버튼 */}
            <button
              onClick={() => handleExternalLink(STORE_INFO.naverBookingUrl, 'naver_booking_bottom_cta')}
              className="flex items-center justify-center space-x-2 py-4 bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 transition-colors"
            >
              <CalendarIcon className="w-5 h-5" />
              <span className="font-semibold">예약하기</span>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 하단 CTA를 위한 여백 확보 */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
