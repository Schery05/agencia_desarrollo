const Sequelize = require('sequelize');
require('dotenv').config({path: 'variables.env'})

module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define:{
        timestamps: false
    }, 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    //operatorAliases: false
    })

//mysql: bd5c6d809bdf90:74d37668@us-cdbr-east-02.cleardb.com/heroku_4554143971c25e3?reconnect=true
//mysql: bd5c6d809bdf90:74d37668@us-cdbr-east-02.cleardb.com/heroku_4554143971c25e3?reconnect=true
//UTF8_GENERAL_CI