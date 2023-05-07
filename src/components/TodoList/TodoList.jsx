import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        { id: "123", text: "장보기", status: "active" },
        { id: "124", text: "공부하기", status: "active" },
    ]);
    const handleAdd = (todo) => {
        /* 새로운 투두를 업데이트 한다. */
        // console.log(todo);
        setTodos([...todos, todo]);
    };
    const handleUpdate = (updated) => {
        /* 업데이트 된 투두를 업데이트 한다. */
        setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)))
    };
    const handleDelete = (deleted) => {
        /* 삭제 된 투두를 업데이트 한다. */
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    };
    const filtered = getFilterItmes(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo
                        key={item.id}
                        id={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}

function getFilterItmes(todos, filter) {
    // switch (filter) {
    //     case "active":
    //         return todos.filter((item) => item.status === "active");
    //     case "completed":
    //         return todos.filter((item) => item.status === "completed");
    //     default:
    //         return todos;
    // }
    if(filter === "all") return todos;
    return todos.filter((item) => item.status === filter);
}