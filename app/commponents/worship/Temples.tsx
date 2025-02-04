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

function Temples() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        {
            title: "الحضارة المصرية القديمة - تأليف د. محمد بيومي مهران",
            link: "https://example.com/ancient-egypt-mohamed-bayoumi"
        },
        {
            title: "كهان مصر القديمة - تأليف سياج سونيرون، ترجمة: زينب الكردي، مراجعة: د. أحمد بدوي",
            link: "https://example.com/egyptian-priests-siega-soniron"
        },
        {
            title: "مجلة كلية الآثار، جامعة القاهرة - مجلد 16، عدد 2",
            link: "https://doi.org/10.21608/jarch.2024.333166"
        },
        {
            title: "بحث كامل عن المعابد في مصر القديمة حتى الدولة الحديثة - بقلم الأثري محمود محمد مندراوي",
            link: "https://example.com/egyptian-temples-mahmoud-mandrawy"
        },
        {
            title: "العمارة المعبدية في مصر الفرعونية - تأليف مصطفى الأحمدي",
            link: "https://example.com/temple-architecture-mustafa-alahmadi"
        }
    ];

    useEffect(() => {
        fetch("/data/Worship/Temples.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div className="min-h-screen pt-16">
            <TopicHeader
                title="المعابد في مصر القديمة"
                description={ `
    تعتبر المعابد شيئًا هامًا في فن العمارة المصرية، وذلك لما عُرف عن المصريين القدماء من حبهم لآلهتهم وتدينهم. 
    فكما هو معروف، الشعب المصري متدين بطبيعته. كما قال المؤرخ اليوناني هيرودوت قبل 6 قرون من ميلاد السيد المسيح عليه السلام، 
    متعجبًا من تدين المجتمع المصري القديم: 
    "لم أجد شعبًا يحب آلهته ودينه كما وجدت المصريين."
    كانت المعابد تُسمى بيت الإله أو تُنسب إلى اسم الملك الذي شُيد له المعبد.
  `}
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
            <hr className="mt-10 border-t-2 border-dotted border-stone-300 w-1/2 mx-auto" />
        </div>
    )
}

export default Temples