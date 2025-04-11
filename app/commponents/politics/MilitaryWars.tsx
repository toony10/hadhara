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

function MilitaryWars() {
    const [data, setData] = useState<ContentData[]>([]);


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
            {/* <ReferencesSection references={ references } /> */ }
            {/* خط فاصل أسفل القسم */ }

        </div>
    )
}

export default MilitaryWars;