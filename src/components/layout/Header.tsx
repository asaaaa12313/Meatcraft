'use client';

import { useState, useEffect } from 'react';

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

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

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
                        <Link href="/" className="flex flex-col items-center md:items-start" onClick={() => setIsMenuOpen(false)}>
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
                            className="md:hidden p-2 text-neutral-600"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-white md:hidden">
                        <div className="container mx-auto px-4 py-4 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <Link href="/" className="flex flex-col items-center items-start" onClick={() => setIsMenuOpen(false)}>
                                    <span className="font-bold text-lg text-[#8B4513] leading-tight">
                                        {STORE_INFO.name.split(' ')[0]}
                                    </span>
                                    <span className="text-sm text-[#8B4513] opacity-80">
                                        {STORE_INFO.name.split(' ')[1]}
                                    </span>
                                </Link>
                                <button
                                    className="p-2 text-neutral-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-2xl font-medium transition-colors",
                                            pathname === item.href ? "text-[#8B4513]" : "text-neutral-600"
                                        )}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
