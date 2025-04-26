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
        { title: "التحنيط عند الفراعنة", author: "إعداد: مايكل يوسف سلوانس" },
        { title: "فن التحنيط لدى المصريين القدماء", author: "إعداد: الطالبتان سليمان رجب وسيد أحمد" },
        { title: "التحنيط في مصر", author: "حنيش جمعة وقادري زهرة" }
    ];

    useEffect(() => {
        fetch("/data/Mummification/Steps.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="الطرق والخطوات"
                description="في هذا القسم، سنتناول الطرق والخطوات الأساسية التي كانت تُستخدم في عملية التحنيط في العصور القديمة. سنستعرض بالتفصيل كل خطوة من هذه الخطوات وكيفية تنفيذها."></TopicHeader>
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