const { Sequelize } = require('sequelize')

exports.sequelize = new Sequelize('database_development', 'root', 'root',{
host:'localhost',
dialect:'mysql'
})