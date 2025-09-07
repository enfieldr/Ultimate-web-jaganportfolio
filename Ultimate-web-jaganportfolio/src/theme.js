const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        htmlElement.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light-mode');
        toggleBtn.textContent = "☀️ Light";
    }

    toggleBtn.addEventListener('click', () => {
        toggleTheme();
        const isLight = document.documentElement.classList.contains('light-mode');
        toggleBtn.textContent = isLight ? "☀️ Light" : "🌙 Dark";
    });
});