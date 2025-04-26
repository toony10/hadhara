'use client';

import React, { useEffect, useState } from 'react';
import ContentBlock from '../custome/ContentBlock';
import TopicHeader from '../custome/TopicHeader';
import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function MedicineMagic() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "رسالة ماجستير بعنوان: التحنيط في مصر القديمة", author: "تحت إشراف د. مياطه التيجاني" },
        { title: "الحياة اليومية" },
        { title: "الأثاث في مصر القديمة" },
        { title: "أشغال النجارة في مصر القديمة", author: "د. محمد راشد حماد" },
        { title: "نجارة الأثاث في مصر القديمة", author: "تقديم: د. زاهي حواس، تأليف: د. محمد راشد حماد" },
        { title: "مجلة العمارة والفنون - العدد الرابع عشر: دراسة تقنيات الأثاث المنطبق في الحضارة المصرية القديمة وتوظيفها لتصميم آثار معاصرة" }
    ];

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
            <ReferencesSection references={ references } />

        </div>
    );
};

export default MedicineMagic;