import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo } from './types';

export class ToDoManager {
  private service = new TodoService(new TodoApi());

  async init(): Promise<void> {
    await this.service.create('TitleOfTodo1', 'DecriptionOfTodo1')
    await this.service.create('Some task', 'Decription')
    await this.service.create('Fix bugs', 'In task n3')
  }

  async add(title: string, description = ''): Promise<void> {
    await this.service.create(title, description)
  }

  async complete(id: number): Promise<void> {
    await this.service.complete(id)
  }

  async list(): Promise<Todo[]> {
    const allTodos = await this.service.getAll()
    return allTodos
  }
}
