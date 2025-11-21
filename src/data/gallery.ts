import { GalleryImage } from '@/types';
import { getGalleryImage } from '@/lib/image';

export const galleryData: GalleryImage[] = [
  // 메뉴 촬영
  {
    id: 'menu-1',
    url: getGalleryImage('숙성삼겹살굽는모습'),
    alt: '창원 소답동 숙성 삼겹살 굽는 모습',
    title: '숙성 삼겹살',
    description: '20일 침지숙성한 스페인 듀록 삼겹살',
    category: '메뉴',
  },
  {
    id: 'menu-2',
    url: getGalleryImage('숙성목살'),
    alt: '창원 소답동 숙성 목살',
    title: '숙성 목살',
    description: '부드럽고 담백한 프리미엄 목살',
    category: '메뉴',
  },
  {
    id: 'menu-3',
    url: getGalleryImage('숙성항정살'),
    alt: '창원 소답동 숙성 항정살',
    title: '숙성 항정살',
    description: '마블링이 아름다운 희소부위',
    category: '메뉴',
  },
  {
    id: 'menu-4',
    url: getGalleryImage('한우차돌박이'),
    alt: '창원 소답동 한우 차돌박이',
    title: '한우 차돌박이',
    description: '국내산 한우 프리미엄 부위',
    category: '메뉴',
  },
  {
    id: 'menu-5',
    url: getGalleryImage('고기모둠세트'),
    alt: '창원 소답동 고기 모둠 세트',
    title: '모둠 세트',
    description: '다양한 부위를 한번에',
    category: '메뉴',
  },
  {
    id: 'menu-6',
    url: getGalleryImage('양념돼지갈비'),
    alt: '창원 소답동 양념 돼지갈비',
    title: '양념 돼지갈비',
    description: '아이들도 좋아하는 달콤한 양념',
    category: '메뉴',
  },

  // 매장 인테리어
  {
    id: 'interior-1',
    url: getGalleryImage('매장입구'),
    alt: '맛있는고기에솜씨를더하다 소답중동점 입구',
    title: '매장 입구',
    description: '깔끔하고 모던한 외관',
    category: '매장',
  },
  {
    id: 'interior-2',
    url: getGalleryImage('식사공간'),
    alt: '맛있는고기에솜씨를더하다 소답중동점 홀',
    title: '넓은 식사 공간',
    description: '쾌적한 테이블 배치',
    category: '매장',
  },
  {
    id: 'interior-3',
    url: getGalleryImage('테이블세팅'),
    alt: '맛있는고기에솜씨를더하다 소답중동점 테이블',
    title: '테이블 세팅',
    description: '깨끗하고 정돈된 테이블',
    category: '매장',
  },
  {
    id: 'interior-4',
    url: getGalleryImage('셀프바'),
    alt: '맛있는고기에솜씨를더하다 소답중동점 셀프바',
    title: '셀프바',
    description: '다양한 반찬과 음료 무한리필',
    category: '매장',
  },
  {
    id: 'interior-5',
    url: getGalleryImage('단체석'),
    alt: '맛있는고기에솜씨를더하다 소답중동점 단체석',
    title: '단체석',
    description: '회식과 가족모임에 최적',
    category: '매장',
  },
  {
    id: 'interior-6',
    url: getGalleryImage('오픈주방'),
    alt: '맛있는고기에솜씨를더하다 소답중동점 주방',
    title: '오픈 주방',
    description: '청결하고 투명한 조리 과정',
    category: '매장',
  },

  // 조리 과정
  {
    id: 'cooking-1',
    url: getGalleryImage('고기굽는모습'),
    alt: '창원 소답동 고기 굽는 모습',
    title: '완벽한 굽기',
    description: '최상의 상태로 구워드립니다',
    category: '조리',
  },
  {
    id: 'cooking-2',
    url: getGalleryImage('황금빛삼겹살'),
    alt: '창원 소답동 삼겹살 굽기',
    title: '황금빛 삼겹살',
    description: '육즙이 살아있는 완벽한 굽기',
    category: '조리',
  },
  {
    id: 'cooking-3',
    url: getGalleryImage('고기커팅'),
    alt: '창원 소답동 고기 커팅',
    title: '정성스런 커팅',
    description: '먹기 좋은 크기로 커팅',
    category: '조리',
  },
  {
    id: 'cooking-4',
    url: getGalleryImage('플레이팅'),
    alt: '창원 소답동 고기 플레이팅',
    title: '플레이팅',
    description: '신선한 상태로 서빙',
    category: '조리',
  },

  // 숙성 시스템
  {
    id: 'aging-1',
    url: getGalleryImage('침지숙성시스템'),
    alt: '스페인 듀록 침지숙성 시스템',
    title: '침지숙성',
    description: '2도 이하 물속에서 20일간 숙성',
    category: '숙성',
  },
  {
    id: 'aging-2',
    url: getGalleryImage('건식숙성시스템'),
    alt: '스페인 듀록 건식숙성 시스템',
    title: '건식숙성',
    description: '저온 공기 순환 방식',
    category: '숙성',
  },
  {
    id: 'aging-3',
    url: getGalleryImage('숙성원육'),
    alt: '숙성된 스페인 듀록 원육',
    title: '숙성 원육',
    description: '풍미와 육즙이 살아있는 프리미엄 품질',
    category: '숙성',
  },

  // 사이드 메뉴
  {
    id: 'side-1',
    url: getGalleryImage('된장냉면'),
    alt: '창원 소답동 된장냉면',
    title: '된장냉면',
    description: '시그니처 냉면',
    category: '사이드',
  },
  {
    id: 'side-2',
    url: getGalleryImage('김치찌개'),
    alt: '창원 소답동 김치찌개',
    title: '김치찌개',
    description: '얼큰하고 시원한',
    category: '사이드',
  },
  {
    id: 'side-3',
    url: getGalleryImage('반찬'),
    alt: '창원 소답동 반찬',
    title: '다양한 반찬',
    description: '셀프바 무한리필',
    category: '사이드',
  },
];

// 카테고리별 갤러리 이미지 가져오기
export function getGalleryByCategory(category: string) {
  return galleryData.filter((image) => image.category === category);
}

// 모든 카테고리 목록 가져오기
export function getGalleryCategories() {
  const categories = [...new Set(galleryData.map((image) => image.category))];
  return categories;
}

// 랜덤 갤러리 이미지 가져오기
export function getRandomGalleryImages(count: number = 6) {
  const shuffled = [...galleryData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 대표 이미지 가져오기 (메뉴 카테고리의 첫 6개)
export function getFeaturedGalleryImages() {
  return getGalleryByCategory('메뉴').slice(0, 6);
}
