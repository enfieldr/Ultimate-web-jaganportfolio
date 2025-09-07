import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;