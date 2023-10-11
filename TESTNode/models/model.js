const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const UserModel = sequelize.define('user',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    fieldName:{
        type:Sequelize.STRING
    },
    fieldType:{
        type:Sequelize.STRING
    }
    
})

module.exports = UserModel