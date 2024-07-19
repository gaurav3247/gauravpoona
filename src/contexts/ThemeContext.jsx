import { useState, createContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;