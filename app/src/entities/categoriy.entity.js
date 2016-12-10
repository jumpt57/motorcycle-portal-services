const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://motorcycleportal:motorcycleportal@localhost:5432/motorcycleportal');

var Category = sequelize.define('Category',
    {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50),
            field: 'name',
            unique: true
        }
    }
    ,
    {
        freezeTableName: false,
        timestamps: false,
        tableName: 'bike_categories',
        schema: 'data_bikes'
    });

    module.exports = Category;