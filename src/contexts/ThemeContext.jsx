import { useState, createContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const changeTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;