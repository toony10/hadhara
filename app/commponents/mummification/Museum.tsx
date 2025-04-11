'use client';

import React, { useEffect, useState } from 'react';
import ContentBlock from '../custome/ContentBlock';
import TopicHeader from '../custome/TopicHeader';
// import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Museum() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/Mummification/Museum.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="متحف التحنيط في الأقصر"
                description="يعد متحف التحنيط في الأقصر من المتاحف الفريدة عالميًا، حيث يسلط الضوء على تقنيات التحنيط التي استخدمها المصريون القدماء للحفاظ على أجساد البشر والحيوانات. يضم المتحف مجموعة مميزة من المومياوات والأدوات المستخدمة في عملية التحنيط، بالإضافة إلى برديات ونصوص تشرح أسرار هذا الفن المقدس في الحضارة المصرية القديمة."
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
            {/* <ReferencesSection references={ references } /> */ }

        </div>
    );
};

export default Museum;