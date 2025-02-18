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

function Holidays() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        {
            title: "الأعياد في مصر القديمة - د. عبد الحليم نور الدين",
            link: "https://example.com/ancient-egypt-festivals"
        },
        {
            title: "English Readings in Egyptology - Prof. Dr. Wazir W. Abdel-Wahab",
            link: "https://example.com/english-readings-egyptology"
        },
        {
            title: "موسوعة مصر القديمة (الجزء الثالث) - د. سليم حسن",
            link: "https://example.com/ancient-egypt-encyclopedia-vol3"
        },
        {
            title: "حضارة مصر القديمة - د. وزير وزير عبد الوهاب",
            link: "https://example.com/ancient-egypt-civilization"
        }
    ];


    useEffect(() => {
        fetch("/data/Worship/holidays.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen pt-16">
            <TopicHeader title='الأعياد الدينيه' description='كانت الأعياد في مصر القديمة تعبيرًا عن الروح الدينية والاجتماعية، وارتبطت بالعقيدة الدينية، والتقويم الزراعي، والحياة الملكية. لم تكن الأعياد مجرد احتفالات، بل حملت أبعادًا روحية وثقافية، حيث كُرّست لتكريم الآلهة، واسترضائها لضمان الخصب والخير، أو لتجديد شرعية الملك، أو للتواصل مع أرواح الأجداد. تنوعت الأعياد بين الدينية والزراعية والفلكية والملكية، ولكل منها طقوس خاصة كالمواكب، وتقديم القرابين، وإقامة الولائم، والموسيقى والرقص. 
ارتبطت الأعياد بالتقويم المصري القديم، المعتمد على دورة نهر النيل والفصول الزراعية، وساهمت في توحيد المجتمع حيث اجتمع الناس من مختلف الأعمار للاحتفال. أما أعياد الموتى، فكانت مناسبة لزيارة المقابر وتقديم الطعام للأرواح، وانتشرت في أنحاء مصر. احتلت الأعياد مكانة بارزة، وخصص لها المصريون أيامًا محددة، كما ورد في حجر باليرمو وقوائم معابد كوم أمبو وإدفو ودندرة، التي وثّقت أعياد آلهة مثل حورس، حتحور، وسخمت.'/>
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
            <hr className="mt-10 border-t-2 border-dotted border-stone-300 w-1/2 mx-auto" />
        </div>
    )
}

export default Holidays;