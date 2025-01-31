'use client'

function HeroSection() {
    return (
        <header>
            {/* Hero Section with Welcome Video */ }
            <div className="relative h-[49rem] pt-16 flex items-center justify-center lg:justify-end">
                {/* Gradient Overlay */ }
                <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-80 z-10"></div>

                {/* Background Video */ }
                <video className="absolute inset-0 w-full h-full object-cover opacity-85 z-0" autoPlay loop muted>
                    <source src="/assets/welcome-video.mp4" type="video/mp4" />
                </video>

                {/* Text Content */ }
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-10 lg:text-right lg:w-1/2 lg:items-end">
                    <h1 className="text-6xl font-bold mb-4">كل سطر يحكي حكاية، وكل حجر يشهد على مجد الأجداد</h1>
                    <p className="text-xl">انطلق معنا إلى أعماق حضارة أضاءت دروب التاريخ</p>
                </div>
            </div>
        </header>
    );
}

export default HeroSection;
