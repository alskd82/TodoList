import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import styles from './Todo.module.css'

export default function Todo({id, todo, onUpdate, onDelete}) {
    const {text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? "completed" : "active";
        onUpdate({...todo, status});
    }
    const handleDelete = () => onDelete(todo)
    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type="checkbox" 
                id={id}
                checked={status === "completed"} // status 가 completed 일 경우 체크박스가 체크된다.
                onChange={ handleChange }
            />
            <label htmlFor={id} className={styles.text}>{text}</label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.btn}> <FaTrashAlt /> </button>
            </span>
        </li>
    );
}

