import React from "react";
import { motion } from "framer-motion";
import ImageViewer from "./ImageViewer";

interface ContentBlockProps {
    title?: string;
    description?: string;
    listItems?: { title: string; description?: string }[];
    imageUrls?: string[];
    imageDescriptions?: string[];
}

function ContentBlock({ title, description, listItems, imageUrls, imageDescriptions }: ContentBlockProps) {
    // تحديد `reverse` تلقائيًا
    const reverse = !imageUrls || imageUrls.length === 0;

    // تحقق مما إذا كانت النصوص فارغة (title, description, listItems)
    const hasTextContent = title || description || listItems;
    const hasImages = imageUrls && imageUrls.length > 0;
    const hasMultipleImages = hasImages && imageUrls.length > 1;

    return (
        <motion.div
            className={ `w-full flex flex-col lg:flex-row items-center gap-12 py-10 px-10
                ${ reverse ? "lg:flex-row-reverse" : "" } 
                odd:bg-gray-50 even:bg-white transition-all duration-500`}
            initial={ { opacity: 0, y: 50 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, ease: "easeOut" } }
            viewport={ { once: true } }
        >
            {/* عرض النصوص فقط إذا كانت موجودة */ }
            { hasTextContent && (
                <div className={ `text-right ${ hasImages ? "lg:w-1/2" : "w-full" }` }>
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
            ) }

            {/* عرض الصور فقط في حالة عدم وجود نصوص */ }
            { hasImages && (
                <div
                    className={ `w-full ${ hasMultipleImages ? "lg:flex-row lg:space-x-4" : "" } 
                    ${ hasTextContent ? "lg:w-1/2" : "w-full" } flex flex-col lg:flex-row justify-center items-center space-y-5` }
                >
                    { imageUrls.map((imageUrl, index) => (
                        <div
                            key={ index }
                            className={ `${ hasMultipleImages ? "lg:w-1/2" : "w-full" } items-center` }
                        >
                            <ImageViewer imageUrl={ imageUrl } caption={ imageDescriptions?.[index] || "" } />
                        </div>
                    )) }
                </div>
            ) }
        </motion.div>
    );
}

export default ContentBlock;
