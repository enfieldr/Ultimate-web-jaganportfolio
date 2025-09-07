import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/animation.json';

const Hero: React.FC = () => {
    const typingEffect = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <motion.h1
                className="text-5xl font-bold"
                variants={typingEffect}
                initial="hidden"
                animate="visible"
            >
                Your Name
            </motion.h1>
            <motion.h2
                className="text-3xl mt-2"
                variants={typingEffect}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
            >
                Your Role
            </motion.h2>
            <div className="mt-4">
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData,
                    }}
                    height={400}
                    width={400}
                />
            </div>
            <div className="mt-6">
                <a href="#resume" className="px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition">
                    View Resume
                </a>
                <a href="#projects" className="ml-4 px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition">
                    View Projects
                </a>
                <a href="#contact" className="ml-4 px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Hero;