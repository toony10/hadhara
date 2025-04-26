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

function LawsCourts() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "مصر والحياة المصرية في العصور القديمة", author: "أدولف إرمان وهرمان رانكه (ترجمة ومراجعة: د. عبد المنعم أبو بكر ومحرم كمال، القاهرة 1953)" },
        { title: "ماعت: مصر الفرعونية وفكرة العدالة الاجتماعية", author: "يان أسمان (ترجمة: زكية طبوزاده وعليه شريف، القاهرة 1996)" },
        { title: "الجريمة والعقاب في الفكر المصري القديم", author: "د. أحمد أمين سليم ود. سوزان عباس عبد اللطيف، أستاذَا تاريخ وحضارة مصر والشرق الأدنى القديم، جامعة الإسكندرية" },
        { title: "آثار وحضارة مصر القديمة", author: "د. عبد الحليم نور الدين" }
    ];


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
            <ReferencesSection references={ references } />

        </div>
    )
}

export default LawsCourts;