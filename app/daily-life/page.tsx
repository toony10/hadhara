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

        <section className="py-16 ">
            <div className='bg-gray-50 p-10 my-14'>
                {/* Header */ }
                <div className="container mx-auto px-6 text-center mt-20 ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">الحياة اليومية</h1>
                    <p className="text-lg text-gray-600 mb-12">
                        انطلق في رحلة لاكتشاف أسرار الحياة اليومية وتفاصيلها المثيرة في مصر القديمة                </p>
                </div>

                {/* Subtopics Tags */ }
                <motion.div
                    className="container mx-auto px-6 flex flex-wrap justify-center gap-4"
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
                            className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow-md text-sm font-semibold hover:bg-yellow-600 transition-all cursor-pointer"
                            variants={ tagVariants }
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.95 } }
                        >
                            { topic.title }
                        </motion.a>
                    )) }
                </motion.div>
            </div>
            <Furniture />
        </section>

    );
}
