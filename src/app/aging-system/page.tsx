import Image from 'next/image';
import { Metadata } from 'next';
import { SectionTitle } from '@/components/common/SectionTitle';

export const metadata: Metadata = {
  title: '숙성 시스템',
  description: '침지숙성과 건식숙성을 결합한 듀얼 숙성 시스템으로 완성된 프리미엄 맛',
};

export default function AgingSystemPage() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* 히어로 섹션 */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-accent-600 to-accent-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/aging/aging-hero.jpg"
            alt="듀얼 숙성 시스템"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">시그니처 숙성 시스템</h1>
          <p className="text-xl md:text-2xl font-medium drop-shadow-md">침지 + 건식 듀얼 숙성의 비밀</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 숙성이란 */}
        <section className="mb-20">
          <SectionTitle
            subtitle="What is Aging"
            title="숙성이 만드는 차이"
            description="시간과 정성으로 완성되는 프리미엄 품질"
          />

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6 font-medium">
                숙성은 고기를 일정 기간 특정 온도와 습도에서 보관하여
                <strong className="text-primary-700 dark:text-primary-400 font-bold"> 육질을 부드럽게 하고 풍미를 깊게 </strong>
                만드는 과정입니다.
              </p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed font-medium">
                효소의 작용으로 단백질이 분해되면서 아미노산이 증가하고,
                이것이 고기의 감칠맛과 부드러운 식감을 만들어냅니다.
              </p>
            </div>
          </div>
        </section>

        {/* 듀얼 숙성 프로세스 */}
        <section className="mb-20">
          <SectionTitle
            title="듀얼 숙성 프로세스"
            description="두 가지 숙성 방식의 장점을 모두 담았습니다"
          />

          <div className="relative">
            {/* 타임라인 */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300 dark:from-primary-700 dark:via-secondary-700 dark:to-accent-700"></div>

            {/* Step 1: 원육 선별 */}
            <div className="relative mb-16">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <div className="inline-block md:block">
                    <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-bold text-sm mb-3">
                      Step 0
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      스페인 듀록 원육 선별
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed font-medium">
                      엄격한 기준으로 선별된 최상급 스페인 듀록 원육만을 사용합니다.
                      마블링과 육색, 육질을 꼼꼼하게 확인합니다.
                    </p>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/aging/raw-meat.jpg"
                    alt="스페인 듀록 원육"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center font-bold text-gray-800 dark:text-gray-200 font-medium z-10">
                0
              </div>
            </div>

            {/* Step 2: 침지숙성 */}
            <div className="relative mb-16">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[300px] rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-0">
                  <Image
                    src="/images/aging/wet-aging-process.jpg"
                    alt="침지숙성 과정"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full font-semibold text-sm mb-3">
                    Step 1 - 침지숙성
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    2°C 이하, 20일간
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 font-medium leading-relaxed mb-4">
                    저온의 물속에서 20일간 침지숙성을 진행합니다.
                    이 과정에서 육즙이 최대한 보존되며 육질이 부드러워집니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">육즙 손실 최소화</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">균일한 숙성 진행</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">육질 연화 효과</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 border-4 border-primary-300 dark:border-primary-700 rounded-full flex items-center justify-center font-bold text-primary-600 dark:text-primary-400 z-10">
                1
              </div>
            </div>

            {/* Step 3: 건식숙성 */}
            <div className="relative mb-16">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <span className="inline-block px-4 py-2 bg-secondary-100 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 rounded-full font-semibold text-sm mb-3">
                    Step 2 - 건식숙성
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    저온 공기 순환 방식
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 font-medium leading-relaxed mb-4">
                    침지숙성을 마친 고기는 저온의 공기가 순환하는 환경에서
                    건식숙성을 진행합니다. 감칠맛이 응축되고 풍미가 깊어집니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 dark:text-gray-300 md:order-2">풍미 강화 및 감칠맛 응축</span>
                      <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400 mr-2 md:ml-2 md:mr-0 flex-shrink-0 md:order-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 dark:text-gray-300 md:order-2">육향 증대</span>
                      <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400 mr-2 md:ml-2 md:mr-0 flex-shrink-0 md:order-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 dark:text-gray-300 md:order-2">식감 개선</span>
                      <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400 mr-2 md:ml-2 md:mr-0 flex-shrink-0 md:order-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/aging/dry-aging-chamber.jpg"
                    alt="건식숙성 챔버"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 border-4 border-secondary-300 dark:border-secondary-700 rounded-full flex items-center justify-center font-bold text-secondary-600 dark:text-secondary-400 z-10">
                2
              </div>
            </div>

            {/* Step 4: 완성 */}
            <div className="relative">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[300px] rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-0">
                  <Image
                    src="/images/aging/aged-meat-final.jpg"
                    alt="완성된 숙성육"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 rounded-full font-semibold text-sm mb-3">
                    Step 3 - 완성
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    프리미엄 숙성육 완성
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 font-medium leading-relaxed mb-4">
                    듀얼 숙성을 거쳐 완성된 고기는 육즙, 풍미, 식감 모든 면에서
                    최상의 상태가 됩니다.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">A+</div>
                      <div className="text-sm text-gray-800 dark:text-gray-300 font-medium">육즙</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">A+</div>
                      <div className="text-sm text-gray-800 dark:text-gray-300 font-medium">풍미</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">A+</div>
                      <div className="text-sm text-gray-800 dark:text-gray-300 font-medium">식감</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent-500 border-4 border-accent-300 dark:border-accent-700 rounded-full flex items-center justify-center font-bold text-white z-10">
                ✓
              </div>
            </div>
          </div>
        </section>

        {/* 비교 섹션 */}
        <section className="mb-20">
          <SectionTitle
            title="숙성 전후 비교"
            description="듀얼 숙성이 만드는 놀라운 차이"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-400 mb-6 text-center">숙성 전</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-800 dark:text-gray-300 font-medium">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  단단한 육질
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-300 font-medium">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  심심한 맛
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-300 font-medium">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  낮은 육즙 보유량
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-300 font-medium">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  평범한 향
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl p-8 border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-6 text-center">듀얼 숙성 후</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-900 dark:text-white">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <strong>부드럽고 녹는 듯한 육질</strong>
                </li>
                <li className="flex items-center text-gray-900 dark:text-white">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <strong>깊고 진한 감칠맛</strong>
                </li>
                <li className="flex items-center text-gray-900 dark:text-white">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <strong>풍부한 육즙</strong>
                </li>
                <li className="flex items-center text-gray-900 dark:text-white">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <strong>진한 육향과 풍미</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}