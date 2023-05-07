import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
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
        setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)))
        /* 업데이트 된 투두를 업데이트 한다. */
        // const updatedTodos = todos.map((todo) => {
        //     if (todo.id === updated.id) {
        //         return updated;
        //     }
        //     return todo;
        // });
        // setTodos(updatedTodos);
    };
    const handleDelete = (deleted) => {
        /* 삭제 된 투두를 업데이트 한다. */
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    };
    return (
        <section>
            <ul>
                {todos.map((item) => (
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
