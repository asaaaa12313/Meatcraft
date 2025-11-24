'use client';

import Image from 'next/image';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/common/Button';
import { STORE_INFO } from '@/lib/constants';
import { formatPhoneNumber, handlePhoneCall, handleExternalLink } from '@/lib/utils';
import { MapPinIcon, ClockIcon, PhoneIcon, TruckIcon, MapIcon } from '@heroicons/react/24/outline';

export default function LocationPage() {
  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-accent-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">오시는 길</h1>
          <p className="text-xl md:text-2xl">창원 소답중동 유니시티 인근</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 지도 */}
        <section className="mb-16">
          <SectionTitle
            title="찾아오시는 길"
            description="창원 중동사거리에서 가까운 곳에 위치해 있습니다"
          />

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] mb-8 bg-gray-100 relative">
            <Image
              src="/images/location/map.jpg"
              alt="맛있는고기에솜씨를더하다 소답중동점 지도 - 경남 창원시 의창구 의창대로261번길 6 1층"
              fill
              className="object-cover cursor-pointer"
              onClick={() => handleExternalLink(STORE_INFO.naverMapUrl, 'map_image_click')}
            />
            <div className="absolute inset-0 hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-gray-900 font-bold">클릭하여 네이버 지도에서 보기</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => handleExternalLink(STORE_INFO.naverMapUrl, 'naver_map')}
            >
              <MapIcon className="w-5 h-5 mr-2 inline" />
              네이버 지도로 보기
            </Button>
            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={() => handlePhoneCall(STORE_INFO.phone)}
            >
              <PhoneIcon className="w-5 h-5 mr-2 inline" />
              길 안내 전화
            </Button>
          </div>
        </section>

        {/* 매장 정보 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 주소 및 연락처 */}
            <div className="space-y-6">
              {/* 주소 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-primary-700 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">주소</h3>
                    <p className="text-gray-900 font-semibold mb-1">{STORE_INFO.address}</p>
                    <p className="text-sm text-gray-700 font-medium">{STORE_INFO.addressDetail}</p>
                  </div>
                </div>
              </div>

              {/* 전화번호 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-primary-700 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">전화번호</h3>
                    <button
                      onClick={() => handlePhoneCall(STORE_INFO.phone)}
                      className="text-primary-700 hover:text-primary-800 font-bold text-2xl transition-colors"
                    >
                      {formatPhoneNumber(STORE_INFO.phone)}
                    </button>
                    <p className="text-sm text-gray-700 mt-1 font-medium">클릭하여 바로 전화하기</p>
                  </div>
                </div>
              </div>

              {/* 영업시간 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-primary-700 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">영업시간</h3>
                    <div className="space-y-2">
                      {STORE_INFO.businessHours.map((hour, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-gray-900 font-semibold">{hour.day}</span>
                          <span className="text-gray-800 font-medium">{hour.hours}</span>
                        </div>
                      ))}
                    </div>
                    {STORE_INFO.breakTime && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-800 font-medium">
                          <strong className="text-gray-900">브레이크타임:</strong> {STORE_INFO.breakTime}
                        </p>
                      </div>
                    )}
                    {STORE_INFO.lastOrder && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-800 font-medium">
                          <strong className="text-gray-900">라스트오더:</strong> {STORE_INFO.lastOrder}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 교통 안내 */}
            <div className="space-y-6">
              {/* 주차 안내 */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border-2 border-primary-200">
                <div className="flex items-start">
                  <TruckIcon className="w-6 h-6 text-primary-700 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">주차 안내</h3>
                    <p className="text-gray-900 font-bold mb-3">{STORE_INFO.parking}</p>
                    <ul className="space-y-2 text-gray-800 font-medium">
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2 font-bold">•</span>
                        <span>유니파크 주차장 이용</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2 font-bold">•</span>
                        <span>매장에서 주차권 발급</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2 font-bold">•</span>
                        <span>도보 2분 거리</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 대중교통 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="font-bold text-lg mb-4 text-gray-900">대중교통 이용</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mr-2">
                        버스
                      </span>
                      <span className="text-sm text-gray-800 font-medium">창원 중동사거리 정류장</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-2 font-medium">도보 5분 거리</p>
                  </div>
                </div>
              </div>

              {/* 주요 랜드마크 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="font-bold text-lg mb-4 text-gray-900">주요 랜드마크</h3>
                <ul className="space-y-2 text-gray-800 font-medium">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">📍</span>
                    <span>창원 중동사거리에서 도보 3분</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">📍</span>
                    <span>유니시티에서 도보 10분</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">📍</span>
                    <span>어반브릭스에서 차량 5분</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 길찾기 안내 */}
        <section>
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">길을 못 찾으시겠나요?</h3>
            <p className="text-xl mb-8 opacity-90">
              언제든지 전화주시면 자세히 안내해드리겠습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handlePhoneCall(STORE_INFO.phone)}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
              >
                <PhoneIcon className="w-5 h-5 mr-2 inline" />
                {formatPhoneNumber(STORE_INFO.phone)}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleExternalLink(STORE_INFO.naverMapUrl, 'location_naver_map')}
              >
                <MapIcon className="w-5 h-5 mr-2 inline" />
                네이버 지도
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
