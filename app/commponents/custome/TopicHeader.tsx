import React from "react";

interface TopicHeaderProps {
    title: string;
    description: string;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({ title, description }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 py-7" >
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                { title }
            </h1>
            <div className="text-center">
                <p className="text-gray-500 text-lg font-sans">
                    { description }
                </p>
            </div>
            <hr className="border-2 rounded-md mt-7" />
        </div>
    );
};

export default TopicHeader;
