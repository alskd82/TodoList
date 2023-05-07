import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import styles from './AddTodo.module.css'
/*
uuid 의 버전4를 사용하는데... uuidv4 라는 이름으로 사용할 것이다
 */

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState("");
    const handleChange =(e)=>{
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault(); // 페이지가 새로고침 되는 것을 막는다.
        if(text.trim().length === 0) return; // 공백일 경우 추가하지 않는다.
        onAdd({id: uuidv4(), text, status: "active"});
        setText(""); // input 초기화
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.input}
                type="text"
                placeholder="Add Todo"
                value={text}
                onChange={handleChange}
            />
            <button className={styles.btn}>Add</button>
        </form>
    );
}
