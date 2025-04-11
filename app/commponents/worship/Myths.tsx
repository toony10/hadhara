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


function Myths() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        {
            title: "كتاب الأساطير المصرية",
            link: "https://example.com/egyptian-myths"
        }
    ];


    useEffect(() => {
        fetch("/data/Worship/Myths.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الأساطير المصرية القديمة"
                description="تعكس الأساطير المصرية طبيعة الآلهة وأفعالهم، إلى جانب عادات عبادتهم التي تعكس خصائص مصر وثقافتها الفريدة. مصر تتميز بموقعها في شمال شرق أفريقيا، حيث يحيط بوادي نهر النيل شريط ضيق خصيب، مما جعلها مهدًا لأولى حضارات العالم."
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
            {/* خط فاصل أسفل القسم */ }

        </div>
    )
}

export default Myths;