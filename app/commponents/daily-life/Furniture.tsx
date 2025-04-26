import React, { useEffect, useState } from 'react'
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock'
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
        { title: "أشغال النجارة في مصر القديمة", author: "د. محمد راشد حماد" },
        { title: "نجارة الأثاث في مصر القديمة", author: "تقديم: د. زاهي حواس، تأليف: د. محمد راشد حماد" },
        { title: "مجلة العمارة والفنون - العدد الرابع عشر: دراسة تقنيات الأثاث المنطبق في الحضارة المصرية القديمة وتوظيفها لتصميم آثار معاصرة" }
    ];

    useEffect(() => {
        fetch("/data/daily-life/furniture.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);
    return (
        <div className="min-h-screen py-16">
            <TopicHeader title="الأثاث في مصر القديمة" description="الأثاث في مصر القديمة كان له مكانة متميزة، حيث كان مرتبطًا بشكل وثيق بحياة المصريين الدينية والدنيوية. فن النجارة في مصر القديمة تأثر بالفنون الأخرى، كما يظهر من الأثاث والأدوات الخشبية المتبقية، سواء كانت حقيقية أو مصورة أو مجسمة. هذا يعكس مهارة النجار المصري وقدرته الفنية والصناعية، حيث تتميز القطع الخشبية بالدقة والأناقة والجمال، مما يرفعها إلى مستوى فن راقٍ." />
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

export default Furniture
