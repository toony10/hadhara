'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const topics = [
    {
        title: 'الحياه اليوميه',
        image: '/assets/daily-life.jpg',
        link: './daily-life',
        description: 'استكشف تفاصيل الحياة اليومية في مصر القديمة، بدءًا من الزراعة والعمل والحرف، وصولًا إلى الملابس والزينات وأشكال الترفيه المتنوعة.'
    },
    {
        title: 'العباده',
        image: '/assets/Worship.png',
        link: './worship',
        description: 'تعرف على عالم الآلهة والأساطير، واكتشف الأعياد الدينية، المعابد والكهنة، إضافة إلى التمائم والكتب الدينية التي حملت أسرار الروحانية.'
    },
    {
        title: 'الحياه السياسيه',
        image: '/assets/politics.jpg',
        link: './politics',
        description: 'اكتشف الدور المحوري للملك، وتعرف على الجيش والحروب، والقوانين والمحاكم التي ساهمت في تنظيم المجتمع المصري القديم.'
    },
    {
        title: 'الحياه الأجتماعيه',
        image: '/assets/social-life.jpg',
        link: './social-life',
        description: 'تعرف على الأسرة المصرية، الطبقات الاجتماعية، دور المرأة، والعادات والتقاليد التي ميزت الحياة الاجتماعية في مصر القديمة.'
    },
    {
        title: 'التعليم',
        image: '/assets/education.png',
        link: './education',
        description: 'تعرف على أساليب التعليم في مصر القديمة، ودور المعرفة في تشكيل حضارة عظيمة أثرت في العالم بأسره.'
    },
];


export default function AboutUs() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + topics.length) % topics.length);
    };

    const handleClose = (e: React.MouseEvent) => {
        if ((e.target as Element).id === 'popup-overlay') {
            setIsPopupOpen(false);
        }
    };
    useEffect(() => {
        if (!isPopupOpen) return;

        const interval = setInterval(handleNext, 3000); // تغيير كل 3 ثوانٍ
        return () => clearInterval(interval); // تنظيف المؤقت عند إغلاق النافذة
    }, [isPopupOpen, currentIndex]);
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold text-gray-800 mb-6"
                    initial={ { opacity: 0, y: -50 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8 } }
                    viewport={ { once: true } }
                >
                    من نحن
                </motion.h2>

                <motion.p
                    className="text-xl text-gray-600 mb-8"
                    initial={ { opacity: 0, y: 50 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 1 } }
                    viewport={ { once: true } }
                >
                    نحن موقع حضارة، نقدم لك رحلة عبر الزمن لاستكشاف أعماق الحياة في مصر القديمة. من خلال محتوى تثقيفي
                    متنوع، نهدف إلى نقل قصة الحضارة المصرية القديمة للأجيال الجديدة ونشر الوعي حول إنجازاتها العظيمة.
                </motion.p>
                <div className="flex justify-center space-x-8">
                    <motion.div
                        className="max-w-xs"
                        initial={ { opacity: 0, scale: 0.9 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 0.8 } }
                        viewport={ { once: true } }
                    >
                        <Image
                            width={ 100 }
                            height={ 100 }
                            src="/assets/our-mission.jpg"
                            alt="فريق العمل"
                            className="w-full h-[17rem] object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-700">رؤيتنا</h3>
                        <p className="text-gray-500 mt-2">
                            نسعى لتسليط الضوء على الإرث التاريخي والإنجازات الثقافية لمصر القديمة، ونقل قصصها المدهشة عبر الإنترنت
                            بطريقة مبتكرة وسهلة الوصول.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-xs"
                        initial={ { opacity: 0, scale: 0.9 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 0.8, delay: 0.2 } }
                        viewport={ { once: true } }
                    >
                        <Image
                            width={ 100 }
                            height={ 100 }
                            src="/assets/our-vission.jpg"
                            alt="مهمتنا"
                            className="w-full h-[17rem] object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-700">مهمتنا</h3>
                        <p className="text-gray-500 mt-2">
                            مهمتنا هي تعليم الأفراد حول الحضارة المصرية، من خلال مقاطع الفيديو والمقالات والموارد التفاعلية التي
                            تساهم في تعزيز الفهم الثقافي.
                        </p>
                    </motion.div>
                </div>
                <motion.div>
                    <button
                        onClick={ () => setIsPopupOpen(true) }
                        className="bg-[#d4af37] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 mt-10"
                    >
                        ابدأ رحلتك معنا
                    </button>
                </motion.div>

                {/* Popup */ }
                <AnimatePresence>
                    { isPopupOpen && (
                        <motion.div
                            id="popup-overlay"
                            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            onClick={ handleClose }
                        >
                            <motion.div
                                className="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-[90%] max-h-[90%]"
                                style={ { aspectRatio: '688 / 1024' } }
                                initial={ { scale: 0.8 } }
                                animate={ { scale: 1 } }
                                exit={ { scale: 0.8 } }
                            >
                                {/* Image */ }
                                <div className="relative w-full h-full">
                                    <Image
                                        width={ 100 }
                                        height={ 100 }
                                        src={ topics[currentIndex].image }
                                        alt={ topics[currentIndex].title }
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay */ }
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    {/* Title and Description */ }
                                    <div className="absolute bottom-0 right-0 text-slate-200 p-10">
                                        <div className="text-4xl font-bold mb-2">{ topics[currentIndex].title }</div>
                                        <div className="text-sm font-bold font-sans text-slate-400">{ topics[currentIndex].description }</div>
                                        <Link href={ topics[currentIndex].link } passHref className='z-50 cursor-pointer relative'>
                                            <button
                                                onClick={ () => router.push(topics[currentIndex].link) }
                                                className="cursor-pointer mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-md font-semibold shadow-md hover:bg-yellow-600 transition-all"
                                            >
                                                المزيد
                                            </button>
                                        </Link>
                                    </div>
                                    {/* Navigation Arrows */ }
                                    <div className="absolute inset-0 flex items-center justify-between px-4">
                                        <button
                                            onClick={ handlePrev }
                                            className="text-yellow-200 text-7xl bg-opacity-70 rounded-full p-3 hover:bg-opacity-90"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={ handleNext }
                                            className="text-yellow-200 text-7xl bg-opacity-70 rounded-full p-3 hover:bg-opacity-90"
                                        >
                                            ›
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) }
                </AnimatePresence>
            </div>
        </section>
    );
}
