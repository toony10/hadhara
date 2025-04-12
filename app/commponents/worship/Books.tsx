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

function Books() {
    const [data, setData] = useState<ContentData[]>([]);

    // const references = [
    //     {
    //         title: "كتاب الديانة فى مصر القديمة ل ياروسالف تشرفى",
    //         link: "#"
    //     },
    //     {
    //         title: "الدين فى مصر القديمة ل ابكار السقاف",
    //         link: "#"
    //     },
    //     {
    //         title: "الديانة فى مصر القديمة ل جون بينز",
    //         link: "#"
    //     },
    //     {
    //         title: "الديانة فى مصر القديمة ل د/ زينب حشيش",
    //         link: "#"
    //     }
    // ];

    useEffect(() => {
        fetch("/data/Worship/Books.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div>
            <TopicHeader
                title="الكتب الدينيه"
                description="مجموعة من النصوص الدينية التي تعكس تصور المصريين لحياة الموتى في العالم الآخر. تتضمن تعاويذ لتجهيز الجسد للدفن، وإطعام المتوفى، وتقديم القرابين، وحمايته من الشرور في العالم الآخر."
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

export default Books;