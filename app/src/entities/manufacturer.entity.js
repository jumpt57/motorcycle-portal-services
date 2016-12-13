const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function(server) {
    return server.sequelize.define('manufacturer',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                unique: true
            },
            years: {
                type: Sequelize.ARRAY(Sequelize.STRING)
            },
            description: {
                type: Sequelize.STRING
            },
            logoUrl: {
                type: Sequelize.STRING,
                field: 'logo_url'
            },
            imagesUrl: {
                type: Sequelize.ARRAY(Sequelize.STRING(255)),
                field: 'images_url'
            },
        },
        CONFIG('manufacturers')
    );
};