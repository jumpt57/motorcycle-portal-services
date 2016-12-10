const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://motorcycleportal:motorcycleportal@localhost:5432/motorcycleportal');

var Bike = sequelize.define('Bike',
    {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            field: 'name',
            unique: true
        },
        imagesUrl: {
            type: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.STRING(255))),
            field: 'images_url'
        },
        year: {
            type: Sequelize.STRING,
            field: 'year',
            unique: true
        },
        maxSpeed: {
            type: Sequelize.INTEGER,
            field: 'max_speed'
        },
    }
    ,
    {
        freezeTableName: false,
        timestamps: false,
        tableName: 'bike_general_information',
        schema: 'data_bikes'
    });

    module.exports = Bike;