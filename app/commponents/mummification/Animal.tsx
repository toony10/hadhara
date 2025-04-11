'use client';

import React, { useEffect, useState } from 'react';
import ContentBlock from '../custome/ContentBlock';
import TopicHeader from '../custome/TopicHeader';
// import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Animal() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/Mummification/Animal.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="تحنيط الحيوانات في مصر القديمة"
                description="كان تحنيط الحيوانات جزءًا أساسيًا من الطقوس الدينية والمعتقدات الروحية في مصر القديمة. اعتقد المصريون القدماء أن بعض الحيوانات كانت تجسيدًا للآلهة أو كائنات مقدسة، مما جعلها تحظى بمكانة خاصة. لذلك، تم تحنيطها وحفظها بعناية، ودُفنت في مقابر مخصصة وفق طقوس دقيقة، بهدف تكريمها وضمان دورها في الحياة الآخرة."
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

        </div>
    );
};

export default Animal;