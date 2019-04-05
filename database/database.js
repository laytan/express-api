const Sequelize = require('sequelize');
const utils = require('../utils/utils');

utils.logRed("Connecting to database");

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_TYPE,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

db.authenticate()
    .then(() => {
        utils.logRed("Sequelize connected succesfully");
    });

module.exports = db;