import { InMemoryRepository } from './repository';
import { Todo, NewTodo, TodoStatus } from './types';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const randomLatency = () => Math.random() * (600 - 300) + 300;

export class TodoNotFoundError extends Error{
  constructor (id: number) {
    super(`Todo with id ${id} not found`);
    this.name = 'TodoNotFoundError';
  }
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();
  private idCounter = 1;

  async getAll(): Promise<Todo[]> {
    await delay(randomLatency());
    return this.repo.findAll();
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    await delay(randomLatency());
    const fullTodo: Todo = {
    ...newTodo,
    id: this.idCounter++,
    createdAt: new Date(),
    status: TodoStatus.PENDING,
  };
    return this.repo.add(fullTodo);
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    await delay(randomLatency());
    if (this.repo.findById(id)){
      const updatedTodo = this.repo.update(id, update);
      return updatedTodo
    }
    else{
      throw new TodoNotFoundError(id);
    }    
  }

  async remove(id: number): Promise<void> {
    await delay (randomLatency());
    if (this.repo.findById(id)){
      this.repo.remove(id);
    }
    else{
      throw new TodoNotFoundError(id);
    }    
  }
}