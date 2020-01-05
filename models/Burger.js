const Sequelize = require('sequelize')


module.exports = function(sequelize, DataTypes){
  // make a class to get attached to the db
  class Burger extends Sequelize.Model { }

  // define the schema
  Burger.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, { sequelize, modelName: 'Burger' });

  Burger.sync();

  return Burger;
}