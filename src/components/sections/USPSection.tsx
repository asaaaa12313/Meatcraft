export default function USPSection() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">숙성의 차이</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-xl mb-4">침지 숙성</h3>
                        <p>진공 포장된 고기를 저온의 물속에서 숙성하여 육즙 유출을 막습니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-xl mb-4">건조 숙성</h3>
                        <p>최적의 온도와 습도에서 숙성하여 풍미를 더합니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-xl mb-4">합리적 가격</h3>
                        <p>최상급 고기를 합리적인 가격에 제공합니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
