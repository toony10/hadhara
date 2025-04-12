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


function Gods() {
    const [data, setData] = useState<ContentData[]>([]);
    // const references = [
    //     {
    //         title: "مجتمع الآلهة في الديانة المصرية القديمة - تأليف عباس علي عباس الحسيني",
    //         link: "https://example.com/gods-society-abbas-husseini"
    //     },
    //     {
    //         title: "الديانة المصرية القديمة - تأليف ياروسلاف تشرني، ترجمة: أحمد ندري",
    //         link: "https://example.com/ancient-egyptian-religion-yaroslav-cerny"
    //     },
    //     {
    //         title: "الديانة المصرية القديمة - د. زينب حشيش",
    //         link: "https://example.com/ancient-egyptian-religion-zainab-hasheesh"
    //     }
    // ];


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
            {/* <ReferencesSection references={ references } /> */ }
            {/* خط فاصل أسفل القسم */ }

        </div>
    )
}

export default Gods