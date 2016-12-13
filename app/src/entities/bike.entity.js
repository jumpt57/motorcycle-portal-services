const Sequelize = require('sequelize');
const CONFIG = require('../app.config');

module.exports = function (server) {
    return server.sequelize.define('bike',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                unique: 'couple_name_bike_year_unique'
            },
            imagesUrl: {
                type: Sequelize.ARRAY(Sequelize.STRING(255)),
                field: 'images_url'
            },
            year: {
                type: Sequelize.STRING,
                unique: 'couple_name_bike_year_unique'
            },
            maxSpeed: {
                type: Sequelize.INTEGER,
                field: 'max_speed'
            },
            zeroToHundred: {
                type: Sequelize.DOUBLE,
                field: 'zero_to_hundred'
            },
            price: {
                type: Sequelize.INTEGER
            },
            priceWithAbs: {
                type: Sequelize.INTEGER,
                field: 'price_with_abs'
            }
        }
        ,
        CONFIG('bikes')
    );
};