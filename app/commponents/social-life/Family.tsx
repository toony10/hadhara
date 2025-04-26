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

function Family() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "حضارة مصر القديمة", author: "د. وزير وزير عبد الوهاب، أستاذ آثار وحضارة مصر القديمة، جامعة بني سويف" },
        { title: "الزواج والطلاق في مصر القديمة", author: "أ.د. تحفة أحمد حندوسة" },
        { title: "مصر أيام الفراعنة", author: "محمد الخطيب" },
        { title: "مصر والشرق الأدنى القديم - الحضارة المصرية القديمة، الجزء الثاني: الحياة الاجتماعية والسياسية والعسكرية والقضائية والدينية", author: "أ.د. محمد بيومي مهران، أستاذ تاريخ مصر والشرق الأدنى القديم ورئيس قسم التاريخ والآثار المصرية والإسلامية، كلية الآداب - جامعة الإسكندرية" },
        { title: "الناس والحياة في مصر القديمة", author: "دومينيك قالبيل (ترجمة: ماهر جويجاتي، مراجعة: د. زكية طبوزاده)" },
        { title: "نظام الأسرة في مصر القديمة", author: "الباحث بدر عبد الله حسمني" },
        { title: "الأسرة المصرية في عصورها القديمة", author: "د. عبد العزيز صالح" },
        { title: "الحياة الاجتماعية في مصر القديمة", author: "هشام الجبالي" },
        { title: "الحياة الاجتماعية في مصر القديمة", author: "سمير و.م فلندرز بتري (ترجمة: حسن محمد جوهر وعبد المنعم عبد الحليم)" },
        { title: "الحياة الاجتماعية في مصر القديمة", author: "الباحث وليد حمدي سعد الدين الضيفي" },
        { title: "موسوعة الحضارة المصرية القديمة", author: "د. سمير أديب" },
        { title: "La Vita Quotidiana Nell’Antico Egitto" }
    ];

    useEffect(() => {
        fetch("/data/Social-life/Family.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الأسره"
                description="تعتبر الأسرة في مصر القديمة من أهم الأسس الاجتماعية التي تقوم عليها الحياة اليومية. كانت الأسرة تشكل وحدة مترابطة، حيث كانت العلاقات بين الزوجين والأبناء والإخوة محورية لضمان استقرار المجتمع واستمرار تقاليده. كانت تتمحور مسؤوليات الأفراد في رعاية وصون الأسرة، بدءًا من التربية إلى الحفاظ على الممتلكات والميراث."
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

export default Family;