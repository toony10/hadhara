'use client';

import React, { useEffect, useState } from 'react';
import ContentBlock from '../custome/ContentBlock';
import TopicHeader from '../custome/TopicHeader';
import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Gods() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "التحنيط: فلسفة الخلود في مصر القديمة", author: "د. أحمد صالح" },
        { title: "برت أم هرو (كتاب الموتى الفرعوني) - عن بردية آني بالمتحف البريطاني", author: "ترجمة عن الهيروغليفية: السير والس بدج" }
    ];

    useEffect(() => {
        fetch("/data/Mummification/Gods.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="الآلهة المرتبطة بالتحنيط"
                description="أراد المصريون أن يصبح مصيرهم مثل الإله أوزيريس، ذلك الإله الذي كان أول شخصية تحنط في ذاكرة المصريين. وبالنظر إلى أشهر الأساطير المصرية، وهي أسطورة أوزيريس، نجد أنها تعكس كل ما كان يفعله المصريون في عقائدهم الدينية، وبخاصة إجراءات وأعمال التحنيط."
            />
            <div>
                { data.map((item, index) => (
                    <ContentBlock
                        key={ index }
                        title={ item.title }
                        description={ item.description }
                        listItems={ item.listItems }
                        imageUrls={ item.imageUrls }
                        imageDescriptions={ item.imageDescriptions }
                    />
                )) }
            </div>
            <ReferencesSection references={ references } />

        </div>
    );
};

export default Gods;