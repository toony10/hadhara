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

function WritingLanguage() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "اللغة المصرية القديمة - الجزء الأول", author: "د. محمد علي نصار" },
        { title: "تعليم الهيروغليفية (لغة مصر القديمة وأصل الخطوط العالمية)", author: "د. محمد حماد" },
        { title: "اللغة المصرية القديمة", author: "د. عبد الحليم نور الدين" }
    ];


    useEffect(() => {
        fetch("/data/education/Writing-and-language.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="تاريخ الكتابة واللغه في مصر القديمة"
                description="حكاية الإنسان المصري الذي حوّل رموز الطبيعة إلى لغة خالدة، نقش بها أفكاره على جدران المعابد وسجّل بها أسرار الخلود عبر آلاف السنين."
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
    )
}

export default WritingLanguage;