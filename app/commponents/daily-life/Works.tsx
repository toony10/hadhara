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

function Works() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "الحياة اليومية في مصر القديمة (La Vita Quotidiana Nell’Antico Egitto)" },
        { title: "حضارة مصر القديمة", author: "د. وزير وزير عبد الوهاب، أستاذ آثار وحضارة مصر القديمة" },
        { title: "الأغاني في مصر القديمة", author: "شعراوي عبد الصادق شعراوي، رسالة ماجستير بإشراف أ.د. محمد عبد الحليم نور الدين، كلية الآثار - جامعة القاهرة" },
        { title: "العاج والمصنوعات العاجية في مصر القديمة حتى نهاية العصر العتيق", author: "إعداد: رضا محمد سيد أحمد، بحث ماجستير بقسم الآثار المصرية، كلية الآثار - جامعة القاهرة" },
        { title: "المناصب والمهن والحرف في مصر القديمة من خلال العلامات التصويرية", author: "د. أمل محمد بيومي مهران" },
        { title: "دور الوزير في مصر القديمة", author: "د. أحمد لفته محسن" },
        { title: "مصر في العصور القديمة", author: "تأليف: إبراهيم سمير سيف الدين، زكي علي، أحمد نجيب هاشم، مراجعة: محمد شفيق غربال" },
        { title: "تاريخ مصر القديمة", author: "عبد العزيز صالح" },
        { title: "كهان مصر القديمة", author: "تأليف: سيرج سونيرون، ترجمة: زينب الكردي، مراجعة: د. أحمد بدوي" },
        { title: "الوزير في مصر القديمة", author: "د. فايزة صقر، أستاذ تاريخ مصر والشرق الأدنى القديم" },
        { title: "وزراء الشمال (منف) في عصر الأسرة الثامنة عشر", author: "إعداد: شيماء عبد المنعم حسنين، طالبة دكتوراه بقسم التاريخ" },
        { title: "مكانة الخدم والأتباع في المنزل المصري القديم", author: "أ.م.د. قيس حاتم هاني الجنابي، كلية التربية الأساسية - جامعة بابل" },
        { title: "Status of Servants and Followers in the Ancient Egyptian Home", author: "Assist. Prof. Dr. Qais Hatim Hani Al-Janabi, University of Babylon / College of Basic Education" },
        { title: "تاريخ الفن المصري القديم: مدخل لدراسة الفنون الصغرى وفنون الصياغة", author: "د. محمد أحمد السيد، أستاذ الآثار والحضارة المصرية القديمة، كلية الآثار - جامعة الفيوم" },
        { title: "وصف مصر: الزراعة والصناعات والحرف والتجارة", author: "علماء الحملة الفرنسية" },
        { title: "الصناعات اليدوية، من موسوعة مصر القديمة (الجزء الثالث)", author: "سليم حسن" },
        { title: "الحرف التقليدية المصرية ونظام الطوائف", author: "بحث أكاديمي" }
    ];

    useEffect(() => {
        fetch("/data/daily-life/Works.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);
    return (
        <div className="min-h-screen py-16">
            <TopicHeader title="الحرف والمهن في مصر القديمة" description="الحرف والمهن في مصر القديمة كانت جزءًا أساسيًا من الحياة اليومية والاقتصاد، حيث تفنن المصريون في العديد من الصناعات اليدوية التي ساهمت في بناء حضارتهم العريقة. شملت هذه المهن النجارة، والنحت، وصناعة الفخار، والنسيج، وصياغة الذهب، والزراعة، وغيرها من الأعمال التي دعمت المجتمع المصري القديم. تأثرت هذه الحرف بالعوامل الدينية والاجتماعية، حيث كانت بعض الصناعات مخصصة لتجهيز المعابد والمقابر، مما يعكس التطور الفني والدقة في تنفيذ الأعمال." />
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

export default Works
