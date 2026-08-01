import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  const copyOfState: Todo[] = [...state];
  copyOfState.push(todo);
  return copyOfState
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  if ((state.find(item => item.id === id)) === undefined || (state.find(item => item.id === id)) === null){
    throw new Error ("Item cannot be found.")
  }
  const updatedTodo = state.map(todo =>{
    if (todo.id === id){
      return { ...todo, ...update };
    }
    else{
      return todo;
    }
  });
  return updatedTodo
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  if ((state.find(item => item.id === id)) === undefined || (state.find(item => item.id === id)) === null){
    throw new Error ("Item cannot be found.")
  }
  const copyOfState: Todo[] = [...state];
  const updatedArray = copyOfState.filter(idToDelete => idToDelete.id !== id);
  return updatedArray
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  const extractedTodo = state.find(item => item.id === id)
  return extractedTodo
}