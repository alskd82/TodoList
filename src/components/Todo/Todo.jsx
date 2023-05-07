import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function Todo({id, todo, onUpdate, onDelete}) {
    const {text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? "completed" : "active";
        onUpdate({...todo, status});
    }
    const handleDelete = () => onDelete(todo)
    return (
        <li>
            <input 
                type="checkbox" 
                id={id}
                checked={status === "completed"} // status 가 completed 일 경우 체크박스가 체크된다.
                onChange={ handleChange }
            />
            <label htmlFor={id}>{text}</label>
            <button onClick={handleDelete}> <FaTrashAlt /> </button>
        </li>
    );
}

