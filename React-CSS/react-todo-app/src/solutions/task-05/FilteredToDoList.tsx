import React, { useState } from 'react';
import { Todo } from '../../types';

/**
 * Task 5: FilteredToDoList Component
 * 
 * Theory: Derived State and Computed Values
 * 
 * In React, you often need to compute values based on your state. These are called "derived state"
 * or "computed values" and should be calculated during render rather than stored in state.
 * 
 * Why Use Derived State:
 * 1. Avoids state synchronization issues
 * 2. Reduces complexity by having a single source of truth
 * 3. Automatically updates when source data changes
 * 4. Prevents stale state bugs
 * 
 * Common Derived State Patterns:
 * 
 * Filtering:
 * - const activeTodos = todos.filter(todo => !todo.completed)
 * - const completedTodos = todos.filter(todo => todo.completed)
 * 
 * Searching:
 * - const filteredTodos = todos.filter(todo => 
 *     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
 *   )
 * 
 * Sorting:
 * - const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title))
 * 
 * Aggregations:
 * - const completedCount = todos.filter(todo => todo.completed).length
 * - const totalCount = todos.length
 * 
 * Multiple Filters:
 * - Use multiple filter conditions or combine them
 * - Consider using useMemo for expensive computations
 * 
 * Key Concepts:
 * - Calculate derived values during render
 * - Don't store computed values in state
 * - Use useMemo for expensive calculations
 * - Keep state minimal and derive the rest
 */

  // ---------------------------------------------------------------

  // TODO: Implement the FilteredToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add filter buttons: "All", "Active", "Completed"
  // 3. Filter todos based on selected filter
  // 4. Use derived state for filtered results
  // 5. Add complete functionality for todos
  // 
  // Example implementation:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  // 
  // const filteredTodos = todos.filter(todo => {
  //   if (filter === 'active') return !todo.completed;
  //   if (filter === 'completed') return todo.completed;
  //   return true; // 'all' case
  // });


export const FilteredToDoList: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTodos = todos.filter(todo => {
     if (filter === 'active') return !todo.completed;
     if (filter === 'completed') return todo.completed;
     return true;
  });

  const markCompleted = (id: number) => {
    setTodos(todos.map(todo => 
    todo.id === id ? {...todo, completed: true} : todo
  ))};

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

    <button onClick={() => {
      setFilter('all')
    }}>
      Show all
    </button>

    <button onClick={() => {
      setFilter('completed')
    }}>
      Show completed
    </button>

    <button onClick={() => {
      setFilter('active')
    }}>
      Show active
    </button>

    <ul>
    {filteredTodos.map((todo) =>{
      return(
        <div>
          <button onClick={() => {
            markCompleted(todo.id)
          }}>
            Complete
          </button>
        <li key={todo.id}>
         {todo.title} - {todo.completed ? 'completed' : 'not completed'}
        </li>
        </div>
      )
    })}
    </ul>
    </div>
  );
};  