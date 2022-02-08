const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/todos_database.sqlite",
})

sequelize
  .authenticate()
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error(error))

module.exports = sequelize
