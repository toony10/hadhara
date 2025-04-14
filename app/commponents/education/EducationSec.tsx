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

function EducationSec() {
    const [data, setData] = useState<ContentData[]>([]);


    useEffect(() => {
        fetch("/data/education/education.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="فلسفة التعليم وأهدافه في مصر القديمة"
                description="تقدير العلم واحترام حامليه كان ركيزة أساسية في الحضارة المصرية القديمة، حيث جسد المصريون القدماء معرفتهم في المعتقدات الدينية والثقافية، مع التركيز على أهمية الكتابة والتعليم كأساس لتحقيق مكانة اجتماعية مرموقة، مما أثّر بشكل كبير على تطور المجتمع."
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

export default EducationSec;