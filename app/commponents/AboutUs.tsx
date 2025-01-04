import Link from 'next/link';
import React from 'react'

export default function AboutUs() {

    return (
        <section className="py-16 bg-gray-100 h-[52rem]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">من نحن</h2>
                <p className="text-xl text-gray-600 mb-8">
                    نحن موقع حضارة، نقدم لك رحلة عبر الزمن لاستكشاف أعماق الحياة في مصر القديمة. من خلال محتوى تثقيفي متنوع، نهدف إلى نقل قصة الحضارة المصرية القديمة للأجيال الجديدة ونشر الوعي حول إنجازاتها العظيمة.
                </p>

                <div className="flex justify-center space-x-8">
                    <div className="max-w-xs">
                        <img src="/assets/our-mission.jpg" alt="فريق العمل" className="w-full h-[17rem] object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-700">رؤيتنا</h3>
                        <p className="text-gray-500 mt-2">
                            نسعى لتسليط الضوء على الإرث التاريخي والإنجازات الثقافية لمصر القديمة، ونقل قصصها المدهشة عبر الإنترنت بطريقة مبتكرة وسهلة الوصول.
                        </p>
                    </div>

                    <div className="max-w-xs">
                        <img src="/assets/our-vission.jpg" alt="مهمتنا" className="w-full h-[17rem] object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-700">مهمتنا</h3>
                        <p className="text-gray-500 mt-2">
                            مهمتنا هي تعليم الأفراد حول الحضارة المصرية، من خلال مقاطع الفيديو والمقالات والموارد التفاعلية التي تساهم في تعزيز الفهم الثقافي.
                        </p>
                    </div>
                </div>
                <Link href={ './' }>
                    <button className="bg-[#d4af37] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 mt-10" >
                        ابدأ رحلتك معنا
                    </button>
                </Link>
            </div>
        </section>
    );

}
