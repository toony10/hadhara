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

function Entertainment() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/daily-life/Entertainment.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="الترفيه في مصر القديمة"
                description="كان المصري القديم يستمتع بوسائل ترفيه متنوعة، من الألعاب والموسيقى إلى الرقص والاحتفالات. كانت هذه الأنشطة جزءًا لا يتجزأ من الحياة اليومية، وتظهر في العديد من النقوش والرسومات التي توثق هذه اللحظات الممتعة."
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
    );
}

export default Entertainment;