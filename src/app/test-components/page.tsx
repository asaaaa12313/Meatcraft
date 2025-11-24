import React from 'react';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { SectionTitle } from '@/components/common/SectionTitle';
import { MenuCard } from '@/components/sections/MenuCard';
import { ReviewCard } from '@/components/sections/ReviewCard';
import { GalleryItem } from '@/components/sections/GalleryItem';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TestComponentsPage() {
    const mockMenuItem = {
        id: '1',
        name: '숙성 삼겹살',
        price: 13000,
        description: '20일간의 침지숙성과 건식숙성을 거친 프리미엄 삼겹살',
        tags: ['BEST', '추천'],
        unit: '150g'
    };

    const mockReview = {
        id: '1',
        author: '김철수',
        rating: 5,
        content: '고기가 정말 부드럽고 맛있어요. 직원분들도 친절하시고 매장도 깔끔해서 가족 모임하기 딱 좋습니다. 재방문 의사 100%입니다!',
        date: '2023-10-25',
        source: '네이버 예약'
    };

    const mockGalleryImage = {
        id: '1',
        url: '/images/test-image.jpg', // This image might not exist, but it's for structure test
        alt: '맛있는 고기',
        category: '메뉴',
        title: '숙성 삼겹살',
        description: '육즙 가득한 프리미엄 삼겹살'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto space-y-12">
                <SectionTitle title="Component Test Page" subtitle="Verifying all common components" />

                <section className="space-y-4">
                    <h3 className="text-xl font-bold">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                        <Button variant="primary" size="sm">Small</Button>
                        <Button variant="primary" size="lg">Large</Button>
                        <Button variant="primary" isLoading>Loading</Button>
                        <Button variant="primary" disabled>Disabled</Button>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-xl font-bold">Cards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6">Basic Card</Card>
                        <Card className="p-6" hover>Hover Card</Card>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-xl font-bold">Feature Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <MenuCard item={mockMenuItem} />
                        <ReviewCard review={mockReview} />
                        {/* GalleryItem requires an actual image to look good, but we test structure here */}
                        <div className="h-64">
                            {/* Placeholder for GalleryItem since we might not have images yet */}
                            <div className="bg-gray-200 h-full rounded-lg flex items-center justify-center">
                                Gallery Item Placeholder
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
