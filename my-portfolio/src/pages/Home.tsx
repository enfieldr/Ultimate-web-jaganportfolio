import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
            </motion.header>
            <main className="flex-grow">
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-10"
                >
                    <h2 className="text-2xl font-bold text-center">Experience & Education</h2>
                    <Timeline />
                </motion.section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;