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

function MilitaryWars() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        {
            title: "مشرفو المجندين الأجانب في الجيش في مصر القديمة والألقاب المرتبطة بهم (The Overseers of Foreign Soldiers in the Ancient Egyptian Army and their Titles)",
            author: "د. عماد عبد العظيم عاشور، أستاذ مساعد تاريخ وحضارة مصر والشرق الأدنى القديم، قسم التاريخ، كلية الآداب - جامعة الفيوم"
        },
        {
            title: "صور من الحضارة في مصر القديمة",
            author: "إبراهيم نمير سيف الدين، محمد واصف حرص، د. عبد الحميد البطريق، مصطفى أحمد الشهابي"
        },
        {
            title: "الحياة اليومية في مصر القديمة (La Vita Quotidiana Nell'Antico Egitto)"
        },
        {
            title: "حضارة مصر القديمة",
            author: "د. وزير وزير عبد الوهاب، أستاذ آثار وحضارة مصر القديمة"
        },
        {
            title: "المناصب والمهن والحرف في مصر القديمة من خلال العلامات التصويرية",
            author: "د. أمل محمد بيومي مهران"
        }
    ];

    useEffect(() => {
        fetch("/data/Politics/MilitaryWars.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الجيش والحروب"
                description="لعب الجيش المصري دورًا محوريًا في تاريخ مصر القديمة، حيث لم يكن مجرد قوة عسكرية، بل كان عاملًا رئيسيًا في تحقيق الاستقرار والتوسع الإقليمي. قاد الفراعنة الجيوش في معارك دفاعية وهجومية، مستخدمين أسلحة متطورة، وعجلات حربية، واستراتيجيات قتالية متقدمة. ساهمت الحروب في تعزيز قوة مصر السياسية والعسكرية، مما جعلها واحدة من أعظم الحضارات في العالم القديم."
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

export default MilitaryWars;