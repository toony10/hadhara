import React, { useEffect, useState } from 'react'
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock'

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Holidays() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/Worship/holidays.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen py-16">
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
        </div>
    )
}

export default Holidays;