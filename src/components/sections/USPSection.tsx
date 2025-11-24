import USPCard from '@/components/common/USPCard';
import { SectionTitle } from '@/components/common/SectionTitle';
import { FireIcon, BeakerIcon, SparklesIcon } from '@heroicons/react/24/outline';

const uspItems = [
  {
    icon: <SparklesIcon className="w-10 h-10" />,
    title: '스페인 듀록',
    description: '세계 3대 명품 돼지고기로 불리는 스페인 듀록. 풍미 깊고 부드러운 육질, 불포화지방산이 높아 건강한 지방 구조를 자랑합니다.',
  },
  {
    icon: <BeakerIcon className="w-10 h-10" />,
    title: '듀얼 숙성 시스템',
    description: '2도 이하 물속에서 20일간 침지숙성 후 저온 공기 순환 방식의 건식숙성. 육즙, 풍미, 감칠맛이 극대화된 프리미엄 숙성육을 만듭니다.',
  },
  {
    icon: <FireIcon className="w-10 h-10" />,
    title: '합리적인 가격',
    description: '스페인 내 삼겹 수요가 낮아 가격 경쟁력을 확보했습니다. 프리미엄 품질을 합리적인 가격으로 즐기실 수 있습니다.',
  },
];

export default function USPSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Why Choose Us"
          title="맛있는고기에솜씨를더하다만의 특별함"
          description="스페인 듀록과 듀얼 숙성 시스템으로 완성한 프리미엄 고기를 합리적인 가격에 만나보세요"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {uspItems.map((item, index) => (
            <USPCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
