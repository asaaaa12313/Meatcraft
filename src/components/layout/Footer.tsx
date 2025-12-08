import Link from 'next/link';
import { STORE_INFO, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-400 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">{STORE_INFO.name}</h3>
                        <p className="text-sm mb-4">
                            맛있는 고기에 솜씨를 더하다.<br />
                            프리미엄 숙성육 전문점입니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">매장 정보</h4>
                        <ul className="space-y-2 text-sm">
                            <li>주소: {STORE_INFO.address}</li>
                            <li>전화: {STORE_INFO.phone}</li>
                            <li>영업시간: {STORE_INFO.businessHours[0].hours}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">메뉴</h4>
                        <ul className="space-y-2 text-sm">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
