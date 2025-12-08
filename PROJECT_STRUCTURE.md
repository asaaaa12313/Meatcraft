# 프로젝트 구조

## 디렉토리 구조

```
matitnungogi/
├── src/
│   ├── app/                      # Next.js App Router 페이지
│   │   ├── layout.tsx            # 루트 레이아웃 (SEO 메타데이터 포함)
│   │   ├── page.tsx              # 홈페이지
│   │   ├── globals.css           # 전역 스타일 (Tailwind + 커스텀 컬러)
│   │   ├── brand-story/          # 브랜드 스토리
│   │   ├── aging-system/         # 숙성 시스템
│   │   ├── menu/                 # 메뉴
│   │   ├── gallery/              # 갤러리
│   │   ├── notice/               # 공지사항
│   │   ├── review/               # 리뷰
│   │   ├── reservation/          # 예약/문의
│   │   └── location/             # 오시는길
│   ├── components/               # React 컴포넌트
│   │   ├── layout/              # 레이아웃 컴포넌트 (Header, Footer)
│   │   ├── common/              # 공통 컴포넌트 (Button, Card 등)
│   │   └── sections/            # 섹션 컴포넌트 (Hero, USP 등)
│   ├── data/                    # 정적 데이터 파일
│   │   ├── menu.ts              # 메뉴 데이터
│   │   ├── gallery.ts           # 갤러리 데이터
│   │   ├── notice.ts            # 공지사항 데이터
│   │   └── review.ts            # 리뷰 데이터
│   ├── lib/                     # 유틸리티 라이브러리
│   │   ├── constants.ts         # 상수 (매장정보, 네비게이션, SEO)
│   │   └── utils.ts             # 유틸리티 함수
│   └── types/                   # TypeScript 타입 정의
│       └── index.ts             # 전역 타입
├── public/                      # 정적 파일
│   └── images/                  # 이미지 파일
│       ├── hero/                # 히어로 이미지
│       ├── menu/                # 메뉴 이미지
│       ├── gallery/             # 갤러리 이미지
│       └── interior/            # 매장 인테리어 이미지
└── prd.md                       # 프로젝트 요구사항 문서
```

## 완료된 설정

### ✅ 1. 프로젝트 초기화
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint

### ✅ 2. 디렉토리 구조
- 8개 페이지 라우트 생성
- components/layout, common, sections 폴더
- data, lib, types 폴더

### ✅ 3. 타입 시스템
- `src/types/index.ts`: 전체 타입 정의
  - MenuItem, MenuCategory
  - GalleryImage
  - Notice, Review
  - StoreInfo, USPItem, NavItem

### ✅ 4. 상수 및 설정
- `src/lib/constants.ts`:
  - STORE_INFO: 매장 정보
  - NAV_ITEMS: 네비게이션 메뉴
  - SOCIAL_LINKS: SNS 링크
  - SEO_CONFIG: SEO 기본 설정
  - GA_EVENTS: GA4 이벤트 이름

### ✅ 5. 유틸리티 함수
- `src/lib/utils.ts`:
  - cn(): Tailwind 클래스 병합
  - formatPhoneNumber(): 전화번호 포맷팅
  - formatPrice(): 가격 포맷팅
  - formatDate(): 날짜 포맷팅
  - trackEvent(): GA4 이벤트 트래킹
  - handleExternalLink(): 외부 링크 처리
  - handlePhoneCall(): 전화 걸기

### ✅ 6. 스타일 시스템
- 브랜드 컬러 팔레트:
  - Primary: 브라운 계열 (#8B4513)
  - Secondary: 골드 계열 (#D4AF37)
  - Accent: 따뜻한 레드 (#C04000)
- 한글 폰트: Noto Sans KR
- 커스텀 스크롤바

### ✅ 7. SEO 최적화
- 메타데이터 설정 (Open Graph, Twitter Card)
- 다국어 설정 (ko_KR)
- 검색엔진 인덱싱 설정
- 구조화된 데이터 준비

## 다음 단계

### 1. 공통 컴포넌트 개발
- Header (네비게이션, 로고)
- Footer (매장정보, SNS 링크)
- Button (Primary, Secondary)
- Card 컴포넌트들

### 2. 데이터 파일 작성
- menu.ts: 메뉴 데이터
- gallery.ts: 갤러리 이미지
- notice.ts: 공지사항
- review.ts: 고객 리뷰

### 3. 페이지 개발
- 홈페이지부터 순차적으로 개발
- 각 페이지별 SEO 메타데이터 설정

## 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 체크
npm run lint
```

## 환경 변수 (추후 설정 필요)

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://matitnungogi.com
```

## 주의사항

1. **실제 데이터 교체 필요**:
   - 전화번호
   - 주소
   - 네이버 지도 URL
   - 네이버 예약 URL
   - SNS 링크
   - 구글/네이버 사이트 인증 코드

2. **이미지 준비**:
   - 히어로 이미지
   - 메뉴 사진
   - 매장 인테리어 사진
   - 요리 과정 사진
   - OG 이미지 (1200x630)

3. **SEO 설정**:
   - Google Search Console 등록
   - 네이버 웹마스터 도구 등록
   - sitemap.xml 생성
   - robots.txt 설정
