'use client';

import React from 'react'
import SubjectHeader from '../commponents/custome/SubjectHeader';
import Holidays from '../commponents/worship/Holidays';
import Temples from '../commponents/worship/Temples';
import Gods from '../commponents/worship/Gods';
export default function Worship() {
    return (
        <div className='w-full'>
            <SubjectHeader title="الحياة الدينيه " description="اغمر نفسك في عالم الأسرار المقدسة عند الفراعنة" backgroundImage="/assets/topic-headings/Worship.png" subTopics={
                [
                    { title: 'الألهه', link: '/worship/gods' },
                    { title: 'الأساطير', link: '/worship/myths' },
                    { title: 'الأعياد', link: '/worship/holidays' },
                    { title: 'المعابد', link: '/worship/temples' },
                    { title: 'التمائم', link: '/worship/seals' },
                    { title: ' الكتب الدينيه', link: '/worship/books' },
                ]
            } />
            <section className='w-full'>
                <Gods />
                <Temples />
                <Holidays />
            </section>
        </div>
    )
}
