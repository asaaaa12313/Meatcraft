import { StoreInfo, NavItem } from '@/types';

// 매장 정보
export const STORE_INFO: StoreInfo = {
  name: '맛있는고기에솜씨를더하다 소담중동점 (업데이트됨)',
  phone: '0507-1353-9229',
  address: '경남 창원시 의창구 의창대로261번길 6 1층',
  addressDetail: '소답중동점',
  businessHours: [
    { day: '매일', hours: '11:30 - 24:00' }
  ],
  breakTime: '',
  lastOrder: '23:00',
  naverMapUrl: 'https://naver.me/FbOr9GXS', // 실제 네이버 지도 URL로 교체 필요
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d128.68!3d35.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEzJzEyLjAiTiAxMjjCsDQwJzQ4LjAiRQ!5e0!3m2!1sko!2skr!4v1234567890', // 실제 Google Maps 임베드 URL로 교체 필요
  naverBookingUrl: 'https://booking.naver.com/booking/6/bizes/846524', // 실제 네이버 예약 URL로 교체 필요
  naverPlaceUrl: 'https://naver.me/FbOr9GXS', // 실제 네이버 플레이스 URL로 교체 필요
  parking: '유니파크 주차장 2시간 무료',
  businessNumber: '830-03-01788', // 실제 사업자번호로 교체 필요
  ownerName: '박금상'
};

// 네비게이션 메뉴
export const NAV_ITEMS: NavItem[] = [
  {
    label: '브랜드 스토리',
    href: '/brand-story',
    description: '듀록과 숙성 이야기'
  },
  {
    label: '숙성 시스템',
    href: '/aging-system',
    description: '듀얼 숙성의 비밀'
  },
  {
    label: '메뉴',
    href: '/menu',
    description: '전체 메뉴 보기'
  },


  {
    label: '리뷰',
    href: '/review',
    description: '고객 후기'
  },
  {
    label: '예약/문의',
    href: '/reservation',
    description: '예약하기'
  },
  {
    label: '오시는길',
    href: '/location',
    description: '위치 안내'
  }
];

// SNS 링크 (삭제됨)

// SEO 기본 설정
export const SEO_CONFIG = {
  defaultTitle: '맛있는고기숙성육을더한다 소담스런집 - 창원 이베리코 숙성삼겹',
  defaultDescription: '스페인 이베리코 듀얼 숙성 시스템으로 완성된 프리미엄 삼겹살. 창원 상남동 위치, 가족 모임과 회식에 최적화된 고급 고기집',
  keywords: [
    '창원 소담스런집',
    '창원 고기집',
    '창원 숙성삼겹',
    '창원 이베리코',
    '상남동 고기집',
    '오동 고기집',
    '용호동 고기집',
    '창원 회식 장소',
    '창원 가족 모임',
    '창원 데이트 맛집'
  ],
  siteUrl: 'https://matitnungogi.com', // 실제 도메인으로 교체 필요
  ogImage: '/images/og-image.jpg'
};

// GA4 이벤트 이름
export const GA_EVENTS = {
  PHONE_CLICK: 'phone_click',
  NAVER_BOOKING_CLICK: 'naver_booking_click',
  MAP_CLICK: 'map_click',
  MENU_CATEGORY_CLICK: 'menu_category_click',
  REVIEW_DETAIL_VIEW: 'review_detail_view',

};
