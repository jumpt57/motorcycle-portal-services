module.exports = function(server) {
    server.sequelize.model('category').belongsToMany(server.sequelize.model('bike'), { as: 'bikes', through: 'categories_bikes' });
    server.sequelize.model('manufacturer').belongsToMany(server.sequelize.model('bike'), { as: 'bikes', through: 'manufacturers_bikes' });
    
    server.sequelize.model('bike').belongsTo(server.sequelize.model('category'), { foreignKey: 'id_category' });
    server.sequelize.model('bike').belongsTo(server.sequelize.model('manufacturer'), { foreignKey: 'id_manufacturer' });
    server.sequelize.model('bike').hasOne(server.sequelize.model('engine'), { foreignKey: 'id_bike' });
    server.sequelize.model('bike').hasOne(server.sequelize.model('frame'), { foreignKey: 'id_bike' });
    server.sequelize.model('bike').hasOne(server.sequelize.model('front_axle'), { foreignKey: 'id_bike' });
    server.sequelize.model('bike').hasOne(server.sequelize.model('rear_axle'), { foreignKey: 'id_bike' });
    server.sequelize.model('bike').hasOne(server.sequelize.model('transmission'), { foreignKey: 'id_bike' });
};