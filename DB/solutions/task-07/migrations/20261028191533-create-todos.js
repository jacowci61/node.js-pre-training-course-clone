'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('todos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
        },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: Sequelize.STRING,
      status: {
        type: Sequelize.ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED'),
        defaultValue: 'PENDING',
        allowNull: false
        },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onDelete: 'CASCADE',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('todos');
  }
};
