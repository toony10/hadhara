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

function Rituals() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/Mummification/Rituals.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="الطقوس الجنائزية في مصر القديمة"
                description="لعبت الطقوس الجنائزية دورًا محوريًا في العقيدة المصرية القديمة، حيث كانت تهدف إلى ضمان انتقال المتوفى إلى الحياة الآخرة بسلام. تضمنت هذه الطقوس موكب الجنازة، الطقوس الدينية، وطقس فتح الفم، الذي كان يُعتقد أنه يعيد للميت قدرته على الأكل والشرب والتحدث في العالم الآخر."
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

export default Rituals;