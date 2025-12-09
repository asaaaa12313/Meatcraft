'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, STORE_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

// function Bars3Icon({ className }: { className?: string }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//     </svg>
//   );
// }
// function XMarkIcon({ className }: { className?: string }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//     </svg>
//   );
// }
// ... actually I should put these definitions outside the component or inline safely. 
// Easier to just use them inline in the render loop or define const components.

const Bars3Icon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XMarkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';

        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm',
                    scrolled ? 'py-3' : 'py-4'
                )}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex flex-col">
                            <span className="font-bold text-lg text-[#8B4513] leading-tight">
                                {STORE_INFO.name.split(' ')[0]}
                            </span>
                            <span className="text-sm text-[#8B4513] opacity-80">
                                {STORE_INFO.name.split(' ')[1]}
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-[#8B4513]",
                                        pathname === item.href ? "text-[#8B4513]" : "text-neutral-600"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="md:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Category Shortcut Bar */}
                <div className={cn(
                    "border-t border-neutral-50 overflow-x-auto no-scrollbar bg-white/95 backdrop-blur-sm",
                    isOpen ? "hidden" : "md:hidden"
                )}>
                    <div className="flex px-4 py-3 gap-2 w-max">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors border",
                                    pathname === item.href
                                        ? "bg-[#8B4513] text-white border-[#8B4513]"
                                        : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </header>

            {/* Mobile Menu Overlay - Portal to Body */}
            {mounted && isOpen && createPortal(
                <div className="fixed inset-0 z-[9999] bg-white md:hidden flex flex-col h-[100dvh] overscroll-none touch-none">
                    {/* Overlay Header */}
                    <div className="flex-none flex items-center justify-between p-4 border-b border-neutral-100 bg-white">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-[#8B4513] leading-tight">
                                {STORE_INFO.name.split(' ')[0]}
                            </span>
                            <span className="text-sm text-[#8B4513] opacity-80">
                                {STORE_INFO.name.split(' ')[1]}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto p-4 bg-white overscroll-contain">
                        <div className="flex flex-col space-y-1 pb-20">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium px-4 py-4 border-b border-neutral-50 last:border-0 hover:bg-neutral-50 transition-colors block text-neutral-900",
                                        pathname === item.href ? "text-[#8B4513] font-bold bg-[#8B4513]/5 rounded-lg border-none mb-1" : ""
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
