import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkMode]);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-800"
        >
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;