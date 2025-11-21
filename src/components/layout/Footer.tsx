import Link from 'next/link';
import { STORE_INFO } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 매장 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              맛있는고기에솜씨를더하다
            </h3>
            <p className="text-sm mb-2">소답중동점</p>
            <p className="text-sm text-gray-400">
              스페인 듀록 + 침지숙성 + 건식숙성
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-400">전화:</span>{' '}
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="hover:text-secondary-400 transition-colors"
                >
                  {formatPhoneNumber(STORE_INFO.phone)}
                </a>
              </div>
              <div>
                <span className="text-gray-400">주소:</span>
                <p className="mt-1">{STORE_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* 영업 정보 */}
          <div>
            <h4 className="text-white font-semibold mb-4">영업시간</h4>
            <div className="space-y-2 text-sm">
              {STORE_INFO.businessHours.map((hour, index) => (
                <div key={index}>
                  <span className="text-gray-400">{hour.day}:</span>{' '}
                  {hour.hours}
                </div>
              ))}
              {STORE_INFO.lastOrder && (
                <div className="mt-2">
                  <span className="text-gray-400">라스트오더:</span>{' '}
                  {STORE_INFO.lastOrder}
                </div>
              )}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-gray-400">주차:</span>
                <p className="mt-1">{STORE_INFO.parking}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              <p>사업자등록번호: {STORE_INFO.businessNumber}</p>
              <p className="mt-1">대표: {STORE_INFO.ownerName}</p>
            </div>

            <div className="text-sm text-gray-500">
              <p>© {currentYear} 맛있는고기에솜씨를더하다. All rights reserved.</p>
            </div>
          </div>

          {/* 추가 링크 */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="/notice" className="hover:text-secondary-400 transition-colors">
              공지사항
            </Link>
            <span>|</span>
            <Link href="/location" className="hover:text-secondary-400 transition-colors">
              오시는길
            </Link>
            <span>|</span>
            <a
              href={STORE_INFO.naverPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-400 transition-colors"
            >
              네이버 플레이스
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
