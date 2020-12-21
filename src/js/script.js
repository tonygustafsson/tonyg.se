const setDarkMode = () => {
    const nightIcon = document.querySelector('.js-theme-toggler-night');
    const dayIcon = document.querySelector('.js-theme-toggler-day');

    nightIcon.classList.add('active');
    dayIcon.classList.remove('active');

    document.body.classList.add('dark-mode');
};

const removeDarkMode = () => {
    const nightIcon = document.querySelector('.js-theme-toggler-night');
    const dayIcon = document.querySelector('.js-theme-toggler-day');

    nightIcon.classList.remove('active');
    dayIcon.classList.add('active');

    document.body.classList.remove('dark-mode');
};

const setThemeBasedOnPreferedScheme = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDarkScheme.matches) {
        setDarkMode();
    } else {
        removeDarkMode();
    }
};

const addImageTransitions = () => {
    setTimeout(() => {
        const headerImg = document.querySelector('.header__image');
        headerImg.classList.add('header__image--transitionable');
    }, 0);
};

const toggleTheme = () => {
    if (document.body.classList.contains('dark-mode')) {
        removeDarkMode();
    } else {
        setDarkMode();
    }
};

const addThemeToggleTriggers = () => {
    const themeTogglers = Array.from(document.querySelectorAll('.js-theme-toggler'));

    themeTogglers.forEach((themeToggler) => {
        themeToggler.addEventListener('click', toggleTheme);
    });
};

window.addEventListener('DOMContentLoaded', () => {
    addImageTransitions();
    setThemeBasedOnPreferedScheme();
    addThemeToggleTriggers();
});
