import React, { useEffect, useState } from 'react'
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock'
import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}


function Talismans() {
    const [data, setData] = useState<ContentData[]>([]);

    const references = [
        {
            title: "فنون صغري فرعونية - تأليف أحمد ابو بكر جلال",
            link: "#"
        },
        {
            title: "محاضرات في تاريخ الفن والعمارة المصرية القديمة - تأليف رمضان وجدي",
            link: "#"
        },
        {
            title: "محاضرات في الديانة المصرية القديمة - د. زينب سعيد حشيش",
            link: "#"
        },
        {
            title: "تاريخ الفن المصري القديم - د. محمد احمد السيد",
            link: "#"
        },
        {
            title: "التمائم فى مصر القديمة - الباحثة سمر فهيم حماد",
            link: "#"
        }
    ];

    useEffect(() => {
        fetch("/data/Worship/Talismans.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="التمائم"
                description="لم يقتصر نتاج الفن المصرى القديم على التماثيل والنقوش المحفورة على الآثار المصرية. 
            وإنما تغلغل في حياة المصرى فعبر عن أدق تفاصيل حياته وكان بمثابة المرأة التي تعكس لنا الأحوال الاقتصادية والسياسية والاجتماعية والدينية للمجتمع المصرى. 
            وقد ظهرت هذه التمائم منذ عصر ما قبل الأسرات وظلت مستخدمة في العصور التاريخية وحتى العصر الروماني، 
            بل أن استخدامها فى مصر لازال مستمرا حتى أيامنا هذه، ويدلنا العدد الضخم من التمائم الذي وصلنا من مختلف العصور التاريخية 
            على مدى أهمية هذا النوع من الفن في حياة المصريين القدماء، فقد لعبت التمائم دورا هاما في حياة الأحياء والأموات على حد سواء."
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
            {/* خط فاصل أسفل القسم */ }

        </div>
    )
}

export default Talismans;