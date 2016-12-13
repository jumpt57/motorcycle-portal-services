const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function(server) {
    return server.sequelize.define('transmission',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            gearboxSpeeds: {
                type: Sequelize.STRING(100),
                field: 'gearbox_speeds'
            },
            gearboxType: {
                type: Sequelize.STRING(100),
                field: 'gearbox_type'
            },
            secondaryTransmission: {
                type: Sequelize.STRING(100),
                field: 'secondary_transmission'
            },
            type: {
                type: Sequelize.STRING(100)
            }
        }
        ,
        CONFIG('transmissions')
    );
};