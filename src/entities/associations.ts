import * as Sequelize from 'sequelize';
import ConfigSequelize from './sequelize.config';

export default class AssociationsEntity {
    constructor(sequelize: Sequelize.Sequelize) {
        sequelize.model('category').belongsToMany(sequelize.model('bike'), { as: 'bikes', through: 'categories_bikes' });
        sequelize.model('manufacturer').belongsToMany(sequelize.model('bike'), { as: 'bikes', through: 'manufacturers_bikes' });

        sequelize.model('bike').belongsTo(sequelize.model('category'), { foreignKey: 'id_category' });
        sequelize.model('bike').belongsTo(sequelize.model('manufacturer'), { foreignKey: 'id_manufacturer' });
        sequelize.model('bike').hasOne(sequelize.model('engine'), { foreignKey: 'id_bike' });
        sequelize.model('bike').hasOne(sequelize.model('frame'), { foreignKey: 'id_bike' });
        sequelize.model('bike').hasOne(sequelize.model('front_axle'), { foreignKey: 'id_bike' });
        sequelize.model('bike').hasOne(sequelize.model('rear_axle'), { foreignKey: 'id_bike' });
        sequelize.model('bike').hasOne(sequelize.model('transmission'), { foreignKey: 'id_bike' });
    }
}