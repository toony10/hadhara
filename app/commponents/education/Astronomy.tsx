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


function Astronomy() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "الفلك في مصر القديمة", author: "ماسيميليانو فرانشي" },
        { title: "مسارات الأجرام والأفلاك الكونية", author: "د. سمير أديب" }
    ];


    useEffect(() => {
        fetch("/data/education/Astronomy.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الفلك في مصر القديمة"
                description="من تتبع مسارات الشمس والقمر إلى تقويمات دقيقة للزمن، شكّل الفلك عند المصريين القدماء علمًا مقدسًا يربط بين الخلود والكون والإله."
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

export default Astronomy;