import React from "react";
import { motion } from "framer-motion";
import ImageViewer from "./ImageViewer";

interface ContentBlockProps {
    title: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function ContentBlock({ title, description, listItems, imageUrls, imageDescriptions }: ContentBlockProps) {
    // تحديد `reverse` تلقائيًا
    const reverse = !imageUrls || imageUrls.length === 0;

    return (
        <motion.div
            className={ `w-full flex flex-col lg:flex-row items-center gap-12 py-16 px-10 my-0
                ${reverse ? "lg:flex-row-reverse" : ""} 
                odd:bg-gray-50 even:bg-white transition-all duration-500` }
            initial={ { opacity: 0, y: 50 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, ease: "easeOut" } }
            viewport={ { once: true } }
        >
            {/* القسم النصي */ }
            <div className={ `text-right ${imageUrls ? "lg:w-1/2" : "w-full"} ` }>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{ title }</h2>
                { description && <p className="text-lg text-gray-700 mb-4">{ description }</p> }

                { listItems && listItems.length > 0 && (
                    <ul className="list-none space-y-6 items-start">
                        { listItems.map((item, index) => (
                            <li key={ index } className="flex space-x-1 justify-end">
                                <p className="text-gray-700">{ item.description }</p>
                                <span>:</span>
                                <p className="font-semibold text-gray-900">{ item.title }</p>
                            </li>
                        )) }
                    </ul>
                ) }
            </div>

            {/* القسم الخاص بالصورة باستخدام ImageViewer */ }
            { imageUrls && imageUrls.length > 0 && (
                <div className="lg:w-1/2 flex flex-col justify-center space-y-4">
                    { imageUrls.map((imageUrl, index) => (
                        <div key={ index } className="items-center">
                            <ImageViewer imageUrl={ imageUrl } caption={ imageDescriptions?.[index] || "" } />
                        </div>
                    )) }
                </div>
            ) }
        </motion.div>
    );
}

export default ContentBlock;
