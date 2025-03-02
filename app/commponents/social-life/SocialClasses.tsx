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

function SocialClasses() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/Social-life/Social-classes.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الطبقات الاجتماعية"
                description="تميز المجتمع المصري القديم بهيكله الهرمي الصارم، حيث كانت الطبقات الاجتماعية تحدد دور الأفراد وامتيازاتهم. من الطبقة الحاكمة المتمثلة في الفرعون، مرورًا بالوزراء والكتبة والكهنة، وصولًا إلى الحرفيين والفلاحين والعمال، لعب كل فرد دوره في استقرار الدولة. انعكست هذه الطبقية في أسلوب الحياة، الحقوق، والمسؤوليات، مما ساهم في بناء واحدة من أعظم الحضارات في التاريخ."
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
            <hr className="mt-10 border-t-2 border-dotted border-stone-300 w-1/2 mx-auto" />
        </div>
    )
}

export default SocialClasses;