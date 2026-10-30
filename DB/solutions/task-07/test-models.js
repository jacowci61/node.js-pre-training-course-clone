const db = require('./models');

async function main() {
  try {
    const users = await db.user.findAll({ include: db.todo });
    console.log(JSON.stringify(users, null, 2));
  } catch (error) {
    console.error(error);
  } finally {
    await db.sequelize.close();
  }
}

main();