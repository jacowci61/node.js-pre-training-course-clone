'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [
      {id: 1, name: "Username1"},
      {id: 2, name: "Username2"},
     ], {});
     await queryInterface.bulkInsert('todos', [
      {
        id: 1,
        title: "title1",
        description: "description1",
        status: "IN_PROGRESS",
        created_at: new Date(),
        user_id: 1
      },
            {
        id: 2,
        title: "title2",
        description: "description2",
        status: "COMPLETED",
        created_at: new Date(),
        user_id: 1
      },
      {
        id: 3,
        title: "title3",
        description: "description3",
        status: "IN_PROGRESS",
        created_at: new Date(),
        user_id: 1
      },
      {
        id: 4,
        title: "title4",
        description: "description4",
        status: "IN_PROGRESS",
        created_at: new Date(),
        user_id: 2
      },
      {
        id: 5,
        title: "title5",
        description: "description5",
        status: "COMPLETED",
        created_at: new Date(),
        user_id: 2
      },
      {
        id: 6,
        title: "title6",
        description: "description6",
        status: "IN_PROGRESS",
        created_at: new Date(),
        user_id: 2
            }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};