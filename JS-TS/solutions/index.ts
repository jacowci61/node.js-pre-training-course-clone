#!/usr/bin/env ts-node
import { ToDoManager } from './todo-manager';

async function main() {
  const manager = new ToDoManager();
  await manager.init();

  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'add') {
    const title = args[1];
    const description = args[2];
    await manager.add(title, description);
    console.log(`Added: ${title}`);
  } else if (command === 'complete') {
    const id = Number(args[1]);
    await manager.complete(id);
    console.log(`Completed todo #${id}`);
  } else if (command === 'list') {
    const todos = await manager.list();
    console.log(todos);
  } else {
    console.log('Unknown command, try again');
  }
}

main();