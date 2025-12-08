// 메뉴 관련 타입
export interface MenuItem {
  id: string;
  name: string;
  unit?: string;
  price: number;
  description?: string;
  image?: string;
  badge?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

// 갤러리 관련 타입
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category?: string;
  title?: string;
  description?: string;
}



// 리뷰 관련 타입
export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  image?: string;
  source?: string;
}

// 매장 정보 관련 타입
export interface StoreInfo {
  name: string;
  phone: string;
  address: string;
  addressDetail?: string;
  businessHours: Array<{
    day: string;
    hours: string;
  }>;
  breakTime?: string;
  lastOrder?: string;
  naverMapUrl: string;
  mapEmbedUrl: string;
  naverBookingUrl: string;
  naverPlaceUrl: string;
  parking: string;
  businessNumber: string;
  ownerName: string;
}

// USP 카드 관련 타입
export interface USPItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// 네비게이션 메뉴 타입
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}
