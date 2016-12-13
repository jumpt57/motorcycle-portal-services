const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function(server) {
    return server.sequelize.define('category',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(50),
                unique: true
            }
        }
        ,
        CONFIG('categories')
    );
};