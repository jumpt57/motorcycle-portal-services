import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class EngineEntity {
    constructor(sequelize: Sequelize.Sequelize){
        let config = new ConfigSequelize('engines');
        return sequelize.define('engine',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            gasSupply: {
                type: Sequelize.STRING(100),
                field: 'gas_supply'
            },
            camshaft: {
                type: Sequelize.STRING(100)
            },
            cooling: {
                type: Sequelize.STRING(100)
            },
            displacement: {
                type: Sequelize.STRING(100)
            },
            type: {
                type: Sequelize.STRING(100)
            },
            valve: {
                type: Sequelize.STRING(100)
            },
            valveCommand: {
                type: Sequelize.STRING(100),
                field: 'valve_command'
            },
            engineIntake: {
                type: Sequelize.STRING(100),
                field: 'engine_intake'
            },
            bridable: {
                type: Sequelize.STRING(100)
            },
            maxTorqueRpm: {
                type: Sequelize.INTEGER,
                field: 'max_torque_rpm'
            },
            maxPowerRpm: {
                type: Sequelize.INTEGER,
                field: 'max_power_rpm'
            },            
            power: {
                type: Sequelize.DOUBLE
            },
            torque: {
                type: Sequelize.DOUBLE
            },
            powerToWeightRatio: {
                type: Sequelize.DOUBLE,
                field: 'power_to_weight_ratio'
            },
            batteryPack: {
                type: Sequelize.STRING(100),
                field: 'battery_pack'
            }
        }
        ,
        config
    );
    }
}