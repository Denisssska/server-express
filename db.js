const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        dialect:'postgres',
        // pool: {   // Настройки пула подключений
        //     max: 5, // Максимальное количество подключений
        //     min: 0, // Минимальное количество подключений
        //     idle: 10000
        // },
        host:process.env.DB_HOST,
        port:process.env.DB_PORT
    }
)