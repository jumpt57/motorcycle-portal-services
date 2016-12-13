const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function (server) {
    return server.sequelize.define('frame',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            dryWeight: {
                type: Sequelize.DOUBLE,
                field: 'dry_weight'
            },
            seatHeight: {
                type: Sequelize.DOUBLE,
                field: 'seat_height'
            },
            type: {
                type: Sequelize.STRING(100)
            },
            tankCapacity: {
                type: Sequelize.DOUBLE,
                field: 'tank_capacity'
            },
            lenght: {
                type: Sequelize.INTEGER
            },
            wheelBase: {
                type: Sequelize.INTEGER,
                field: 'wheel_base'
            },
            width: {
                type: Sequelize.INTEGER
            },
            height: {
                type: Sequelize.DOUBLE
            },
            movingWeight: {
                type: Sequelize.DOUBLE,
                field: 'moving_weight'
            }
        }
        ,
        CONFIG('frames')
    );
};