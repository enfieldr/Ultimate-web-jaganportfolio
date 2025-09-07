import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        technologies: string[];
        link: string;
    };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <p className="font-semibold">Technologies:</p>
                <ul className="list-disc list-inside mb-4">
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className="flex justify-end">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                        View Project
                    </a>
                    <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;