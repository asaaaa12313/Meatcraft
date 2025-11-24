import { Metadata } from 'next';
import Image from 'next/image';
import { SectionTitle } from '@/components/common/SectionTitle';
import InfoBanner from '@/components/common/InfoBanner';
import { getBrandImage } from '@/lib/image';

export const metadata: Metadata = {
  title: '브랜드 스토리',
  description: '스페인 듀록과 듀얼 숙성 시스템으로 완성한 프리미엄 고기의 이야기',
};

export default function BrandStoryPage() {
  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={getBrandImage('Brand Story')}
          alt="맛있는고기에솜씨를더하다 브랜드 스토리"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">브랜드 스토리</h1>
          <p className="text-xl md:text-2xl font-medium drop-shadow-md">스페인 듀록의 차별화된 맛</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 스페인 듀록 소개 */}
        <section className="mb-24">
          <SectionTitle
            subtitle="Spain Duroc"
            title="세계 3대 명품 돼지고기, 스페인 듀록"
            description="풍미 깊고 부드러운 육질로 전 세계가 인정하는 프리미엄 품종"
          />

          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">왜 스페인 듀록인가요?</h3>
              <ul className="space-y-6">
                <li className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">풍부한 육즙과 식감</strong>
                    <p className="text-gray-600">마블링이 균일하게 분포되어 입안에서 녹는 듯한 부드러움을 선사합니다.</p>
                  </div>
                </li>
                <li className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">건강한 지방 구조</strong>
                    <p className="text-gray-600">불포화지방산 비율이 높아 건강하고 느끼하지 않은 깔끔한 맛을 자랑합니다.</p>
                  </div>
                </li>
                <li className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">깊은 풍미</strong>
                    <p className="text-gray-600">오랜 사육 기간과 자연 방목 환경에서 자라 진한 육향을 느낄 수 있습니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 듀얼 숙성 시스템 */}
        <section className="mb-24">
          <SectionTitle
            subtitle="Dual Aging System"
            title="침지숙성 + 건식숙성"
            description="두 가지 숙성 방식의 장점을 결합한 독자적인 시스템"
          />

          <div className="space-y-16">
            {/* 침지숙성 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-500">
                <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full font-bold mb-6 text-sm">
                  Step 1. 침지숙성 (Water Aging)
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">2도 이하, 20일의 기다림</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  진공 포장된 고기를 2도 이하의 차가운 물속에서 20일 이상 숙성시킵니다.
                  외부 온도 변화의 영향을 받지 않는 물속에서 육즙이 완벽하게 보존되며,
                  육질이 놀랍도록 부드러워집니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">#육즙보존</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">#육질연화</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">#균일숙성</span>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getBrandImage('침지숙성')}
                  alt="침지숙성 과정"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* 건식숙성 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getBrandImage('건식숙성')}
                  alt="건식숙성 과정"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary-500">
                <div className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-800 rounded-full font-bold mb-6 text-sm">
                  Step 2. 건식숙성 (Dry Aging)
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">풍미를 완성하는 공기 순환</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  침지숙성을 마친 고기는 저온 공기 순환 방식의 건식숙성을 거칩니다.
                  이 과정에서 고기 표면이 마르면서 안쪽으로 감칠맛이 응축되고,
                  특유의 진한 풍미가 완성됩니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">#감칠맛응축</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">#풍미강화</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">#식감개선</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 합리적인 가격의 비밀 */}
        <section className="mb-24 bg-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="text-secondary-400 font-bold tracking-wider text-sm uppercase mb-2 block">Reasonable Price</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">프리미엄을 합리적인 가격에</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                스페인 현지의 식문화 차이를 활용하여 최상급 품질의 고기를 합리적인 가격에 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-center">
                <h4 className="font-bold text-xl mb-3 text-white">스페인 식문화</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  스페인에서는 하몽 생산을 위한 뒷다리살 수요가 높고 삼겹살 수요는 상대적으로 낮아,
                  고품질 삼겹살을 합리적인 가격에 확보할 수 있습니다.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-center">
                <h4 className="font-bold text-xl mb-3 text-white">직수입 시스템</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  중간 유통 단계를 최소화한 직수입 구조를 통해 불필요한 마진을 없애고
                  원가 경쟁력을 확보했습니다.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-center">
                <h4 className="font-bold text-xl mb-3 text-white">고객 혜택</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  확보된 가격 경쟁력은 고스란히 고객님께 돌아갑니다.
                  프리미엄 숙성육을 부담 없이 마음껏 즐기세요.
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
