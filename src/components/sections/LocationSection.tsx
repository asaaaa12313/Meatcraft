'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { STORE_INFO } from '@/lib/constants';
import { formatPhoneNumber, handlePhoneCall, handleExternalLink } from '@/lib/utils';
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Visit Us"
          title="오시는 길"
          description="창원 소답중동 유니시티 인근에 위치해 있습니다"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 왼쪽: 매장 정보 */}
          <div className="space-y-6">
            {/* 주소 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <MapPinIcon className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">주소</h3>
                <p className="text-gray-900 font-medium">{STORE_INFO.address}</p>
                <p className="text-sm text-gray-700 mt-1">
                  {STORE_INFO.addressDetail}
                </p>
              </div>
            </div>

            {/* 영업시간 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <ClockIcon className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-3 text-gray-900">영업시간</h3>
                <div className="space-y-2">
                  {STORE_INFO.businessHours.map((hour, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <span className="text-gray-900 font-semibold">
                        {hour.day}
                      </span>
                      <span className="text-gray-800 font-medium">{hour.hours}</span>
                    </div>
                  ))}
                </div>
                {STORE_INFO.breakTime && (
                  <p className="text-sm text-gray-700 mt-3 font-medium">
                    브레이크타임: {STORE_INFO.breakTime}
                  </p>
                )}
                {STORE_INFO.lastOrder && (
                  <p className="text-sm text-gray-700 font-medium">
                    라스트오더: {STORE_INFO.lastOrder}
                  </p>
                )}
              </div>
            </div>

            {/* 전화번호 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <PhoneIcon className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-gray-900">전화번호</h3>
                <button
                  onClick={() => handlePhoneCall(STORE_INFO.phone)}
                  className="text-primary-700 font-bold text-xl hover:text-primary-800 transition-colors"
                >
                  {formatPhoneNumber(STORE_INFO.phone)}
                </button>
                <p className="text-sm text-gray-700 mt-1 font-medium">
                  단체 예약 및 문의 환영합니다
                </p>
              </div>
            </div>

            {/* 주차 안내 */}
            <div className="flex items-start space-x-4 p-6 bg-primary-50 rounded-xl border-2 border-primary-200">
              <TruckIcon className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  주차 안내
                </h3>
                <p className="text-gray-900 font-medium">{STORE_INFO.parking}</p>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/location" className="flex-1">
                <Button variant="primary" size="lg" fullWidth>
                  상세 위치 보기
                </Button>
              </Link>
              <Link href="/reservation" className="flex-1">
                <Button variant="secondary" size="lg" fullWidth>
                  예약하기
                </Button>
              </Link>
            </div>
          </div>

          {/* 오른쪽: 지도 */}
          <div className="h-[500px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg bg-gray-100 relative">
            <Image
              src="/images/location/map.jpg"
              alt="맛있는고기에솜씨를더하다 소답중동점 지도 - 경남 창원시 의창구 의창대로261번길 6 1층"
              fill
              className="object-cover cursor-pointer"
              onClick={() => handleExternalLink(STORE_INFO.naverMapUrl, 'home_map_click')}
            />
            <div className="absolute inset-0 hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-gray-900 font-bold">클릭하여 네이버 지도에서 보기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
