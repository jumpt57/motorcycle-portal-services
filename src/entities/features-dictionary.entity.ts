import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class FeaturesDictionaryEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('features_dictionary');
        sequelize.define('features_dictionary',
            {
                type: {
                    type: Sequelize.STRING(150),
                    primaryKey: true
                },
                feature: {
                    type: Sequelize.STRING(150),
                    primaryKey: true
                },
                value: {
                    type: Sequelize.STRING(150),
                    primaryKey: true
                },
                correctValue: {
                    type: Sequelize.STRING(150),
                    field: 'correct_value'
                }
            }
            ,
            config
        );


    }
}