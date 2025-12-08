'use client';

export default function ReviewSection() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p>"고기가 정말 부드럽고 맛있어요. 재방문 의사 있습니다!"</p>
                        <div className="mt-4 font-bold text-sm">- 김** 고객님</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p>"가족 모임하기 좋은 곳이네요. 친절해서 좋았습니다."</p>
                        <div className="mt-4 font-bold text-sm">- 이** 고객님</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
