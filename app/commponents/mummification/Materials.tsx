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

function Materials() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "التحنيط في مصر الفرعونية", author: "الطالبتان حنيش جمعة وقادري زهرة" },
        { title: "تاريخ العقاقير والعلاج", author: "صابر جبرة" },
        { title: "بحث: استخدام التقنيات الحديثة في تعريف المواد المستخدمة في التحنيط", author: "يحيى عثمان محمود وسامية المرغني" }
    ];

    useEffect(() => {
        fetch("/data/Mummification/Materials.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="المواد المستخدمه"
                description="استخدم المصريون القدماء مجموعة متنوعة من المواد في عملية التحنيط، بما في ذلك الزيوت، والراتنجات، والكتان، والملح. كانت هذه المواد جزءًا أساسيًا من عملية التحنيط لضمان الحفاظ على الجسد."
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

export default Materials;