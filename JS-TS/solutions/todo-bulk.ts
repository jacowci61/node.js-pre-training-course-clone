import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  const toggledTodos = state.map(todo =>{
    if (completed){
      return {...todo, status: TodoStatus.COMPLETED}
    }
    else{
      return {...todo, status: TodoStatus.PENDING}
    }
  });
  return toggledTodos;
}

export function clearCompleted(state: Todo[]): Todo[] {
  const uncompleted = state.filter(todo => todo.status !== TodoStatus.COMPLETED);
  return uncompleted;
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  const filtered = state.reduce((counter, todo)=> {return (todo.status === status) ? counter + 1 : counter}, 0);
  return filtered;
}
