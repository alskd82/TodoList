import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext(); // createContext 를 사용하여 Context 를 생성

/* 프로바이더 - 우산 만들기 */
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // setDarkMode(prev => !prev) 와 같은 의미
        updateDarkMode(!darkMode);
    }
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

function updateDarkMode(darkMode){
    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
}

export const useDarkMode = () => useContext(DarkModeContext); // 커스텀 훅을 만들어서 사용