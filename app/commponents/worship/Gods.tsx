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


function Gods() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "الحياة اليومية للآلهة الفرعونية", author: "ديمتري ميكس وكريستين" },
        { title: "مجتمع الآلهة في الديانة المصرية القديمة", author: "د. عباس علي عباس الحبشي" },
        { title: "الديانة المصرية القديمة", author: "ياروسلاف تشيرني" },
        { title: "ديانة مصر الفرعونية: الوحدانية والتعدد", author: "إريك هورنونج" },
        { title: "ديانة مصر القديمة ونشأتها وتطورها", author: "أدولف إرمان" }
    ];



    useEffect(() => {
        fetch("/data/Worship/gods.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الآلهة المصرية"
                description="اتصفت كل الآلهة المصرية بأدوار ووظائف أساسية ميزت كل منها عن الآخر؛ فاختص بعضها بالملكية ورعاية الحكم، واهتم البعض الآخر بالعناية بالموتى، بينما تخصص غيرهم في السحر، الطب والشفاء، أو الحروب. كما كان هناك آلهة مسؤولون عن إدخال الفرح والسرور، وآخرون مختصون بالولادة والحب."
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

export default Gods