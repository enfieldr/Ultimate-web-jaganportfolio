import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-2">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        Twitter
                    </a>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;