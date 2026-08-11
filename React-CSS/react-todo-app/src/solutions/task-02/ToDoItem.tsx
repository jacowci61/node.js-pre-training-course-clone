import React from 'react';
import { TodoItemProps } from '../../types';

export const ToDoItem: React.FC<TodoItemProps> = ({ todo }) => {
  // TODO: Implement the ToDoItem component
  // 
  // Requirements:
  // 1. Display the todo title
  // 2. Show completion status using conditional rendering
  // 3. Use different styling for completed vs active todos
  // 4. Make the component reusable for any todo object
  // 
  // Example usage:
  // <ToDoItem todo={{ id: 1, title: 'Learn React', completed: true }} />
  const style = todo.completed ? {textDecoration: 'line-through', color: 'green'} : {color: 'red'}
  return (
    <p style={style}>{todo.title} - {todo.completed ? 'completed' : 'not completed'}</p>
  );
}; 