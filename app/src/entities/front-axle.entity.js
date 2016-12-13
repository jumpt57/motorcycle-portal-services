const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function (server) {
    return server.sequelize.define('front_axle',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            fork: {
                type: Sequelize.STRING
            },
            shock: {
                type: Sequelize.STRING
            },
            wheel: {
                type: Sequelize.STRING
            },
            brake: {
                type: Sequelize.STRING
            }
        }
        ,       
        CONFIG('front_axles')
    );
};