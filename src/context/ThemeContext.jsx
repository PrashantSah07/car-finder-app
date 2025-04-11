import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem('darkTheme') === 'true';
    });
    useEffect(() => {
        localStorage.setItem('darkTheme', darkTheme);
        if (darkTheme) {
            document.body.style.background = '#020617';
            document.body.style.color = 'white'
        } else {
            document.body.style.background = 'white';
            document.body.style.color = 'black'
        }
    }, [darkTheme])

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
