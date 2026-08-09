import { TodoApi } from '../JS-TS/solutions/todo-api';
import { TodoService } from '../JS-TS/solutions/todo-service';
import { TodoStatus } from '../JS-TS/solutions/types';
import { InMemoryRepository } from '../JS-TS/solutions/repository';

describe('Task 09', () => {
  const service = new TodoService(new TodoApi());


  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

    it('create new todo with title and description', async () => {
    const created = service.create('title' ,'description');
    await jest.advanceTimersByTimeAsync(1000);
    const result = await created
    expect(result.title).toBe('title');
    expect(result.description).toBe('description');
  });

  it('toggle status of todo', async () => {
  const created = service.create('title', 'description');
  await jest.advanceTimersByTimeAsync(2000);
  const todoItem = await created;

  const toggled = service.toggleStatus(todoItem.id);
  await jest.advanceTimersByTimeAsync(2000);
  const result = await toggled;
  expect(result.status).toBe(TodoStatus.COMPLETED);
});

  it('search for todo', async () => {
    const query = service.search('title');
    await jest.advanceTimersByTimeAsync(1000);
    const queryItems = await query
    expect(queryItems.length).toBeGreaterThan(0)
  });

  it('error is thrown when updating non-existing id', async () => {
  const assert = expect(service.toggleStatus(-1)).rejects.toThrow();
  await jest.advanceTimersByTimeAsync(1000);
  await assert;
});

  it('remove from repository.ts', async () => {
  interface Entity { id: number; value: string; }
  const repo = new InMemoryRepository<Entity>();
  repo.add({ id: 1, value: 'todo1' });
  repo.add({ id: 2, value: 'todo2' });
  repo.remove(2);
  expect(repo.findById(2)).toBeUndefined();
  });

it('remove from todo-api.ts', async () => {
  const api = new TodoApi();
  const addedTodo = api.add({ title: 'todo1' });
  await jest.advanceTimersByTimeAsync(2000);
  const ttodo = await addedTodo;
  const idOfTodo = ttodo.id;
  const removePromise = api.remove(idOfTodo);
  await jest.advanceTimersByTimeAsync(2000);
  await removePromise;
  const remaining = api.getAll();
  await jest.advanceTimersByTimeAsync(2000);
  const all = await remaining;
  expect(all.length).toBe(0);
});
});