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

function Literature() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/education/Literature.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الأدب في مصر القديمة"
                description="استكشف رحلة الأدب المصري القديم منذ فجر الحضارة، حيث كان الكلمة أداة القوة، والفصاحة مفتاح الزعامة، وتنوعت النصوص بين الدينية والفلسفية والغنائية والقصصية، لتعكس روح المجتمع المصري القديم وتاريخه العريق."
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

export default Literature;