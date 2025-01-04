import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">

                    <div>
                        <h1 className="text-3xl font-bold">حضارة</h1>
                        <p className="mt-2 text-sm">اكتشف عالم الحضارة المصرية القديمة</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#home" className="hover:text-gray-400">الرئيسية</a>
                        <a href="#about" className="hover:text-gray-400">عن الموقع</a>
                        <a href="#contact" className="hover:text-gray-400">اتصل بنا</a>
                    </div>
                </div>

                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://www.facebook.com" className="text-white hover:text-gray-400">فيسبوك</a>
                    <a href="https://www.instagram.com" className="text-white hover:text-gray-400">إنستجرام</a>
                    <a href="https://www.twitter.com" className="text-white hover:text-gray-400">تويتر</a>
                </div>


                <div className="mt-6 text-center text-sm">
                    <p>© 2025 جميع الحقوق محفوظة لموقع حضارة</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
