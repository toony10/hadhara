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

function Family() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/Social-life/Family.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الأسره"
                description="تعتبر الأسرة في مصر القديمة من أهم الأسس الاجتماعية التي تقوم عليها الحياة اليومية. كانت الأسرة تشكل وحدة مترابطة، حيث كانت العلاقات بين الزوجين والأبناء والإخوة محورية لضمان استقرار المجتمع واستمرار تقاليده. كانت تتمحور مسؤوليات الأفراد في رعاية وصون الأسرة، بدءًا من التربية إلى الحفاظ على الممتلكات والميراث."
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

export default Family;