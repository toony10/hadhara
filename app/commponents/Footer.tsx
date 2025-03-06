"use client";

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-500">حضارة</h1>
                        <p className="mt-2 text-sm text-gray-300">اكتشف عالم الحضارة المصرية القديمة</p>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="/">
                            الرئيسية
                        </Link>
                        <Link href="/contact" className="hover:text-yellow-500 transition-all">تواصل معنا</Link>
                    </div>
                </div>

                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://www.facebook.com" className="text-white hover:text-yellow-500 transition-all">
                        <FaFacebook size={ 24 } />
                    </a>
                    <a href="https://www.instagram.com" className="text-white hover:text-yellow-500 transition-all">
                        <FaInstagram size={ 24 } />
                    </a>
                    <a href="https://www.twitter.com" className="text-white hover:text-yellow-500 transition-all">
                        <FaTwitter size={ 24 } />
                    </a>
                </div>

                <div className="mt-6 text-center text-sm text-gray-400">
                    <p>© 2025 جميع الحقوق محفوظة لموقع حضارة</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
