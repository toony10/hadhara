import Image from "next/image";
import { Aref_Ruqaa } from "next/font/google";

const ArabicFont = Aref_Ruqaa({
    subsets: ['arabic'],
    weight: "400",
})

export default function team() {
    return (
        <div className={ `min-h-screen bg-gradient-to-b from-gray-800 to-yellow-100 text-white mx-auto px-6 py-20 ${ArabicFont.className}` }>
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-4xl font-bold text-center mb-8">إهداء</h1>
                <p className="text-3xl max-w-2xl text-center mb-12 leading-relaxed tracking-wide">
                    إلى من كانوا نورًا أضاء طريقي في درب العلم والمعرفة...
                    <br />
                    إلى أساتذتي الكرام، الذين لم يبخلوا بعلمهم وتوجيههم، فكانوا سندًا ودعامة في مسيرتي الأكاديمية، فلكم مني كل التقدير والامتنان.
                    <br />
                    إلى والدي ووالدتي، نبض قلبي، ومصدر قوتي، ودعاؤهما رفيقي في كل خطوة، شكرًا على كل لحظة صبر، وكل دعم ومحبة.
                    <br />
                    إلى إخوتي وأخواتي، شركاء الرحلة، وسندي في الحياة، أنتم البهجة والدافع.
                    <br />
                    وإلى كل أحبابي، من كان وجودهم بلسمًا في أوقات التعب، ودفعوني للاستمرار بعطائهم وكلماتهم الطيبة.
                    <br />
                    لكم جميعًا، أهدي ثمرة هذا الجهد
                </p>

                <div className="relative w-full max-w-6xl mb-16">
                    <Image
                        src="/assets/team.PNG"
                        alt="فريق العمل"
                        width={ 1500 }
                        height={ 800 }
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}
