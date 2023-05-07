import React from "react";
import styles from './Header.module.css'

export default function Header({ filterOptions, filter, onFilterChange }) {

    return (
        <header className={styles.header}>
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