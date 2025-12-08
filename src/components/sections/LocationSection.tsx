'use client';

import { STORE_INFO } from '@/lib/constants';

export default function LocationSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">오시는 길</h2>
                <div className="text-center">
                    <p className="text-lg mb-4">{STORE_INFO.address}</p>
                    <p>{STORE_INFO.phone}</p>
                </div>
            </div>
        </section>
    );
}
