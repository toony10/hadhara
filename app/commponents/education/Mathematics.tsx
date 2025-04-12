import React, { useEffect, useState } from 'react';
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock';
// import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Mathematics() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/education/Mathematics.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            < TopicHeader
                title="الرياضيات والهندسة في مصر القديمة"
                description="طوّع المصري القديم الأرقام والهندسة لبناء أهرام خالدة، وقياس الأرض بعد الفيضان، وتنظيم ضرائب الدولة بدقة مذهلة، جاعلًا من الرياضيات علمًا للحياة والخلود."
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
            {/* خط فاصل أسفل القسم */ }

        </div>
    )
}

export default Mathematics;

