import { TodoApi } from '../JS-TS/solutions/todo-api';
import { TodoService } from '../JS-TS/solutions/todo-service';

describe('Task 09: TodoService Tests', () => {
  const service = new TodoService(new TodoApi());

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

    it('create new todo with title and description', async () => {
    const created = service.create('title' ,'description');
    jest.runAllTimers()
    const result = await created
    expect(result.title).toBe('title');
    expect(result.description).toBe('description');
  });

    it('toggle status of todo', async () => {
    
  });
});