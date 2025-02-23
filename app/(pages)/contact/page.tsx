'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ name: string; contactInfo: string; message: string }>({
        name: '',
        contactInfo: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
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

        if (isValid && form.current) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setIsSubmitted(true);
                        // إعادة تعيين الحقول بعد الإرسال
                        setName('');
                        setContactInfo('');
                        setMessage('');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    return (
        <div className="container mx-auto px-6 py-16 mt-32">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">التواصل والشكاوي</h2>

            {/* النموذج */ }
            <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-300">
                <form ref={ form } onSubmit={ sendEmail }>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">الاسم</label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
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
                            name="contact_info"
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
                            name="message"
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
