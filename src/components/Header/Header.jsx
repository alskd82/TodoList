import React from "react";
import styles from './Header.module.css'
import { useDarkMode } from "../../context/DarkModeConext";
import {HiMoon, HiSun} from 'react-icons/hi';

export default function Header({ filterOptions, filter, onFilterChange }) {
    const {darkMode, toggleDarkMode} = useDarkMode();

    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode} className={styles.toggle}>
                {!darkMode ? <HiMoon /> : <HiSun />}
            </button>
            <ul className={styles.filters}>
                {filterOptions.map((item, i) => (
                    <li key={i}>
                        <button 
                            onClick={()=> onFilterChange(item)}
                            className={`${styles.btn} ${filter === item && styles.selected}`}
                        > 
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}