'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
    title: string;
    subItems: string[];
    link: string;
}

const navItems: NavItem[] = [
    { title: 'التحنيط', subItems: ['الهدف منه', 'المواد المستخدمة', 'الاثاث الجنائزي', 'تطور التحنيط', 'الطرق والخطوات الأساسيه', 'الالهه المرتبطه بالتحنيط', 'الطقوس المرتبطه بالتحنيط', 'دور الطب و السحر', 'المومياء واللعنه والعلم', 'التحنيط الحيوان', 'متحف التحنيط'], link: '/mummification' },
    { title: 'الحياه اليوميه', subItems: ['الأثاث', 'المباني', 'الحرف والمهن', 'الملابس والزينه', 'الترفيه'], link: '/daily-life' },
    { title: 'الحياه الدينيه', subItems: ['الألهه', 'الأساطير', 'الأعياد الدينيه', 'المعابد والكهنه', 'التمائم والأختام', 'الكتب الدينيه'], link: '/worship' },
    { title: 'الحياه السياسيه', subItems: ['الملك', 'الجيش والحروب', 'القوانين والمحاكم'], link: '/politics' },
    { title: 'الحياه الأجتماعيه', subItems: ['الأسره', 'الطبقات الأجتماعيه', 'المرأه'], link: '/social-life' },
    { title: 'التعليم', subItems: ['الكتابه واللغه', 'الأدب', 'الرياضيات', 'الفلك', 'الطب والعلاج'], link: '/education' },
]

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // غلق القائمة عند النقر خارجها
    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            {/* Navigation Bar */ }
            <nav className={ `fixed h-32 top-0 w-full z-20 transition-colors duration-300 ${isScrolled ? 'bg-white bg-opacity-100 shadow-lg' : 'bg-transparent'}` }>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */ }
                    <div className="text-2xl font-bold">
                        <Link href='./'>
                            <Image src='/logo.png' width={ 110 } height={ 110 } alt='logo' />
                        </Link>
                    </div>

                    {/* Desktop Navbar */ }
                    <ul className="hidden lg:flex space-x-8">
                        { navItems.map((item, index) => (
                            <li
                                key={ index }
                                className="relative group"
                                onMouseEnter={ () => setMenuOpen(index) }
                                onMouseLeave={ () => setMenuOpen(null) }
                            >
                                <Link href={ item.link }>
                                    <button className="hover:text-yellow-500 text-xl font-bold flex items-center space-x-2">
                                        <span>{ item.title }</span>
                                    </button>
                                </Link>
                                {/* Dropdown Menu */ }
                                <ul
                                    className={ `absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg z-10 transform transition-all duration-300 origin-top ${menuOpen === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}` }
                                >
                                    { item.subItems.map((subItem, subIndex) => (
                                        <span key={ subIndex }>
                                            <li className="px-4 py-2 hover:bg-gray-700 text-sm font-medium text-gray-300">
                                                { subItem }
                                            </li>
                                        </span>
                                    )) }
                                </ul>
                            </li>
                        )) }
                    </ul>

                    {/* Hamburger Menu for Mobile */ }
                    <button
                        className='lg:hidden text-2xl text-black'
                        onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */ }
            { isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-100 z-20"
                    onClick={ handleCloseMobileMenu }
                >
                    <div
                        className="h-full flex flex-col items-center justify-start pt-12 overflow-y-auto"
                        onClick={ (e) => e.stopPropagation() }
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={ handleCloseMobileMenu }
                        >
                            ×
                        </button>
                        { navItems.map((item, index) => (
                            <div key={ index } className="w-full">
                                <Link href={ item.link }>
                                    <button className="w-full py-3 px-4 text-lg font-bold text-white hover:bg-gray-700 flex justify-between items-center" onClick={ handleCloseMobileMenu }>
                                        <span>{ item.title }</span>
                                    </button>
                                </Link>
                            </div>
                        )) }
                    </div>
                </div>
            ) }
        </div>
    )
}

export default NavBar
