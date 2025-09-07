import React from 'react';

const Resume: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">My Resume</h1>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-2xl w-full">
                <iframe
                    src="/path/to/your/resume.pdf"
                    title="Resume"
                    className="w-full h-96"
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default Resume;