import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class ManufacturerEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('manufacturers');
        sequelize.define('manufacturer',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
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
            config
        );
    }
}