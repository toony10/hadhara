import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageViewerProps {
    imageUrl: string;
    caption?: string; // الكابشن (يؤخذ تلقائيًا من `imageDescriptions`)
}

function ImageViewer({ imageUrl, caption }: ImageViewerProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* الصورة المصغرة مع العنوان */ }
            <div className="flex flex-col items-center text-center cursor-pointer">
                <Image
                    src={ imageUrl }
                    alt={ caption || "صورة" }
                    width={ 400 }
                    height={ 300 }
                    className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    onClick={ () => setIsOpen(true) }
                />
                {/* عرض التوضيح أسفل الصورة */ }
                { caption && (
                    <p className="text-gray-700 text-sm mt-2 w-full text-center">{ caption }</p>
                ) }
            </div>

            {/* نافذة تكبير الصورة */ }
            <AnimatePresence>
                { isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        onClick={ () => setIsOpen(false) }
                    >
                        <motion.div
                            className="relative max-w-full max-h-full"
                            initial={ { scale: 0.5, opacity: 0 } }
                            animate={ { scale: 1, opacity: 1 } }
                            exit={ { scale: 0.5, opacity: 0 } }
                            transition={ { duration: 0.3 } }
                        >
                            <Image
                                src={ imageUrl }
                                alt={ caption || "صورة مكبرة" }
                                width={ 1200 }
                                height={ 800 }
                                className="rounded-lg shadow-lg"
                            />
                            {/* عرض التوضيح أسفل الصورة عند التكبير */ }
                            { caption && (
                                <p className="text-white text-lg mt-4 text-center bg-black bg-opacity-50 px-4 py-2 rounded">
                                    { caption }
                                </p>
                            ) }
                        </motion.div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </>
    );
}

export default ImageViewer;
