import React from 'react';
import SkillBar from '../components/SkillBar';
import RadialChart from '../components/RadialChart';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'TypeScript', level: 70 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8"
        >
            <h1 className="text-3xl font-bold mb-6">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                ))}
            </div>
            <div className="mt-10">
                <RadialChart skills={skills} />
            </div>
        </motion.div>
    );
};

export default Skills;