const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function(server) {
    return server.sequelize.define('features_dictionary',
        {
            type: {
                type: Sequelize.STRING(150),
                primaryKey: 'couple_type_features_value'
            },
            feature: {
                type: Sequelize.STRING(150),
                primaryKey: 'couple_type_features_value'
            },
            value: {
                type: Sequelize.STRING(150),
                primaryKey: 'couple_type_features_value'
            },
            correctValue: {
                type: Sequelize.STRING(150),
                field: 'correct_value'
            }
        }
        ,
        CONFIG('features_dictionary')
    );
};