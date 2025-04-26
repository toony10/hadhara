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

function Furniture() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "مدخل لدراسة الفنون الصغرى وفنون صياغة وتشكيل الحلي", author: "د. محمد أحمد السيد" },
        { title: "طرق الدفن والأثاث الجنائزي في مقابر موقع الحصمة - شقرة", author: "صالح سلطان عبده الحسيني" },
        { title: "التحنيط في مصر القديمة", author: "د. عبد الحليم نور الدين" },
        { title: "الأثاث في مصر القديمة", author: "مكتبة الإسكندرية" },
        { title: "مصر والشرق الأدنى القديم - الحضارة المصرية القديمة (الجزء الثاني): الحياة الاجتماعية والسياسية والعسكرية والقضائية والدينية", author: "أ.د. محمد بيومي مهران، أستاذ تاريخ مصر والشرق الأدنى القديم ورئيس قسم التاريخ والآثار المصرية والإسلامية، كلية الآداب - جامعة الإسكندرية" }
    ];

    useEffect(() => {
        fetch("/data/Mummification/furniture.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="الأثاث الجنائزي"
                description="المصريين القدماء كانوا يعتقدون بوجود عالم آخر بعد الموت، لذا كانوا يضعون في المقابر أشياء تلزمهم في الحياة الآخرة مثل الأواني، أدوات الحرب، أدوات الزينة، التماثيل، المجوهرات، والأثاث الجنائزي."
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

export default Furniture;