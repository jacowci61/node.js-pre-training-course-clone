'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todo.belongsTo(models.user, { foreignKey: 'user_id' });
    }
  }
  todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED')
  }, {
    sequelize,
    modelName: 'todo',
    underscored: true,
    updatedAt: false,
  });
  return todo;
};