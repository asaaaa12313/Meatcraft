import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS 클래스 병합 유틸리티
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 전화번호 포맷팅
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);

  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return phone;
}

// 가격 포맷팅 (천단위 콤마)
export function formatPrice(price: number): string {
  return price.toLocaleString('ko-KR');
}

// 날짜 포맷팅
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d);
}

// GA4 이벤트 트래킹 (클라이언트 사이드에서만 사용)
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
}

// 이미지 경로 생성
export function getImagePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

// 외부 링크 클릭 처리
export function handleExternalLink(url: string, eventName?: string) {
  if (eventName) {
    trackEvent(eventName, { url });
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

// 전화 걸기
export function handlePhoneCall(phoneNumber: string, eventName?: string) {
  if (eventName) {
    trackEvent(eventName, { phone: phoneNumber });
  }
  window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
}
