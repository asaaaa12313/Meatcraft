import { Review } from '@/types';

export const reviewData: Review[] = [
  {
    id: 'review-1',
    author: '김**',
    rating: 5,
    content: '창원에서 이렇게 맛있는 숙성 삼겹살은 처음입니다! 육즙이 정말 살아있고 부드러워요. 셀프바도 깨끗하고 반찬도 다양해서 좋았습니다. 가족 모임으로 방문했는데 모두 만족했어요.',
    date: '2024-12-15',
    image: '/images/reviews/review-1.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-2',
    author: '이**',
    rating: 5,
    content: '회사 회식으로 다녀왔는데 분위기도 좋고 고기 질이 정말 좋았습니다. 특히 항정살이 마블링이 예술이네요. 직원분들도 친절하시고 주차도 편해서 또 오고 싶어요.',
    date: '2024-12-10',
    image: '/images/reviews/review-2.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-3',
    author: '박**',
    rating: 4.5,
    content: '중동 유니시티 근처에서 찾다가 발견했는데 대박입니다. 숙성 삼겹살이 정말 다르네요. 냉면도 맛있고 된장찌개도 구수해요. 가격도 합리적이에요!',
    date: '2024-12-08',
    image: '/images/reviews/review-3.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-4',
    author: '최**',
    rating: 5,
    content: '데이트로 다녀왔는데 분위기 너무 좋아요. 고기도 신선하고 맛있었고, 특히 가브리살 추천합니다! 직원분이 구워주셔서 편하게 먹었어요. 재방문 의사 100%',
    date: '2024-12-05',
    image: '/images/reviews/review-4.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-5',
    author: '정**',
    rating: 5,
    content: '아이 데리고 갔는데 양념 돼지갈비 완전 좋아해요! 매장도 넓고 깨끗하고, 셀프바에 아이들이 좋아할만한 것들도 많았습니다. 가족 외식 장소로 강추!',
    date: '2024-12-03',
    image: '/images/reviews/review-5.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-6',
    author: '강**',
    rating: 4.5,
    content: '한우 차돌박이가 정말 맛있어요. 부모님 모시고 갔는데 너무 좋아하셨습니다. 고기 질도 좋고 서비스도 훌륭해요. 주차도 편리하고요!',
    date: '2024-12-01',
    image: '/images/reviews/review-6.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-7',
    author: '윤**',
    rating: 5,
    content: '친구들이랑 모둠 세트 시켰는데 양도 푸짐하고 다양한 부위 맛볼 수 있어서 좋았어요. 특히 목살이 진짜 부드러웠습니다. 분위기도 깔끔하고 재방문 의향 있어요!',
    date: '2024-11-28',
    image: '/images/reviews/review-7.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-8',
    author: '조**',
    rating: 5,
    content: '소답동에서 제일 맛있는 고기집 같아요. 숙성 시스템이 있다고 해서 믿고 먹을 수 있고, 실제로 맛도 확실히 다릅니다. 냉면도 꼭 드세요!',
    date: '2024-11-25',
    image: '/images/reviews/review-8.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-9',
    author: '홍**',
    rating: 4.5,
    content: '창원 중동사거리 근처에서 맛집 찾다가 왔는데 대성공! 고기가 정말 부드럽고 육즙이 살아있어요. 셀프바 리필도 자유롭고 음료수도 다양해요.',
    date: '2024-11-22',
    image: '/images/reviews/review-9.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-10',
    author: '서**',
    rating: 5,
    content: '생일 기념으로 방문했는데 직원분들이 정말 친절하셨어요. 고기 굽는 것도 도와주시고, 맛도 최고였습니다. 특별한 날 오기 딱 좋은 곳이에요!',
    date: '2024-11-20',
    image: '/images/reviews/review-10.jpg',
    source: '네이버 플레이스',
  },
  {
    id: 'review-11',
    author: '안**',
    rating: 5,
    content: '유니시티 근처에서 고기 먹고 싶을 때 항상 여기 와요. 고기 질도 좋고 가성비도 훌륭합니다. 목살이랑 항정살 조합 최고!',
    date: '2024-11-18',
    source: '네이버 플레이스',
  },
  {
    id: 'review-12',
    author: '장**',
    rating: 4.5,
    content: '매장이 깨끗하고 위생적이에요. 코로나 이후로 위생에 더 신경쓰게 되는데 여기는 믿고 먹을 수 있어요. 고기 맛도 당연히 최고구요!',
    date: '2024-11-15',
    source: '네이버 플레이스',
  },
];

// 최신 리뷰 가져오기
export function getLatestReviews(count: number = 6) {
  return [...reviewData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// 평균 평점 계산
export function getAverageRating() {
  const sum = reviewData.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviewData.length).toFixed(1);
}

// 총 리뷰 개수
export function getTotalReviewCount() {
  return reviewData.length;
}

// 별점별 리뷰 개수
export function getReviewCountByRating() {
  return {
    5: reviewData.filter((r) => r.rating === 5).length,
    4: reviewData.filter((r) => r.rating >= 4 && r.rating < 5).length,
    3: reviewData.filter((r) => r.rating >= 3 && r.rating < 4).length,
    2: reviewData.filter((r) => r.rating >= 2 && r.rating < 3).length,
    1: reviewData.filter((r) => r.rating >= 1 && r.rating < 2).length,
  };
}

// 특정 리뷰 가져오기
export function getReviewById(id: string) {
  return reviewData.find((review) => review.id === id);
}

// 사진이 있는 리뷰만 가져오기
export function getPhotoReviews() {
  return reviewData.filter((review) => review.image);
}
