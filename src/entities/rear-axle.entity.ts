import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class RearAxleEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('rear_axles');
        sequelize.define('rear_axle',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                shock: {
                    type: Sequelize.STRING
                },
                brake: {
                    type: Sequelize.STRING
                },
                wheel: {
                    type: Sequelize.STRING
                },
                type: {
                    type: Sequelize.STRING
                }
            }
            ,
            config
        );
    }
}