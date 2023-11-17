'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Badges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Badges.init({
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    publ: DataTypes.BOOLEAN,
    year: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Badges',
  });
  return Badges;
};