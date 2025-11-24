import React from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
    image: GalleryImage;
    className?: string;
}

export function GalleryItem({ image, className }: GalleryItemProps) {
    return (
        <div className={cn("group relative overflow-hidden rounded-lg bg-gray-100", className)}>
            <div className="aspect-h-3 aspect-w-4 w-full sm:aspect-h-4 sm:aspect-w-3">
                <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center p-4">
                        <h3 className="text-lg font-bold text-white">{image.title || image.category}</h3>
                        {image.description && (
                            <p className="mt-2 text-sm text-gray-200">{image.description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
