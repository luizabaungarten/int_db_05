const { Sequelize } = require('sequelize')

const db = new Sequelize('db_gestao_hoteis', 'root', 'senai', {
    port: 3306,
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = 'db'