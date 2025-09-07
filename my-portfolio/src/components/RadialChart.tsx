import React from 'react';
import { motion } from 'framer-motion';

const RadialChart = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="flex justify-center items-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
                {data.map((item, index) => {
                    const angle = (item.value / total) * 360;
                    const offset = data.slice(0, index).reduce((sum, i) => sum + (i.value / total) * 360, 0);
                    const x1 = 100 + 100 * Math.cos((offset * Math.PI) / 180);
                    const y1 = 100 + 100 * Math.sin((offset * Math.PI) / 180);
                    const x2 = 100 + 100 * Math.cos(((offset + angle) * Math.PI) / 180);
                    const y2 = 100 + 100 * Math.sin(((offset + angle) * Math.PI) / 180);

                    return (
                        <motion.path
                            key={index}
                            d={`M 100 100 L ${x1} ${y1} A 100 100 0 ${angle > 180 ? 1 : 0} 1 ${x2} ${y2} Z`}
                            fill={item.color}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                    );
                })}
            </svg>
            <div className="absolute text-center">
                <h2 className="text-xl font-bold">Skills</h2>
                <ul className="mt-2">
                    {data.map((item, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RadialChart;