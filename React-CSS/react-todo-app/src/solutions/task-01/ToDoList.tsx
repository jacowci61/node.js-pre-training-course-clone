import React from 'react';
import { TodoListProps } from '../../types';

export const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
    {todos.map((todo) =>{
      return(
        <li key={todo.id}>
         {todo.title} - {todo.completed ? 'completed' : 'not completed'}
        </li>
      )
    })}
    </ul>
  );
}; 