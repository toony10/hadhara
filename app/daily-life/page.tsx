'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Furniture from '../commponents/daily-life/Furniture';

const subTopics = [
    { title: 'الترفيه', link: '/daily-life/entertainment' },
    { title: 'الملابس والزينة', link: '/daily-life/clothing' },
    { title: 'الأثاث', link: '/daily-life/Furniture' },
    { title: 'المباني', link: '/daily-life/Buildings' },
    { title: 'الحرف والمهن', link: '/daily-life/crafts' },
];

const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function DailyLife() {
    return (
        <section className="w-full">
            {/* خلفية تمتد على كامل الشاشة */ }
            <div
                className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                style={ { backgroundImage: "url('/assets/topic-headings/daily-life.png')" } }
            >
                {/* تأثير التعتيم للوضوح */ }
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* المحتوى فوق الخلفية */ }
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-6xl font-extrabold drop-shadow-lg mb-6">الحياة اليومية</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        انطلق في رحلة لاكتشاف أسرار الحياة اليومية وتفاصيلها المثيرة في مصر القديمة
                    </p>

                    {/* العناوين الفرعية داخل الهيدر مع تأثير الحركة */ }
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        initial="hidden"
                        animate="visible"
                        variants={ {
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        } }
                    >
                        { subTopics.map((topic, index) => (
                            <motion.a
                                key={ index }
                                href={ topic.link }
                                className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg text-lg font-semibold 
                                    hover:bg-yellow-600 hover:scale-110 hover:rotate-2 hover:shadow-xl transition-all duration-300 ease-in-out"
                                variants={ tagVariants }
                                whileHover={ { scale: 1.1 } }
                                whileTap={ { scale: 0.95 } }
                            >
                                { topic.title }
                            </motion.a>
                        )) }
                    </motion.div>
                </div>
            </div>
            <div className='w-full'>
                {/* محتوى صفحة الأثاث */ }
                <Furniture />
            </div>
        </section>
    );
}
