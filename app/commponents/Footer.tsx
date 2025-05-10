"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className='flex flex-col items-center mt-2'>
                        <Link href='./'>
                            <Image src='/logo.png' width={ 110 } height={ 110 } alt='logo' />
                        </Link>
                        <p className="mt-2 text-sm text-gray-300 text-center">اكتشف عالم الحضارة المصرية القديمة</p>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-yellow-500 transition-all">
                            الرئيسية
                        </Link>
                        <Link href="/contact" className="hover:text-yellow-500 transition-all"
                        >
                            تواصل معنا
                        </Link>
                        <Link href="/team" className="hover:text-yellow-500 transition-all"
                        >
                            فريق العمل
                        </Link>
                    </div>
                </div>

                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://www.facebook.com/share/16SeNV8iLb/" className="text-white hover:text-yellow-500 transition-all">
                        <FaFacebook size={ 24 } />
                    </a>
                    <a href="https://www.instagram.com/had_arah/profilecard/?igsh=MW8ydTFubHZ3djl4bw==" className="text-white hover:text-yellow-500 transition-all">
                        <FaInstagram size={ 24 } />
                    </a>
                    <a href="mailto:hadarah81@gmail.com" className="text-white hover:text-yellow-500 transition-all">
                        <IoMdMail size={ 24 } />
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
