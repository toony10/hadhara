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

function WritingLanguage() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/education/Writing-and-language.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الملك"
                description="الملك في مصر القديمة لم يكن مجرد حاكم، بل كان يُعتبر إلهًا حيًا على الأرض، يجسد السلطة المطلقة والمسؤولية الدينية، ويحمل ألقابًا تعكس مكانته المقدسة ودوره في تحقيق التوازن والاستقرار في الدولة."
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

export default WritingLanguage;