import React from "react";

export default function Header({ filterOptions, filter, onFilterChange }) {

    return (
        <header>
            <ul>
                {filterOptions.map((item, i) => (
                    <li key={i}>
                        <button onClick={()=> onFilterChange(item)}> {item}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
