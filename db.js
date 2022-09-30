const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        dialect: 'postgres',
        host: process.env.DB_HOST ,
        port: process.env.DB_PORT
    }
)
// let sequelize;
// if (process.env.NODE_ENV === "production") {
//     sequelize = new Sequelize(process.env.DATABASE_URL);
// } else {
//     sequelize = new Sequelize(
//         process.env.POSTGRES_DB || "elitypescript",
//         process.env.POSTGRES_USER || "eli",
//         "",
//         {
//             host: process.env.PSQL_HOST || "localhost",
//             dialect: "postgres",
//             pool: {
//                 max: 100,
//                 min: 0,
//                 idle: 200000,
//                 // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
//                 acquire: 1000000,
//             },
//         }
//     );
// }