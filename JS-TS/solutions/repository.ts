export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    this.items.push(entity);
    return entity
  }

  update(id: number, patch: Partial<T>): T {
    const existing = this.findById(id);
      if (existing === undefined){
      throw new Error("Requested Todo was not found");
    }

    const merged = { ...existing, ...patch };
    for (let i: number = 0; i < this.items.length; i++){
    if (this.items[i].id === id){
      this.items[i] = merged;
    }
    }
    return merged
  }

  remove(id: number): void {
    const existing = this.findById(id);
    if (existing === undefined){
      throw new Error("Requested Todo was not found");
    }
    this.items = this.items.filter(todo => todo.id !== id);
  }

  findById(id: number): T | undefined {
    let foundTodo: T | undefined = undefined;

    for (let i: number = 0; i < this.items.length; i++){
      if (this.items[i].id === id){
        foundTodo = this.items[i];
      }
    }
    return foundTodo
  }

  findAll(): T[] {
    const itemsCopy = [...this.items];
    return  itemsCopy
  }
}
