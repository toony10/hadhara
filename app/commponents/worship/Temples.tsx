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
        { title: "آثار وحضارة مصر القديمة", author: "عبد الحليم نور الدين" },
        { title: "ديانة مصر القديمة", author: "سليم حسن (ترجمة لكتاب جورج ستيندورف)" },
        { title: "الكتب الدينية في مصر القديمة", author: "د. عبد الحليم نور الدين" },
        { title: "العمارة المعبدية في مصر الفرعونية", author: "مصطفى الأحمدي" },
        { title: "بحث كامل عن المعابد في مصر القديمة حتى الدولة الحديثة", author: "الآثاري محمود محمد مندراوي" },
        { title: "الحضارة المصرية القديمة", author: "د. محمد بيومي مهران" },
        { title: "كهان مصر القديمة", author: "سياج سونيرون (ترجمة زينب الكردي، مراجعة د. أحمد بدوي)" },
        { title: "مجلة كلية الآثار، جامعة القاهرة، مجلد 16، عدد 2024" }
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

        </div>
    )
}

export default Temples