import { SectionTitle } from '@/components/common/SectionTitle';
import { noticeData, getImportantNotices } from '@/data/notice';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '공지사항',
  description: '맛있는고기에솜씨를더하다의 새로운 소식과 이벤트를 확인하세요',
};

export default function NoticePage() {
  const importantNotices = getImportantNotices();
  const regularNotices = noticeData.filter(notice => !notice.isImportant);

  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">공지사항</h1>
          <p className="text-xl md:text-2xl">새로운 소식과 이벤트</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 중요 공지사항 */}
        {importantNotices.length > 0 && (
          <section className="mb-16">
            <SectionTitle
              title="중요 공지"
              align="left"
            />
            <div className="space-y-4">
              {importantNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-gradient-to-r from-accent-50 to-secondary-50 border-l-4 border-accent-500 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                        중요
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{notice.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{formatDate(notice.date)}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{notice.content}</p>
                  {notice.author && (
                    <div className="mt-4 text-sm text-gray-500">
                      작성자: {notice.author}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 일반 공지사항 */}
        <section>
          <SectionTitle
            title="전체 공지사항"
            align="left"
          />
          <div className="space-y-4">
            {regularNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                    {notice.title}
                  </h3>
                  <span className="text-sm text-gray-500">{formatDate(notice.date)}</span>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{notice.content}</p>
                {notice.author && (
                  <div className="mt-4 text-sm text-gray-500">
                    작성자: {notice.author}
                  </div>
                )}
              </div>
            ))}
          </div>

          {regularNotices.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              등록된 공지사항이 없습니다.
            </div>
          )}
        </section>

        {/* 문의 안내 */}
        <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-2xl text-center">
          <h3 className="font-bold text-xl mb-3">궁금한 사항이 있으신가요?</h3>
          <p className="text-gray-600 mb-6">
            전화 또는 네이버 예약 문의를 통해 연락주시면 친절하게 안내해드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:055-123-4567"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              전화 문의
            </a>
            <a
              href="https://booking.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-semibold"
            >
              네이버 예약
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
