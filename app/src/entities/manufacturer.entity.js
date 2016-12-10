const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://motorcycleportal:motorcycleportal@localhost:5432/motorcycleportal');

var Manufacturer = sequelize.define('Manufacturer',
    {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(100),
            field: 'name',
            unique: true
        },
        years: {
            type: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.STRING)),
            field: 'years'
        },
        description: {
            type: Sequelize.STRING,
            field: 'description'
        },
        logoUrl: {
            type: Sequelize.STRING,
            field: 'logo_url'
        },
        imagesUrl: {
            type: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.STRING(255))),
            field: 'images_url'
        },
    },
    {
        freezeTableName: false,
        timestamps: false,
        tableName: 'bike_manufacturers',
        schema: 'data_bikes'
    });


module.exports = Manufacturer;