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

function Furniture() {
    const [data, setData] = useState<ContentData[]>([]);
    const references = [
        { title: "العمارة في مصر القديمة", author: "د. محمد أنور شكري" },
        { title: "تاريخ العمارة المصرية القديمة - الجزء الأول: من أقدم العصور إلى نهاية الدولة القديمة", author: "تأليف: د. إسكندر بدوي، ترجمة: د. محمود عبد الرازق وصالح الدين رمضان، مراجعة: د. أحمد قدري ود. محمود ماهر طه" },
        { title: "آثار وحضارة مصر القديمة - الجزء الأول", author: "د. عبد الحليم نور الدين" },
        { title: "العمارة: أنواعها وتطورها عبر العصور المختلفة", author: "د. رمضان عبده علي" }
    ];

    useEffect(() => {
        fetch("/data/daily-life/Buildings.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);
    return (
        <div className="min-h-screen py-16">
            <TopicHeader
                title="مساكن المصري القديم"
                description="كان المصري القديم حريصًا على أن يكون منزله مزودًا بكل وسائل الراحة، فهو المكان الذي يعيش فيه معظم سنوات عمره، وهو الشاهد على الحياة الأسرية بكل ما فيها من حركة ونشاط. اختلفت أشكال وأحجام هذه البيوت باختلاف الأفراد الذين يسكنونها، كما تنوعت طرق بنائها ومحتوياتها. وقد ضمت المنازل المصرية القديمة أثاثًا بسيطًا، يتناسب مع احتياجات ساكنيها. ومع انشغال كبار الموظفين، والأمراء، ورجال الدين بأعمالهم، ظهرت طبقة من الخدم كانت جزءًا لا يتجزأ من المجتمع، تساعد في إدارة البيوت والقصور في الحياة الدنيا."
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

export default Furniture
