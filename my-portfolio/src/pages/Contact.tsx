import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
            <motion.h1
                className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Me
            </motion.h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                    />
                </div>
                <div className="flex justify-center">
                    <AnimatedButton type="submit" className="w-full">
                        Send Message
                    </AnimatedButton>
                </div>
            </form>
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Connect with me:</h2>
                <div className="flex space-x-4 mt-2">
                    {/* Add social media icons here */}
                </div>
            </div>
        </div>
    );
};

export default Contact;