const Sequelize = require('sequelize')

//This will maintain the database connection and the database connection pool and configure the database
const sequelize  =  new Sequelize('expressy','root','Dhanush@97',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;