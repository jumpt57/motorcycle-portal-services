import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class FrontAxleEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('front_axles');
        sequelize.define('front_axle',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                fork: {
                    type: Sequelize.STRING
                },
                shock: {
                    type: Sequelize.STRING
                },
                wheel: {
                    type: Sequelize.STRING
                },
                brake: {
                    type: Sequelize.STRING
                }
            }
            ,
            config
        );
    }
}