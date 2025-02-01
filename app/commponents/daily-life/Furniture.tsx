import React, { useEffect, useState } from 'react'
import ContentBlock from '../custome/ContentBlock'

interface ContentData {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function Furniture() {
    const [data, setData] = useState<ContentData[]>([]);

    useEffect(() => {
        fetch("/data/daily-life/furniture.json") // تحميل البيانات من الملف
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData));
    }, []);
    return (
        <div className="min-h-screen py-16">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* العنوان */ }
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    الأثاث في مصر القديمة
                </h1>

                {/* المقدمة */ }
                <div className="text-center">
                    <p className="text-gray-500 text-lg font-sans">
                        الأثاث في مصر القديمة كان له مكانة متميزة، حيث كان مرتبطًا بشكل وثيق بحياة المصريين الدينية والدنيوية.
                        فن النجارة في مصر القديمة تأثر بالفنون الأخرى، كما يظهر من الأثاث والأدوات الخشبية المتبقية، سواء كانت حقيقية أو مصورة أو مجسمة.
                        هذا يعكس مهارة النجار المصري وقدرته الفنية والصناعية، حيث تتميز القطع الخشبية بالدقة والأناقة والجمال، مما يرفعها إلى مستوى فن راقٍ.
                    </p>
                </div>
                <hr className="border-2 rounded-md mt-7" />

                <div>
                    <ContentBlock title='خامات النباتات في صناعة الأثاث المصري القديم' description='اعتمد المصريون القدماء على أنواع مختلفة من الأخشاب المحلية والمستوردة لصناعة الأثاث، حيث تأثر توفرها بالمناخ والتغيرات البيئية على مدار العصور. مع قلة الأمطار والجفاف الذي أصاب مصر منذ نهايات العصر الحجري، بدأ المصريون في استيراد الأخشاب من الدول المجاورة لتعويض نقص الموارد المحلية.' />
                    <ContentBlock title='أنواع الأشجار المستخدمة' listItems={ [
                        {
                            title: "الجميز",
                            description: "أحد أهم الأشجار في مصر القديمة، استخدم في صناعة التوابيت، التماثيل، والأثاث الجنائزي. ارتبطت هذه الشجرة دينيًا بالإله أوزوريس والإلهتين حاتحور ونوت، وكانت تُزرع في الحدائق والمعابد."
                        },
                        {
                            title: "السنط",
                            description: "معروف بخشبه القوي المقاوم للمياه، استخدمه المصريون في بناء السفن والتوابيت والأدوات الحرفية."
                        },
                        {
                            title: "الأثل (الطرفاء)",
                            description: "استُخدم في صنع الأثاث والمراكب، وذُكر في نقوش المعابد والمقابر كأحد الأشجار المقدسة."
                        },
                        {
                            title: "البرساء (اللبخ)",
                            description: "استُخدم في صناعة الأسرة والمناضد، كما نُحتت منه تماثيل الآلهة والملوك، حيث عُثر على أجزاء منه في المعابد والمقابر."
                        },
                        {
                            title: "الصفصاف",
                            description: "استُخدم في صناعة الأدوات والمقابض الخشبية، وارتبط بعبادة حاتحور، حيث وُجدت زراعته في المعابد."
                        },
                        {
                            title: "الخروب",
                            description: "استخدم في صناعة التوابيت والمعدات الحربية، وعُثر على أثاث مصنوع منه ومزين بالذهب والعاج."
                        },
                        {
                            title: "النبق (السدر)",
                            description: "خشب صلد بلون أصفر، استُخدم في صناعة التوابيت والأدوات الزراعية."
                        },
                        {
                            title: "الهجليج",
                            description: "أشجار تنمو في النوبة والواحات، خُصصت أخشابها لصناعة الأدوات الحرفية وبعض قطع الأثاث."
                        },
                        {
                            title: "المخبط",
                            description: "شجرة بطيئة النمو، استخدمت أخشابها في بناء المراكب وصناعة الأدوات الزراعية."
                        },
                        {
                            title: "نخيل البلح والدوم",
                            description: "لم تُستخدم أخشابها كثيرًا، لكن استُغلت أليافها في صناعة الحبال، والأسطح المنسوجة، وساريات المعابد."
                        }
                    ] } imageUrls={ ['/assets/daily-life/Furniture/furniture1.PNG', '/assets/daily-life/Furniture/furniture2.PNG'] } imageDescriptions={ ['شجر الجميز', 'شجر السنط'] } />
                    <ContentBlock
                        title="الحدائق في مصر القديمة"
                        description="زُرعت الحدائق حول المعابد والقصور والمنازل للاستفادة من ظلالها وخشبها وثمارها."
                        listItems={ [
                            { title: "الأثل", description: "شجرة ظل استخدمت أخشابها في البناء." },
                            { title: "الجميز", description: "استخدم في التوابيت والمراكب." },
                            { title: "النخيل", description: "استخدم لصناعة الأثاث والحبال." }
                        ] }
                        imageUrls={ ["/assets/daily-life/Furniture/furniture3.jpg"] }
                        imageDescriptions={ ["الحدائق علي جدران المعابد"] }
                    />
                    <ContentBlock
                        title="خامات النباتات (الأخشاب)"
                        description="اعتمد المصريون القدماء على الأخشاب المحلية والمستوردة في صناعة الأثاث، ومن أهم الأشجار المستخدمة:"
                        listItems={ [
                            { title: "الجميز", description: "استُخدم في صناعة التوابيت، الأثاث الجنائزي، والمراكب." },
                            { title: "السنط", description: "خشب صلب مقاوم للمياه، استخدم في صناعة السفن والتوابيت." },
                            { title: "الأثل (الطرفاء)", description: "استُخدم في الأثاث وأدوات الزراعة." },
                            { title: "الأرز (من لبنان)", description: "استخدم في صناعة السفن والأثاث الفاخر والتوابيت." },
                            { title: "الأبنوس (من إفريقيا)", description: "خشب صلب أسود اللون، استخدم في الأثاث الملكي والتماثيل." }
                        ] }
                        imageUrls={ ["/assets/daily-life/Furniture/furniture4.PNG"] }
                        imageDescriptions={ ["شجر الأرز"] }
                    />
                    <ContentBlock
                        title=" خامات الحيوان"
                        description="استُخدمت بعض المواد الحيوانية في النجارة مثل العاج والجلد والغراء."
                        listItems={ [
                            { title: "العاج", description: "استخدم في التماثيل والأثاث الفاخر." },
                            { title: "الجلد", description: "استخدم في صناعة الكراسي والأسرة." },
                            { title: "الغراء", description: "مادة لاصقة قوية استخدمت في تثبيت أجزاء الأثاث." }
                        ] }
                    />
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
                    <ContentBlock
                        title="صناعة الأثاث في مصر القديمة"
                        description="تنوعت قطع الأثاث المصري القديم بين الاستخدامات الدنيوية والجنائزية."
                        listItems={ [
                            { title: "الأسرة", description: "بعضها مزود بدعامات وشبابيك." },
                            { title: "الكراسي", description: "تضمنت مساند ظهر ومتكآت للأذرع، مع حشوات جلدية." },
                            { title: "الصناديق", description: "كانت بأغطية منزلقة أو مفصلة." }
                        ] }
                        imageUrls={ ["/assets/daily-life/Furniture/furniture6.PNG", "/assets/daily-life/Furniture/furniture7.PNG"] }
                        imageDescriptions={ ["تشكيل أسره بالقادوم والمطرقه والأزميل", "صقل سرير بأربع أرجل قمعية الشكل"] }
                    />
                </div>
            </section>
        </div>
    )
}

export default Furniture
