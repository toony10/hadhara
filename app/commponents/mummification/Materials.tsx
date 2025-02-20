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

function Materials() {
    const [data, setData] = useState<ContentData[]>([]);

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
            {/* <ReferencesSection references={ references } /> */ }
            <hr className="mt-10 border-t-2 border-dotted border-stone-300 w-1/2 mx-auto" />
        </div>
    );
};

export default Materials;