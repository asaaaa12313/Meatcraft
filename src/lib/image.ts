/**
 * 이미지 유틸리티
 * 실제 이미지가 준비될 때까지 placeholder를 제공합니다
 */

export function getMenuImage(id: string): string {
  // 실제 메뉴 이미지 경로 사용 (png 형식)
  return `/images/menu/${id}.png`;
}

export function getGalleryImage(id: string): string {
  return `https://placehold.co/800x600/8B4513/FFF?text=${encodeURIComponent(id)}`;
}

export function getHeroImage(): string {
  // 실제 hero 이미지가 있으면 해당 경로 사용, 없으면 placeholder
  return '/images/hero/hero-bg.jpg';
}

export function getBrandImage(name: string): string {
  return `https://placehold.co/800x600/8B4513/FFF?text=${encodeURIComponent(name)}`;
}
