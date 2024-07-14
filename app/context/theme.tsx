'use client'

import { createContext, ReactNode, useState } from "react";

//Built Connection with createContext
 export const ThemeContext = createContext({
  theme: 'dark',
  switchLight: () => {},
  switchDark: () => {}
});

//ThemeProvider Function
const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('dark');

    const switchLight = () => {
        setTheme('light');
    }

    const switchDark = () => {
        setTheme('dark');
    }

    return (
        <ThemeContext.Provider value={{ theme, switchLight, switchDark }}>
            <div className={`${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
