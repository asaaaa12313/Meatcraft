'use client';

import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/common/Button';
import { STORE_INFO } from '@/lib/constants';
import { formatPhoneNumber, handlePhoneCall, handleExternalLink } from '@/lib/utils';
import { PhoneIcon, CalendarIcon, ClockIcon, UserGroupIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function ReservationPage() {
  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">예약 / 문의</h1>
          <p className="text-xl md:text-2xl">편리하게 예약하고 방문하세요</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 예약 방법 */}
        <section className="mb-16">
          <SectionTitle
            title="예약 방법"
            description="전화 또는 네이버 예약으로 간편하게 예약하실 수 있습니다"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 전화 예약 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-100 hover:border-primary-300 transition-all">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                <PhoneIcon className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">전화 예약</h3>
              <p className="text-gray-800 text-center mb-6 font-medium">
                직접 전화로 예약하시면 상세한 상담이 가능합니다
              </p>
              <div className="text-center mb-6">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="text-3xl font-bold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  {formatPhoneNumber(STORE_INFO.phone)}
                </a>
              </div>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handlePhoneCall(STORE_INFO.phone)}
              >
                전화하기
              </Button>
            </div>

            {/* 네이버 예약 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secondary-100 hover:border-secondary-300 transition-all">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6 mx-auto">
                <CalendarIcon className="w-8 h-8 text-secondary-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">네이버 예약</h3>
              <p className="text-gray-800 text-center mb-6 font-medium">
                24시간 언제든지 온라인으로 예약 가능합니다
              </p>
              <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-900 text-center font-medium">
                  네이버 예약 시 포인트 적립 및 다양한 혜택을 받으실 수 있습니다
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => handleExternalLink(STORE_INFO.naverBookingUrl, 'reservation_page')}
              >
                네이버 예약하기
              </Button>
            </div>
          </div>
        </section>

        {/* 영업 시간 */}
        <section className="mb-16">
          <SectionTitle
            title="영업 시간"
            align="left"
          />
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <ClockIcon className="w-8 h-8 text-primary-700 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">영업시간</h3>
                </div>
                <div className="space-y-3">
                  {STORE_INFO.businessHours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="font-bold text-gray-900">{hour.day}</span>
                      <span className="text-gray-800 font-semibold">{hour.hours}</span>
                    </div>
                  ))}
                </div>
                {STORE_INFO.breakTime && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-900 font-medium">
                      <strong>브레이크타임:</strong> {STORE_INFO.breakTime}
                    </p>
                  </div>
                )}
                {STORE_INFO.lastOrder && (
                  <div className="mt-2 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-900 font-medium">
                      <strong>라스트오더:</strong> {STORE_INFO.lastOrder}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <UserGroupIcon className="w-8 h-8 text-primary-700 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">단체 예약 안내</h3>
                </div>
                <ul className="space-y-3 text-gray-800 font-medium">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-3 mt-1 font-bold">•</span>
                    <span>10인 이상 단체석 별도 준비 가능</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-3 mt-1 font-bold">•</span>
                    <span>사전 예약 시 테이블 세팅 미리 준비</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-3 mt-1 font-bold">•</span>
                    <span>회식, 가족 모임 환영</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-3 mt-1 font-bold">•</span>
                    <span>주차 2시간 무료 (유니파크 주차장)</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                  <p className="text-sm text-gray-900 font-bold">
                    💡 원활한 서비스를 위해 사전 예약을 권장드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 예약 시 유의사항 */}
        <section className="mb-16">
          <SectionTitle
            title="예약 시 유의사항"
            align="left"
          />
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <div className="flex items-start mb-4">
              <InformationCircleIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-4">꼭 확인해주세요</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3">1.</span>
                    <span>예약 시간보다 15분 이상 늦으실 경우 미리 연락 부탁드립니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3">2.</span>
                    <span>노쇼(No-show) 방지를 위해 예약 확인 연락을 드릴 수 있습니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3">3.</span>
                    <span>예약 취소 시 최소 2시간 전에 연락 부탁드립니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3">4.</span>
                    <span>주말 및 공휴일은 예약이 많아 사전 예약을 권장드립니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3">5.</span>
                    <span>단체 예약의 경우 메뉴 구성을 미리 상담해주시면 준비에 도움이 됩니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 문의하기 CTA */}
        <section>
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">궁금한 사항이 있으신가요?</h3>
            <p className="text-xl mb-8 opacity-90">
              언제든지 편하게 문의해주세요. 친절하게 안내해드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handlePhoneCall(STORE_INFO.phone)}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
              >
                <PhoneIcon className="w-5 h-5 mr-2 inline" />
                전화 문의
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleExternalLink(STORE_INFO.naverBookingUrl, 'reservation_cta')}
              >
                <CalendarIcon className="w-5 h-5 mr-2 inline" />
                네이버 예약
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
