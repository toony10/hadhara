'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Furniture from '../commponents/daily-life/Furniture';
import SubjectHeader from '../commponents/custome/SubjectHeader';

const subTopics = [
    { title: 'الترفيه', link: '/daily-life/entertainment' },
    { title: 'الملابس والزينة', link: '/daily-life/clothing' },
    { title: 'الأثاث', link: '/daily-life/Furniture' },
    { title: 'المباني', link: '/daily-life/Buildings' },
    { title: 'الحرف والمهن', link: '/daily-life/crafts' },
];



export default function DailyLife() {
    return (
        <div className="w-full">
            <SubjectHeader title="الحياة اليومية" description="انطلق في رحلة لاكتشاف أسرار الحياة اليومية وتفاصيلها المثيرة في مصر القديمة" backgroundImage="/assets/topic-headings/daily-life.png" subTopics={
                [
                    { title: 'الترفيه', link: '/daily-life/entertainment' },
                    { title: 'الملابس والزينة', link: '/daily-life/clothing' },
                    { title: 'الأثاث', link: '/daily-life/Furniture' },
                    { title: 'المباني', link: '/daily-life/Buildings' },
                    { title: 'الحرف والمهن', link: '/daily-life/crafts' },
                ]
            } />
            <section className='w-full'>
                {/* الأثاث */ }
                <Furniture />
            </section>
        </div>
    );
}
