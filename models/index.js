const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("employeedb", "root", "password", {
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("Connection has been established successfully")
} catch (error) {
    console.error("unable to connect with database:", error)
}