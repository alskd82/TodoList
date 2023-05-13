import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    // const [todos, setTodos] = useState([
    //     { id: "123", text: "장보기", status: "active" },
    //     { id: "124", text: "공부하기", status: "active" },
    // ]);
    const [todos , setTodos] = useState(()=> readTotosFromLocalStorage()); // 로컬스토리지에 저장된 todos 가져오기. 함수는 콜백함수로 넣어줘야 함!!
    /*
    const [todos , setTodos] = useState(readTotosFromLocalStorage());
    함수 자체를 useState() 의 인자로 넣어주면, 컴포넌트가 렌더링 될 때마다 함수가 호출된다.
    꼭 콟백함수로 넣어줘야 한다.
    const [todos , setTodos] = useState( function(){
        return readTotosFromLocalStorage();
    });
    */

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
    useEffect(()=>{
        /*
            배열을 로컬에 저장하기 위해서는 JSON 으로 변환해줘야한다!!
            JSON.stringify(todos) : 배열을 JSON 형태로 변환한다.
            로컬스토리지에 "todos" 라는 키값으로 배열을 저장한다.
        */
        localStorage.setItem("todos", JSON.stringify(todos)); // 
    }, [todos])

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

function readTotosFromLocalStorage(){
    /*
        로컬스토리지에 저장된 todos 를 가져온다.
        JSON.parse(localStorage.getItem("todos")) : JSON 형태의 문자열을 배열로 변환한다.
    */
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos ? todos : []; // todos 가 존재하면 todos 를 반환하고, 존재하지 않으면 빈 배열을 반환한다.
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