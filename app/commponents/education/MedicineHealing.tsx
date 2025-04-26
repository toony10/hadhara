import React, { useEffect, useState } from 'react';
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock';
import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function MedicineHealing() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "الطب والعلاج في مصر القديمة", author: "نجلاء حبيب الزحالوي" },
        { title: "السحر والطب في الحضارات القديمة", author: "أسامة عدنان يحيى" },
        { title: "تاريخ الطب عند الأمم القديمة والحديثة", author: "عيسى إسكندر معلوف" },
        { title: "مصر القديمة", author: "سليم حسن" },
        { title: "الطب المصري القديم", author: "د. حسن كمال" }
    ];


    useEffect(() => {
        fetch("/data/education/Medicine.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الطب في مصر القديمة"
                description="رحلة مدهشة في تاريخ المداواة والجراحة والأدوية، حيث امتزج العلم بالسحر، والتشريح بالعقيدة، فابتكر المصريون منظومة طبية سبقت عصرهم بآلاف السنين."
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

export default MedicineHealing;