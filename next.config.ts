import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 정적 내보내기를 위해 이미지 최적화 비활성화 -> 유지 (사용자 요청 없으므로)
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 빈 turbopack 설정으로 경고 제거
  turbopack: {},
};

export default nextConfig;
