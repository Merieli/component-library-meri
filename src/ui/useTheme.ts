type ThemesType = 'light' | 'dark' | 'system';

export const useTheme = () => {
    const themeDark = 'night';

    const loadTheme = () => {
        if (
            localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.dataset.theme = themeDark;
            return;
        }

        document.documentElement.dataset.theme = '';
    };

    /**
     * Define o tema atual
     * @param theme - tema a ser definido para os componentes
     */
    const setTheme = (theme: ThemesType) => {
        if (theme === 'system') {
            localStorage.removeItem('theme');
        }

        if (theme !== 'system') {
            localStorage.setItem('theme', theme);
        }

        loadTheme();
    };

    return {
        loadTheme,
        setTheme,
    };
};
