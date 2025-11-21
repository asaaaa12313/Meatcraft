import { Metadata } from 'next';
import SectionTitle from '@/components/common/SectionTitle';
import InfoBanner from '@/components/common/InfoBanner';

export const metadata: Metadata = {
  title: '브랜드 스토리',
  description: '스페인 듀록과 듀얼 숙성 시스템으로 완성한 프리미엄 고기의 이야기',
};

export default function BrandStoryPage() {
  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">브랜드 스토리</h1>
          <p className="text-xl md:text-2xl">스페인 듀록의 차별화된 맛</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 스페인 듀록 소개 */}
        <section className="mb-20">
          <SectionTitle
            subtitle="Spain Duroc"
            title="세계 3대 명품 돼지고기, 스페인 듀록"
            description="풍미 깊고 부드러운 육질로 전 세계가 인정하는 프리미엄 품종"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">스페인 듀록의 특징</h3>
                <ul className="space-y-6">
                  <li className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold text-lg">01</span>
                    </div>
                    <div>
                      <strong className="text-gray-900 text-lg block mb-2">풍부한 육즙과 부드러운 식감</strong>
                      <p className="text-gray-700 font-medium">마블링이 균일하게 분포되어 입안에서 녹는 듯한 부드러움</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold text-lg">02</span>
                    </div>
                    <div>
                      <strong className="text-gray-900 text-lg block mb-2">건강한 지방 구조</strong>
                      <p className="text-gray-700 font-medium">불포화지방산 비율이 높아 건강하고 깔끔한 뒷맛</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold text-lg">03</span>
                    </div>
                    <div>
                      <strong className="text-gray-900 text-lg block mb-2">깊은 풍미</strong>
                      <p className="text-gray-700 font-medium">오랜 사육 기간과 자연 방목으로 완성된 진한 육향</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 합리적인 가격의 비밀 */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <SectionTitle
            title="프리미엄을 합리적인 가격에"
            description="스페인 내 낮은 삼겹 수요로 인한 가격 경쟁력"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-3 text-gray-900">스페인 식문화</h4>
              <p className="text-gray-700 font-medium">스페인에서는 삼겹살 부위 소비가 적어 상대적으로 저렴한 가격에 공급</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-3 text-gray-900">직수입 시스템</h4>
              <p className="text-gray-700 font-medium">중간 유통 단계를 최소화한 직수입으로 원가 절감</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-3 text-gray-900">합리적 가격</h4>
              <p className="text-gray-700 font-medium">고품질 프리미엄 고기를 합리적인 가격에 제공</p>
            </div>
          </div>
        </section>

        {/* 듀얼 숙성 시스템 */}
        <section className="mb-20">
          <SectionTitle
            subtitle="Dual Aging System"
            title="침지숙성 + 건식숙성"
            description="두 가지 숙성 방식의 장점을 결합한 독자적인 시스템"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {/* 침지숙성 */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-2xl">1</span>
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold mb-4">
                  침지숙성
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">2도 이하, 20일간의 침지숙성</h3>
                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                  저온의 물속에서 20일간 숙성시키는 침지숙성 방식은 고기의 육즙을 최대한 보존하면서
                  육질을 부드럽게 만들어줍니다. 이 과정을 통해 고기 본연의 풍미가 더욱 깊어집니다.
                </p>
              </div>
              <ul className="space-y-3 text-gray-900 font-medium max-w-md mx-auto">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  육즙 보존 극대화
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  균일한 숙성 진행
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  육질 연화 효과
                </li>
              </ul>
            </div>

            {/* 건식숙성 */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-secondary-700 font-bold text-2xl">2</span>
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-semibold mb-4">
                  건식숙성
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">저온 공기 순환 건식숙성</h3>
                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                  침지숙성을 마친 고기는 저온의 공기가 순환하는 환경에서 건식숙성을 진행합니다.
                  이 과정에서 고기의 감칠맛이 응축되고 풍미가 한층 더 깊어집니다.
                </p>
              </div>
              <ul className="space-y-3 text-gray-900 font-medium max-w-md mx-auto">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                  감칠맛 응축
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                  풍미 강화
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                  식감 개선
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 매장 소개 */}
        <section>
          <SectionTitle
            subtitle="Our Restaurant"
            title="쾌적하고 넓은 공간"
            description="가족 모임과 회식에 최적화된 매장 환경"
          />

          <div className="mt-8">
            <InfoBanner
              variant="info"
              title="편리한 주차"
              message="유니파크 주차장 2시간 무료 이용 가능합니다."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
