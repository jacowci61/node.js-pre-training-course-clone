interface Todo {
    id : number;
    title: string;
    description?: string;
    status: TodoStatus;
    readonly createdAt: Date
}

type NewTodo = Omit<Todo, 'id' | 'createdAt' | 'status'>

enum TodoStatus {
    PENDING, IN_PROGRESS, COMPLETED
}

export { Todo, TodoStatus, NewTodo };