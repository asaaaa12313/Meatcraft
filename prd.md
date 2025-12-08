맛있는고기에솜씨를더하다 소답중동점
공식 홈페이지 제작 PRD (개발용 통합 버전, 이모지 없음)
0. Developer Summary

본 프로젝트는 Next.js 14(App Router) + TypeScript + Tailwind CSS 기반의 정적 웹사이트로 제작한다.
모든 페이지는 SSG 방식으로 출력하고, 메뉴 및 각종 콘텐츠는 1차 버전에서는 JSON/TS 객체로 관리한다.
2차 버전에서 Headless CMS(WordPress REST API, Notion API, Sanity) 연동을 고려한다.

기술 스택

Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Tailwind CSS

Icons: Heroicons

Deployment: Vercel

Build 방식: SSG 기반 정적 사이트

이미지: public/images 디렉토리 관리

SEO: Next Metadata API 활용

기본 디렉토리 구조

/app
  /brand-story
  /aging-system
  /menu
  /gallery
  /notice
  /review
  /reservation
  /location
/components
/data
/public/images
/styles

1. 프로젝트 개요

프로젝트명
맛있는고기에솜씨를더하다 소답중동점 홈페이지 제작

목적

브랜드 신뢰도 강화

스페인 듀록 원육의 차별화 포지셔닝

메뉴, 가격, 매장정보의 정확한 제공

예약, 전화 문의, 방문 유도 강화

네이버 지도, 플레이스, SNS 연결

후기 기반 콘텐츠 허브 구축

타겟 고객

창원 소답·중동·유니시티·어반브릭스 인근 상권

회식, 가족 모임, 데이트 목적 방문객

프리미엄 숙성삼겹을 선호하는 20~50대

품질과 가성비를 동시에 요구하는 지역 고객

핵심 컨셉
스페인 듀록 + 침지숙성 + 건식숙성의 조합으로 완성된 프리미엄 육즙 고기집

2. 핵심 가치 제안 (USP)

세계 3대 명품 돼지고기 스페인 듀록 사용

풍미 깊고 부드러운 육질

불포화지방산 비율이 높고 건강한 지방 구조

스페인 내 삼겹 수요가 낮아 가격 경쟁력 확보 가능

듀얼 숙성 시스템

침지숙성: 2도 이하 물속에서 20일간 숙성

건식숙성: 저온 공기 순환 방식 적용

육즙, 풍미, 감칠맛 강화

다양한 연령층을 만족시키는 메뉴 구성

어린이: 양념 돼지갈비

부모님, 어르신: 한우 차돌박이

젊은층: 숙성 삼겹, 목살, 항정, 가브리살

회식과 가족모임 최적화

넓고 정돈된 매장

테이블 간격 여유 있음

셀프바 무한리필

유니파크 주차장 2시간 무료

3. 사이트맵 및 URL 매핑
페이지명	URL	목적
Home	/	브랜드 USP, 추천메뉴, 지도, CTA
Brand Story	/brand-story	듀록 및 숙성 기술 설명, 매장 스토리
Signature Aging System	/aging-system	숙성 과정 설명, 시각 정보 중심
Menu	/menu	전체 메뉴, 가격, 상세설명
Gallery	/gallery	매장, 메뉴, 조리 이미지
Notice	/notice	공지, 이벤트 정보
Review	/review	고객 후기 정리
Reservation	/reservation	전화, 네이버 예약 연결
Location	/location	지도, 주차 안내
4. Global Layout 구성 (AI 코드 생성용 상세)

Header

로고

Global Navigation Menu

네이버 예약 버튼 노출

Footer

주소

매장 연락처

영업시간

주차 안내

SNS 링크

공통 컴포넌트

SectionTitle

PrimaryButton, SecondaryButton

USPCard (3개 섹션)

MenuCard

ReviewCard

GalleryItem

InfoBanner

Mobile Bottom CTA (전화, 예약 고정 표시)

5. UX 및 반응형 디자인 가이드

모바일 퍼스트 설계

Header는 sticky

모바일 하단에 CTA 바 고정

메뉴 리스트는 모바일 1컬럼, 태블릿 2컬럼, 데스크탑 3컬럼

Lazy Loading 적용

텍스트 대비는 WCAG A 기준 충족

주요 CTA는 화면 어디에서도 접근 가능하도록 고정 배치

6. 페이지별 상세 구성
6-1. Home

히어로 배너(숙성 삼겹 및 듀록 촬영컷)

메인 카피: “숙성의 차이가 맛의 차이”

서브 카피: 스페인 듀록 + 침지숙성 + 건식숙성

USP 카드(3개)

추천 메뉴 슬라이더

브랜드 스토리 스니펫

영업시간 + CTA

네이버 지도 iframe

주차 안내 영역 요약

6-2. Brand Story

듀록 소개, 생산지, 특징

침지숙성, 건식숙성 원리

합리적 가격의 구조

매장 분위기 소개

6-3. Signature Aging System

숙성 과정 UI 다이어그램

LAB 스타일 섹션

숙성 전/후 비교 이미지

맛 포인트 요약: 육즙, 결, 지방풍미

6-4. Menu

카테고리 단위 구분

숙성육

모둠 세트

스페셜

양념

사이드

식사

주류/음료

각 메뉴 항목은 JSON 기반으로 데이터 매핑한다.

6-5. Gallery

이미지 그리드

고기 굽는 장면

매장 전경

인테리어, 셀프바

메뉴 단품 촬영컷

6-6. Notice / Event

계절 메뉴

공지

명절 안내

이벤트 배너

6-7. Review

대표 사진 리뷰

핵심 키워드: 고기질, 서비스, 청결

네이버 플레이스 리뷰로 연결

6-8. Reservation / Contact

전화 예약

네이버 예약 버튼

단체 문의

주차 안내

문의폼(옵션)

6-9. Location

창원 중동사거리 기준 위치

유니시티 도보 10분

지도 iframe

유니파크 주차장 안내

7. 데이터 구조 (AI 코드 작성용)

예시: /data/menu.ts

export const menuData = [
  {
    id: "aging",
    name: "숙성육",
    items: [
      { name: "숙성 삼겹살", unit: "150g", price: 9900, desc: "20일 침지숙성" },
      { name: "숙성 목살", unit: "150g", price: 9900 },
      { name: "숙성 오겹살", unit: "150g", price: 9900 },
      { name: "숙성 항정살", unit: "150g", price: 12000 },
      { name: "숙성 가브리살", unit: "150g", price: 9900 }
    ]
  },
  ...
];


동일한 방식으로

galleryData.ts

noticeData.ts

reviewData.ts
도 구성한다.

8. 이미지 관리 규칙

경로: /public/images/*

파일명 예시

hero-main.jpg

menu-samgyeop.jpg

gallery-01.jpg

alt 텍스트는 지역명+핵심키워드 포함
예: “창원 소답동 숙성 삼겹살”

9. SEO 기본 설정

Title, Meta description 페이지별 별도 설정

H1은 페이지당 1개

키워드

창원 소답동 고기집

창원 숙성삼겹

창원 회식 장소

중동 유니시티 고기집

Schema.org LocalBusiness 구조화 데이터 추가 권장

10. GA4 트래킹 계획

전화번호 클릭

네이버 예약 버튼 클릭

지도 클릭

메뉴 카테고리 클릭

후기 상세 보기 클릭

11. 개발 단계별 범위

1차 버전 (상용화 가능 수준)

전체 페이지 정적 완성

메뉴 JSON 데이터 반영

지도 iframe 삽입

갤러리 구성

반응형 완성

기본 SEO 세팅

2차 버전

CMS 연동

리뷰 자동 반영

이벤트 전용 랜딩 페이지

애니메이션/스크롤 모션 추가

다국어(선택)