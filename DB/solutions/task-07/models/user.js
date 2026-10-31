'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.todo, { foreignKey: 'user_id' });
    }
  }
  user.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    underscored: true,
    updatedAt: false,
  });
  return user;
};