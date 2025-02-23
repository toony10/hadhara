'use client';

import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ name: string; contactInfo: string; message: string }>({
        name: '',
        contactInfo: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // التحقق من صحة البيانات
        const newErrors = { name: '', contactInfo: '', message: '' };
        let isValid = true;

        if (!name) {
            newErrors.name = 'الاسم مطلوب';
            isValid = false;
        }

        if (!contactInfo) {
            newErrors.contactInfo = 'البريد الإلكتروني أو رقم الهاتف مطلوب';
            isValid = false;
        }

        if (!message) {
            newErrors.message = 'الطلب أو الشكوى مطلوبة';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // هنا يمكن إرسال البيانات إلى الخادم أو معالجتها
            setIsSubmitted(true);
        }
    };

    return (
        <div className="container mx-auto px-6 py-16 mt-32">
            {/* العنوان */ }
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">التواصل والشكاوي</h2>

            {/* النموذج */ }
            <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-300">
                <form onSubmit={ handleSubmit }>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">الاسم</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50"
                            value={ name }
                            onChange={ (e) => setName(e.target.value) }
                        />
                        { errors.name && <p className="text-red-500 text-xs mt-2">{ errors.name }</p> }
                    </div>

                    <div className="mb-6">
                        <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-700">البريد الإلكتروني أو رقم الهاتف</label>
                        <input
                            type="text"
                            id="contactInfo"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50"
                            value={ contactInfo }
                            onChange={ (e) => setContactInfo(e.target.value) }
                        />
                        { errors.contactInfo && <p className="text-red-500 text-xs mt-2">{ errors.contactInfo }</p> }
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">الطلب أو الشكوى</label>
                        <textarea
                            id="message"
                            rows={ 4 }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50"
                            value={ message }
                            onChange={ (e) => setMessage(e.target.value) }
                        />
                        { errors.message && <p className="text-red-500 text-xs mt-2">{ errors.message }</p> }
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-600 focus:outline-none transition-all"
                        >
                            إرسال
                        </button>
                    </div>

                    { isSubmitted && (
                        <div className="text-center text-green-500 mt-4">
                            <p>تم إرسال الطلب بنجاح! سنقوم بالرد عليك قريبًا.</p>
                        </div>
                    ) }
                </form>
            </div>
        </div>
    );
}
