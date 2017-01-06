import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class CategoryEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('categories');
        sequelize.define('category',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING(50),
                    unique: true
                }
            }
            ,
            config
        );
    }
}