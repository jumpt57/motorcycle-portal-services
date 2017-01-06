import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class TransmissionEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        let config = new ConfigSequelize('transmissions');
        sequelize.define('transmission',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                gearboxSpeeds: {
                    type: Sequelize.STRING(100),
                    field: 'gearbox_speeds'
                },
                gearboxType: {
                    type: Sequelize.STRING(100),
                    field: 'gearbox_type'
                },
                secondaryTransmission: {
                    type: Sequelize.STRING(100),
                    field: 'secondary_transmission'
                },
                type: {
                    type: Sequelize.STRING(100)
                }
            }
            ,
            config
        );
    }
}
