import React from 'react';
import TodoItem from './TodoItem';
import './TodoInput.css';

const TodolList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <TodoItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodolList;
