import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext(); // createContext 를 사용하여 Context 를 생성

/* 프로바이더 - 우산 만들기 */
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // setDarkMode(prev => !prev) 와 같은 의미
        updateDarkMode(!darkMode);
    }

    useEffect(() =>{
        const isDarkMode = 
            localStorage.theme === 'dark' || 
            (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

        setDarkMode(darkMode)
        updateDarkMode(darkMode);
    }, []) // 첫 렌더링 시에만 실행하기 위해 빈 배열을 두번째 인자로 넘겨준다.

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}

export const useDarkMode = () => useContext(DarkModeContext); // 커스텀 훅을 만들어서 사용