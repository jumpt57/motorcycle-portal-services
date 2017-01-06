import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class BikeEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('bikes');
        return sequelize.define('bike',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
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
            config
        );
    }
}