import React from 'react';
import { MenuItem } from '@/types';
import { Card } from '@/components/common/Card';
import { formatPrice } from '@/lib/utils';

interface MenuCardProps {
    item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
    return (
        <Card className="p-6 h-full flex flex-col justify-between hover:border-[#D4AF37] transition-colors">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                    <span className="text-lg font-bold text-[#8B4513] dark:text-[#D4AF37]">
                        {formatPrice(item.price)}원
                    </span>
                </div>
                {item.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                )}
                {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-[#8B4513]/10 dark:bg-[#D4AF37]/10 px-2 py-1 text-xs font-medium text-[#8B4513] dark:text-[#D4AF37]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {item.unit && (
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-500 text-right">
                    {item.unit}
                </div>
            )}
        </Card>
    );
}
