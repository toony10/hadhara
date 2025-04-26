import React, { useEffect, useState } from 'react';
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock';
import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Clothes() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "الملابس والزينة في مصر القديمة", author: "أ.د. عبد الحليم نور الدين" },
        { title: "الملابس في مصر القديمة", author: "عمرو حسين عبد العال" },
        { title: "الحُلي وأدوات الزينة في عصور مصر الأولى" },
        { title: "فنون صناعة الحُلي في مصر القديمة (مختارات مصورة من المتحف المصري)" },
        { title: "موسوعة مصر القديمة", author: "سليم حسن" },
        { title: "العطور ومعامل العطور في مصر القديمة", author: "محمد عبد الحميد شيمي" },
        { title: "الحياة اليومية للمصري القديم", author: "أحمد فخري" },
        { title: "مصر الفرعونية", author: "سليم حسن" }
    ];

    useEffect(() => {
        fetch("/data/daily-life/Clothes.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="الملابس والزينه في مصر القديمه"
                description=""
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
}

export default Clothes;