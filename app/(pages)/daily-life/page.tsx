'use client';

import React, { useState, useRef, useEffect } from 'react';
import SubjectHeader from '../../commponents/custome/SubjectHeader';

// المكونات الفرعية
import Furniture from '../../commponents/daily-life/Furniture';
import Buildings from '../../commponents/daily-life/Buildings';
import Entertainment from '../../commponents/daily-life/Entertainment';
import Works from '../../commponents/daily-life/Works';
import Clothes from '../../commponents/daily-life/Clothes';

import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// قائمة المواضيع الفرعية مع مكوناتها
const subTopics = [
    { title: 'الترفيه', component: <Entertainment /> },
    { title: 'الملابس والزينة', component: <Clothes /> },
    { title: 'الأثاث', component: <Furniture /> },
    { title: 'المباني', component: <Buildings /> },
    { title: 'الحرف والمهن', component: <Works /> }
];

export default function DailyLife() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    // افتراض ارتفاع النافبار
    const NAVBAR_HEIGHT = 100;

    // دالة التمرير السلس باستخدام requestAnimationFrame
    const smoothScroll = (targetPosition: number) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 600;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    // دالة منحنى الحركة السلسة
    const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    // التمرير لرأس القسم مع تعويض ارتفاع الـ Navbar
    const scrollToSection = () => {
        if (sectionRef.current) {
            const targetPosition = sectionRef.current.offsetTop - NAVBAR_HEIGHT - 20;
            smoothScroll(targetPosition);
        }
    };

    // التمرير لأعلى الصفحة بالكامل
    const scrollToTop = () => {
        smoothScroll(0);
    };

    // تغيير الموضوع الفرعي المعروض
    const handleTopicChange = (index: number) => {
        setActiveIndex(index);
        scrollToSection();
    };

    // التنقل بين المواضيع
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % subTopics.length);
        scrollToSection();
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + subTopics.length) % subTopics.length);
        scrollToSection();
    };

    // مراقبة التمرير وإظهار الزر فقط عند النزول للأسفل
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-full'>
            {/* الهيدر مع الأزرار للتنقل بين المواضيع */ }
            <SubjectHeader
                title="الحياة اليومية"
                description="انطلق في رحلة لاكتشاف أسرار الحياة اليومية وتفاصيلها المثيرة في مصر القديمة"
                backgroundImage="/assets/topic-headings/daily-life.png"
                subTopics={ subTopics.map((topic, index) => ({
                    title: topic.title,
                    onClick: () => handleTopicChange(index)
                })) }
            />

            {/* رأس القسم */ }
            <div ref={ sectionRef } className="mt-10"></div>

            {/* عرض المكون النشط فقط */ }
            <section className='w-full flex justify-center items-center min-h-screen'>
                <motion.div
                    key={ activeIndex }
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    exit={ { opacity: 0, y: -20 } }
                    transition={ { duration: 0.5 } }
                    className='w-full'
                >
                    { subTopics[activeIndex].component }
                </motion.div>
            </section>

            {/* أزرار التنقل بين المواضيع */ }
            <div className="flex justify-between items-center px-6 py-4">
                <button onClick={ handlePrev } className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-700 transition-all">
                    <FaArrowLeft /> الموضوع السابق
                </button>
                <button onClick={ handleNext } className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-700 transition-all">
                    الموضوع التالي <FaArrowRight />
                </button>
            </div>

            {/* زر عائم للتمرير إلى أعلى الصفحة بالكامل مع تأثيرات جمالية */ }
            <motion.div
                initial={ { x: -100, opacity: 0 } } // البداية خارج الشاشة من اليسار
                animate={ { x: showScrollButton ? 0 : -100, opacity: showScrollButton ? 1 : 0 } }
                transition={ { type: 'spring', stiffness: 200, damping: 20 } }
                className="fixed bottom-6 left-6"
            >
                <motion.button
                    onClick={ scrollToTop }
                    className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
                    whileHover={ { scale: 1.2 } }
                    animate={ {
                        y: [0, -5, 0], // حركة عائمة
                        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                    } }
                >
                    <FaArrowUp size={ 24 } />
                </motion.button>
            </motion.div>
        </div>
    );
}
