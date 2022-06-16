module.exports = {
    HOST: '35.189.213.132',
    USER: 'root',
    PASSWORD: process.env.LENOM,
    DB: 'douce1',
    dialect: 'mysql',
    pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
}
// module.exports = {
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: process.env.LENOM,
//     DB: 'douce',
//     dialect: 'mysql',
//     pool: {
//     max: 50,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//     }
// }
