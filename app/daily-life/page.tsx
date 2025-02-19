'use client';

import React from 'react';
import Furniture from '../commponents/daily-life/Furniture';
import Buildings from '../commponents/daily-life/Buildings';
import SubjectHeader from '../commponents/custome/SubjectHeader';



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
                <Furniture />
                <Buildings />
            </section>
        </div>
    );
}
