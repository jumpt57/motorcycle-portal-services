const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function(server) {
    return server.sequelize.define('rear_axle',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            shock: {
                type: Sequelize.STRING
            },
            brake: {
                type: Sequelize.STRING
            },
            wheel: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            }
        }
        ,
        CONFIG('rear_axles')
    );
};