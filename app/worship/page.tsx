'use client';

import React from 'react'
import SubjectHeader from '../commponents/custome/SubjectHeader';
import Holidays from '../commponents/worship/Holidays';
export default function Worship() {
    return (
        <div className='w-full'>
            <SubjectHeader title="الحياة الدينيه " description="اغمر نفسك في عالم الأسرار المقدسة عند الفراعنة" backgroundImage="/assets/topic-headings/Worship.png" subTopics={
                [
                    { title: 'الألهه', link: '/worship/gods' },
                    { title: 'الأساطير', link: '/worship/myths' },
                    { title: 'الأعياد الدينيه', link: '/worship/holidays' },
                    { title: 'المعابد والكهنه', link: '/worship/temples' },
                    { title: 'التمائم والأختام', link: '/worship/seals' },
                    { title: ' الكتب الدينيه', link: '/worship/books' },
                ]
            } />
            <section className='w-full'>
                <Holidays />
            </section>
        </div>
    )
}
