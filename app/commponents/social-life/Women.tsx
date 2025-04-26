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

function Women() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "المرأة في مصر القديمة", author: "محمد فياض" },
        { title: "المرأة في مصر القديمة", author: "عبد الحليم نور الدين" },
        { title: "المرأة والزواج في مصر القديمة", author: "نشأت عبيد سعد" }
    ];


    useEffect(() => {
        fetch("/data/Social-life/Women.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="المرأة"
                description="لعبت المرأة دورًا حيويًا في مختلف جوانب الحياة في مصر القديمة، حيث تمتعت بمكانة مرموقة، سواء في الأسرة أو في المجتمع. استطاعت الوصول إلى أعلى المناصب، بما في ذلك الحكم كفرعون، ومارست العديد من المهن مثل الطب، التجارة، والإدارة. كما انعكس تقدير المصريين القدماء لها في الفنون والعمارة، حيث خُلدت صورها في المعابد والمقابر، مما يعكس دورها المحوري في بناء الحضارة المصرية."
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

export default Women;