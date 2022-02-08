const { DataTypes } = require('sequelize')
const sequelize = require('../database')

module.exports = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})
