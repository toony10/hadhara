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

function MedicineMagic() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/Mummification/MedicineMagic.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="دور الطب والسحر في التحنيط"
                description="لعب كل من الطب والسحر دورًا رئيسيًا في عملية التحنيط في مصر القديمة. ساهمت المعرفة الطبية، المستمدة من دراسة الجسد أثناء التحنيط، في تطوير العلوم الطبية والجراحية، بينما كان السحر جزءًا لا يتجزأ من الطقوس، حيث استخدمت التعاويذ والرموز السحرية لضمان حماية المتوفى في الحياة الآخرة."
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

export default MedicineMagic;