const { todo } = require('node:test');
const db = require('./models');

async function main() {
  try {
    const newTodo = await db.todo.create({
      title: 'NEWtitle',
      description: 'NEWdesc',
      status: 'IN_PROGRESS',
      user_id: 1,
    });
    console.log(newTodo.toJSON());

    const todos = await db.todo.findAll();
    console.log(todos.every(todo => todo instanceof db.todo));
    console.log('All todos:', JSON.stringify(todos, null, 2));

    const updatedTodo = await db.todo.update(
      {title: 'updatedTitle'},
      {
        where: {
        title: 'title3'
      },
    }
    );

    await db.todo.destroy({
      where: {
        title: 'NEWtitle'
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.sequelize.close();
  }
}

main();