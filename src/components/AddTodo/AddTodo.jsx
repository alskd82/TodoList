import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState("");
    const handleChange =(e)=>{
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault(); // 페이지가 새로고침 되는 것을 막는다.
        if(text.trim().length === 0) return; // 공백일 경우 추가하지 않는다.
        onAdd({id: "고유한값", text, status: "active"});
        setText(""); // input 초기화
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Todo"
                value={text}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    );
}
