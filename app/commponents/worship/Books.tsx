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

function Books() {
    const [data, setData] = useState<ContentData[]>([]);

    const references = [
        { title: "الديانة في مصر القديمة", author: "ياروسلاف تشيرني" },
        { title: "الدين في مصر القديمة", author: "أبكار السقاف" },
        { title: "الديانة في مصر القديمة", author: "جون بينز" },
        { title: "الديانة في مصر القديمة", author: "د. زينب حشيش" }
    ];

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
            <ReferencesSection references={ references } />

        </div>
    )
}

export default Books;