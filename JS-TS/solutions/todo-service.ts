import { TodoApi, TodoNotFoundError } from './todo-api';
import { Todo, NewTodo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
    const newTodoObject: NewTodo = {
      title: title,
      description: description
    };
    return this.api.add(newTodoObject)
  }

  async toggleStatus(id: number): Promise<Todo> {
    const allTodos = await this.api.getAll();
    let requiredTodo = allTodos.find(todo => todo.id === id)

    if (requiredTodo === undefined){
      throw new TodoNotFoundError(id);
    }

    let patch: Partial<Todo>;
    if (requiredTodo?.status === TodoStatus.COMPLETED){
      patch = { status: TodoStatus.PENDING }
    }
    else{
        patch = { status: TodoStatus.COMPLETED }
    }
    return this.api.update(id, patch)
  }

  async search(keyword: string): Promise<Todo[]> {
    const allTodos = await this.api.getAll();
    if (keyword.trim() === ""){
      throw new Error ("Incorrect keyword, please try again.")
    }
    const matches = allTodos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()) || todo.description?.toLowerCase().includes(keyword.toLowerCase()))
    return matches
  }

  async complete(id: number): Promise<Todo>{
    const allTodos = await this.api.getAll();
    let requiredTodo = allTodos.find(todo => todo.id === id)

    if (requiredTodo === undefined){
      throw new TodoNotFoundError(id);
    }

    let patch: Partial<Todo>;
    patch = { status: TodoStatus.COMPLETED }
    return this.api.update(id, patch)
  }

  async getAll(): Promise<Todo[]>{
    const allTodos = await this.api.getAll();
    return allTodos
  }
}
