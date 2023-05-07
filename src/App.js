import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filterOptions = ["all", "active", "completed"]

function App() {
  const [filter, setFilter] = useState(filterOptions[0])
  return (
    <>
      <Header 
        filterOptions={filterOptions} // 필터의 종류를 배열로 전달
        filter={filter} // 현재 필터 상태를 전달
        onFilterChange={setFilter} // 필터를 변경하는 함수를 전달
        /* onFilterChange={(filter) => setFilter(filter)} */ // 풀어쓰는 법
      />
      <TodoList filter={filter} />
    </>
  );
}
export default App;