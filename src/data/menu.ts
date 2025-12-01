import { MenuCategory } from '@/types';
import { getMenuImage } from '@/lib/image';

export const menuData: MenuCategory[] = [
  {
    id: 'aging',
    name: '숙성육',
    description: '20일간 침지숙성과 건식숙성을 거친 스페인 듀록 프리미엄 숙성육',
    items: [
      {
        id: 'aging-samgyeop',
        name: '숙성 삼겹살',
        price: 4990,
        unit: '100g',
        description: '20일 침지숙성으로 육즙과 풍미가 깊어진 스페인 듀록 삼겹살',
        image: getMenuImage('aged-samgyeop'),
        badge: '시그니처',
        tags: ['숙성', '인기메뉴'],
      },
      {
        id: 'aging-moksal',
        name: '숙성 목살',
        price: 4990,
        unit: '100g',
        description: '부드럽고 담백한 맛이 일품인 숙성 목살',
        image: getMenuImage('aged-moksal'),
        badge: '시그니처',
        tags: ['숙성', '인기메뉴'],
      },
      {
        id: 'aging-ogyeop',
        name: '숙성 오겹살',
        price: 5290,
        unit: '100g',
        description: '삼겹보다 두껍고 풍미가 진한 오겹살',
        image: getMenuImage('ogyeop'),
        tags: ['숙성'],
      },
      {
        id: 'aging-hangjeong',
        name: '숙성 항정살',
        price: 5990,
        unit: '100g',
        description: '목 뒷부분의 희소부위, 마블링이 아름다운 프리미엄 부위',
        image: getMenuImage('hangjeong'),
        tags: ['숙성', '희소부위'],
      },
      {
        id: 'aging-gabriel',
        name: '숙성 가브리살',
        price: 5990,
        unit: '100g',
        description: '갈비와 삼겹 사이의 부드러운 부위',
        image: getMenuImage('gabriel'),
        tags: ['숙성'],
      },
    ],
  },
  {
    id: 'set',
    name: '모둠 세트',
    description: '다양한 부위를 한번에 즐기는 구성 좋은 세트 메뉴',
    items: [
      {
        id: 'set-a',
        name: '모둠 A세트 (2~3인)',
        price: 28990,
        unit: '1세트',
        description: '삼겹·목살·오겹살이 포함된 기본 구성',
        image: getMenuImage('set-a'),
        badge: '시그니처',
        tags: ['세트', '2-3인'],
      },
      {
        id: 'set-b',
        name: '모둠 B세트 (3~4인)',
        price: 37990,
        unit: '1세트',
        description: '삼겹·목살·항정·가브리살 포함',
        image: getMenuImage('set-b'),
        tags: ['세트', '2-4인'],
      },
      {
        id: 'set-family',
        name: '패밀리 세트 (4인)',
        price: 42990,
        unit: '1세트',
        description: '삼겹·목살·항정·가브리살·오겹살이 푸짐하게',
        image: getMenuImage('set-family'),
        badge: '시그니처',
        tags: ['세트', '가족', '4인 이상'],
      },
    ],
  },
  {
    id: 'lunch',
    name: '점심특선',
    description: '평일 점심시간 한정 특별 메뉴 (11:30~14:30)',
    items: [
      {
        id: 'lunch-kimchi',
        name: '묵은지 돼지 김치찌개',
        price: 8000,
        unit: '1인분',
        description: '밑반찬 6가지 제공, 1인 식사 가능',
        image: getMenuImage('kimchi-stew'),
        badge: '인기',
        tags: ['점심', '찌개'],
      },
      {
        id: 'lunch-jeyuk',
        name: '점심특선 제육볶음+된장찌개',
        price: 8000,
        unit: '1인분',
        description: '제육볶음 1인(200g) 8,000원 + 된장찌개',
        image: getMenuImage('jeyuk'),
        badge: '시그니처',
        tags: ['점심', '제육', '인기메뉴'],
      },
    ],
  },
  {
    id: 'special',
    name: '스페셜 메뉴',
    description: '특별한 날을 위한 프리미엄 메뉴',
    items: [
      {
        id: 'special-chadol',
        name: '한우 차돌박이',
        price: 12990,
        unit: '100g',
        description: '국내산 한우 차돌박이, 부모님 모시기 좋은 메뉴',
        image: getMenuImage('chadol'),
        badge: '한우',
        tags: ['한우', '프리미엄'],
      },
      {
        id: 'special-daepae',
        name: '더하다 대패',
        price: 4490,
        unit: '100g',
        description: '얇게 썰어 부드럽게 즐기는 대패삼겹',
        image: getMenuImage('daepae'),
        tags: ['대패', '프리미엄'],
      },
    ],
  },
  {
    id: 'seasoned',
    name: '양념 메뉴',
    description: '아이들도 좋아하는 달콤한 양념 메뉴',
    items: [
      {
        id: 'seasoned-galbi',
        name: '수제 양념 돼지갈비',
        price: 7990,
        unit: '200g',
        description: '달콤하고 부드러운 양념에 재운 돼지갈비',
        image: getMenuImage('galbi'),
        tags: ['양념', '아이 추천'],
      },
      {
        id: 'seasoned-kkobdegi',
        name: '껍데기',
        price: 4990,
        unit: '120g',
        description: '쫄깃한 식감의 껍데기',
        image: getMenuImage('skin'),
        tags: ['껍데기'],
      },
    ],
  },
  {
    id: 'side',
    name: '사이드 메뉴',
    description: '고기와 함께 즐기는 사이드 메뉴',
    items: [
      {
        id: 'side-kimchi-jjigae',
        name: '김치찌개',
        price: 5000,
        unit: '1인분',
        description: '얼큰하고 시원한 김치찌개',
        image: getMenuImage('kimchi-stew'),
        tags: ['찌개'],
      },
      {
        id: 'side-doenjang-jjigae',
        name: '된장찌개',
        price: 4000,
        unit: '1인분',
        description: '구수한 된장찌개',
        image: getMenuImage('soybean-stew'),
        tags: ['찌개'],
      },
      {
        id: 'side-nurungji',
        name: '누룽지',
        price: 3000,
        unit: '1개',
        description: '구수한 누룽지',
        image: getMenuImage('nurungji'),
        tags: ['식사'],
      },
      {
        id: 'side-cold-noodle',
        name: '냉면 (물/비빔)',
        price: 6000,
        unit: '1그릇',
        description: '시원한 물냉면 또는 비빔냉면',
        image: getMenuImage('cold-noodle'),
        tags: ['면', '냉면'],
      },
      {
        id: 'side-ramen',
        name: '해장라면',
        price: 4000,
        unit: '1개',
        description: '든든한 라면',
        image: getMenuImage('ramen'),
        tags: ['면'],
      },
      {
        id: 'side-minari',
        name: '미나리 (계절메뉴)',
        price: 4990,
        unit: '1접시',
        description: '싱싱한 미나리',
        image: getMenuImage('minari'),
        tags: ['야채'],
      },
      {
        id: 'side-mushroom',
        name: '모듬 버섯',
        price: 1990,
        unit: '1접시',
        description: '신선한 버섯 모듬',
        image: getMenuImage('mushroom'),
        tags: ['야채'],
      },
      {
        id: 'side-sausage',
        name: '수제 소세지',
        price: 4990,
        unit: '200g',
        description: '아이들이 좋아하는 소세지',
        image: getMenuImage('sausage'),
        tags: ['아이 추천'],
      },
    ],
  },
  {
    id: 'rice',
    name: '식사',
    description: '든든한 한끼 식사',
    items: [
      {
        id: 'rice-bap',
        name: '공기밥',
        price: 1000,
        unit: '1공기',
        description: '국내산 쌀로 지은 밥',
        image: getMenuImage('rice'),
        tags: ['밥'],
      },
    ],
  },
  {
    id: 'drink',
    name: '주류/음료',
    description: '각종 주류와 음료수',
    items: [
      {
        id: 'drink-soju',
        name: '소주/맥주',
        price: 4000,
        unit: '1병',
        description: '소주, 맥주 각종',
        tags: ['주류'],
      },

      {
        id: 'drink-bokbunja',
        name: '복분자',
        price: 12000,
        unit: '1병',
        description: '달콤한 복분자주',
        tags: ['주류'],
      },
      {
        id: 'drink-beverage',
        name: '음료',
        price: 2000,
        unit: '1병',
        description: '콜라, 사이다 등',
        tags: ['음료'],
      },
    ],
  },
];

// 카테고리별로 메뉴 가져오기
export function getMenuByCategory(categoryId: string) {
  return menuData.find((category) => category.id === categoryId);
}

// 모든 메뉴 아이템 가져오기 (평탄화)
export function getAllMenuItems() {
  return menuData.flatMap((category) => category.items);
}

// 특정 메뉴 아이템 가져오기
export function getMenuItem(itemId: string) {
  return getAllMenuItems().find((item) => item.id === itemId);
}

// 추천 메뉴 가져오기 (뱃지가 있는 메뉴)
export function getRecommendedMenus() {
  return getAllMenuItems().filter((item) => item.badge);
}

// 인기 메뉴 가져오기 (인기메뉴 태그가 있는 메뉴)
export function getPopularMenus() {
  return getAllMenuItems().filter((item) => item.tags?.includes('인기메뉴'));
}

// 시그니처 메뉴 가져오기
export function getSignatureMenus() {
  return getAllMenuItems().filter((item) => item.badge === '시그니처');
}

// 점심특선 메뉴 가져오기
export function getLunchMenus() {
  const lunchCategory = menuData.find(cat => cat.id === 'lunch');
  return lunchCategory ? lunchCategory.items : [];
}
