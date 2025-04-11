import React, { useEffect, useState } from 'react'
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock'
// import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Works() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/daily-life/Works.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);
    return (
        <div className="min-h-screen py-16">
            <TopicHeader title="الحرف والمهن في مصر القديمة" description="الحرف والمهن في مصر القديمة كانت جزءًا أساسيًا من الحياة اليومية والاقتصاد، حيث تفنن المصريون في العديد من الصناعات اليدوية التي ساهمت في بناء حضارتهم العريقة. شملت هذه المهن النجارة، والنحت، وصناعة الفخار، والنسيج، وصياغة الذهب، والزراعة، وغيرها من الأعمال التي دعمت المجتمع المصري القديم. تأثرت هذه الحرف بالعوامل الدينية والاجتماعية، حيث كانت بعض الصناعات مخصصة لتجهيز المعابد والمقابر، مما يعكس التطور الفني والدقة في تنفيذ الأعمال." />
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
    )
}

export default Works
