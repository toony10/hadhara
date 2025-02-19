import React, { useEffect, useState } from 'react'
import TopicHeader from '../custome/TopicHeader';
import ContentBlock from '../custome/ContentBlock'
// import ReferencesSection from '../custome/ReferencesSection';

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Furniture() {
    const [data, setData] = useState<ContentData[]>([]);


    //         title: "أشغال النجارة في مصر القديمة (نجارة الأثاث والعمارة اللوحات) - د. محمد راشد حماد",
    //         link: "https://example.com/woodwork-1970"
    //     },
    //     {
    //         title: "نجارة الأثاث في مصر القديمة - د. محمد راشد حماد",
    //         link: "https://example.com/furniture-2009"
    //     }
    // ];

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
            {/* <ReferencesSection references={ references } /> */ }
            {/* خط فاصل أسفل القسم */ }
            <hr className="mt-10 border-t-2 border-dotted border-stone-300 w-1/2 mx-auto" />
        </div>
    )
}

export default Furniture
