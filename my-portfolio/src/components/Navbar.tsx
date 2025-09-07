import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">
                My Portfolio
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/" className="hover:text-purple-400">Home</Link>
                <Link to="/resume" className="hover:text-purple-400">Resume</Link>
                <Link to="/projects" className="hover:text-purple-400">Projects</Link>
                <Link to="/skills" className="hover:text-purple-400">Skills</Link>
                <Link to="/contact" className="hover:text-purple-400">Contact</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;