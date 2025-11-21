import { Notice } from '@/types';

export const noticeData: Notice[] = [
  {
    id: 'notice-1',
    title: '맛있는고기에솜씨를더하다 소답중동점 오픈',
    content: `안녕하세요. 맛있는고기에솜씨를더하다 소답중동점입니다.

저희 매장은 스페인 듀록 원육을 침지숙성과 건식숙성을 거쳐 최상의 맛으로 제공해드립니다.

🥩 주요 메뉴
- 숙성 삼겹살, 목살, 오겹살, 항정살, 가브리살
- 한우 차돌박이
- 양념 돼지갈비

🎉 오픈 이벤트
- 네이버 예약 시 음료 서비스
- 리뷰 작성 시 다음 방문 할인쿠폰

많은 관심과 사랑 부탁드립니다.`,
    date: '2024-11-01',
    author: '관리자',
    isImportant: true,
  },
  {
    id: 'notice-2',
    title: '연말 회식 및 단체 예약 안내',
    content: `연말을 맞아 회식 및 단체 예약이 많아지고 있습니다.

📞 단체 예약 안내
- 10인 이상 단체석 별도 준비 가능
- 사전 예약 시 테이블 세팅 미리 준비
- 주차 2시간 무료 (유니파크 주차장)

예약 문의: 055-XXX-XXXX

원활한 서비스를 위해 사전 예약 부탁드립니다.`,
    date: '2024-12-01',
    author: '관리자',
    isImportant: true,
  },
  {
    id: 'notice-3',
    title: '정기 휴무일 안내',
    content: `저희 매장은 매주 월요일 정기 휴무입니다.

🗓️ 영업시간
- 화요일 ~ 일요일: 11:30 ~ 22:00 (라스트오더 21:30)
- 월요일: 정기 휴무
- 브레이크타임: 15:00 ~ 17:00

방문 전 확인 부탁드립니다.`,
    date: '2024-11-15',
    author: '관리자',
    isImportant: false,
  },
  {
    id: 'notice-4',
    title: '겨울 시즌 특별 메뉴 출시',
    content: `겨울 시즌을 맞아 특별 메뉴를 출시합니다!

❄️ 겨울 한정 메뉴
- 듀록 삼겹 스테이크 (200g) - 18,000원
- 한우 차돌 샤브샤브 세트 - 39,000원

따뜻한 국물 요리로 겨울 추위를 녹여보세요.`,
    date: '2024-12-10',
    author: '관리자',
    isImportant: false,
  },
  {
    id: 'notice-5',
    title: '주차 안내',
    content: `매장 이용 고객님께 주차 안내 드립니다.

🅿️ 주차 정보
- 유니파크 주차장 이용 (도보 2분)
- 식사 시 2시간 무료
- 주차권은 매장에서 발급

주차 관련 문의사항은 매장 직원에게 말씀해주세요.`,
    date: '2024-11-20',
    author: '관리자',
    isImportant: false,
  },
  {
    id: 'notice-6',
    title: '크리스마스 & 연말연시 영업 안내',
    content: `크리스마스 및 연말연시 영업 안내입니다.

🎄 특별 영업 일정
- 12월 24일 (크리스마스 이브): 정상 영업
- 12월 25일 (크리스마스): 정상 영업
- 12월 31일 (대설날): 정상 영업
- 1월 1일 (신정): 휴무

특별한 날, 맛있는 고기와 함께하세요!`,
    date: '2024-12-15',
    author: '관리자',
    isImportant: true,
  },
];

// 중요 공지사항만 가져오기
export function getImportantNotices() {
  return noticeData.filter((notice) => notice.isImportant);
}

// 최신 공지사항 가져오기
export function getLatestNotices(count: number = 5) {
  return [...noticeData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// 특정 공지사항 가져오기
export function getNoticeById(id: string) {
  return noticeData.find((notice) => notice.id === id);
}
