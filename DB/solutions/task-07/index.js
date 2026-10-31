const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_app', 'root', 'mU7k1RUQb&J!DW', {
  host: 'localhost',
  dialect: 'mysql',
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

main();