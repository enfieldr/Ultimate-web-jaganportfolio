import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
    skill: string;
    percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="font-medium">{skill}</span>
                <span className="font-medium">{percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default SkillBar;