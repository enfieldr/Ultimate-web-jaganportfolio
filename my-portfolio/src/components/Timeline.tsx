import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
    {
        year: '2023',
        title: 'Software Engineer',
        company: 'Tech Company',
        description: 'Developed innovative solutions and improved existing applications.'
    },
    {
        year: '2021',
        title: 'Web Developer',
        company: 'Web Agency',
        description: 'Worked on various client projects, focusing on responsive design and user experience.'
    },
    {
        year: '2020',
        title: 'Intern',
        company: 'Startup',
        description: 'Assisted in the development of a web application and learned about agile methodologies.'
    },
    {
        year: '2019',
        title: 'Bachelor of Science in Computer Science',
        company: 'University',
        description: 'Graduated with honors, focusing on software development and data structures.'
    }
];

const Timeline = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>
            <div className="relative w-full max-w-4xl">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            {item.year}
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <h4 className="text-gray-600">{item.company}</h4>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;