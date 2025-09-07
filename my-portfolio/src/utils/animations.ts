import { motion } from 'framer-motion';

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideIn = (direction = 'left') => {
  return {
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const hoverEffect = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 300,
    },
  },
};

export const buttonTap = {
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};