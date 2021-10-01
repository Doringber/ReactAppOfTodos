import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './componets/TodoInput';
import TodolList from './componets/TodoList';
function App() {
  const [todoList, setTodoList] = useState('');
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const addTodoHandler = enteredText => {
    setTodoList(prevTodo => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({ text: enteredText, id: Math.random().toString() });
      console.log(updatedTodo)
      return updatedTodo;
    });
  };

  const deleteItemHandler = todoId => {
    setTodoList(prevTodo => {
      console.log(prevTodo);
      const updatedTodo = prevTodo.filter(todo => todo.id !== todoId);
      return updatedTodo;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (todoList.length > 0) {
    content = (
      <TodolList items={todoList} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="App">
      <section id="goal-form">
        <TodoInput onAddGoal={addTodoHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
