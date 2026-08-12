import React, { useState } from 'react';
import { Todo } from '../../types';


export const AddToDo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
    <input placeholder="Add todo"
     value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button onClick={() => {
      if (inputValue.trim() === '') return;  

      const newTodo: Todo = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };

      setTodos([...todos, newTodo]);  
      setInputValue('');              
    }}>
      Add
    </button>
    <ul>
    {todos.map((todo) =>{
      return(
        <li key={todo.id}>
         {todo.title} - {todo.completed ? 'completed' : 'not completed'}
        </li>
      )
    })}
    </ul>
    </div>
  );
}; 