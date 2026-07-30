import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  const copyOfState: Todo[] = [...state];
  copyOfState.push(todo);
  return copyOfState
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  const extractedTodo = state.find(item => item.id === id);
  const updatedTodo = update;
  type partialTodo = Partial<Todo>;
  throw new Error('updateTodo: not implemented');
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  const updatedArray: Todo[] = [...state];
  updatedArray.filter(idToDelete => idToDelete.id === id);
  return updatedArray
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  const extractedTodo = state.find(item => item.id === id)
  return extractedTodo
}