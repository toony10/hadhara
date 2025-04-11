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

function LawsCourts() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/Politics/LawsCourts.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="القوانين والمحاكم"
                description="نظام قانوني متكامل حكم مصر القديمة، حيث اعتمد على مبادئ العدالة الإلهية ماعت، وتم تطبيقه من خلال المحاكم الملكية والدينية لضمان تحقيق العدل والنظام في المجتمع."
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

export default LawsCourts;