import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface SubTopic {
    title: string;
    link: string;
}

interface SubjectHeaderProps {
    title: string;
    description: string;
    backgroundImage: string;
    subTopics?: SubTopic[];
}

const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const SubjectHeader: React.FC<SubjectHeaderProps> = ({ title, description, backgroundImage, subTopics = [] }) => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={ { backgroundImage: `url('${backgroundImage}')` } }
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-6xl font-extrabold drop-shadow-lg mb-6">{ title }</h1>
                <p className="text-xl max-w-2xl mx-auto">{ description }
                </p>
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-8"
                    initial="hidden"
                    animate="visible"
                    variants={ {
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    } }
                >
                    { subTopics.map((topic, index) => (
                        <motion.div
                            key={ index }
                            className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg text-lg font-semibold 
                                    hover:bg-yellow-600 hover:scale-110 hover:rotate-2 hover:shadow-xl transition-all duration-300 ease-in-out"
                            variants={ tagVariants }
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.95 } }
                        >
                            <Link href={ topic.link }>{ topic.title }</Link>
                        </motion.div>
                    )) }
                </motion.div>
            </div>
        </div>
    );
};

export default SubjectHeader;
