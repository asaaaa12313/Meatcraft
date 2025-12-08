import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // SSG를 위한 정적 내보내기
  images: {
    unoptimized: true, // 정적 내보내기를 위해 이미지 최적화 비활성화
  },
  trailingSlash: true, // 정적 호스팅을 위한 슬래시 추가
  // 빈 turbopack 설정으로 경고 제거
  turbopack: {},
};

export default nextConfig;
