import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-lg border bg-card text-card-foreground shadow-sm',
                hover && 'transition-shadow hover:shadow-md',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
