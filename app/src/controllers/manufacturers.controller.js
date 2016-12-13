module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/manufacturers',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findAll().then(function (data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/manufacturers/{id}/bikes',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findAll({
                where: {
                    id: request.params.id
                },
                include: [
                    {
                        model: server.sequelize.model('bike'),
                        as: 'bikes',
                        through: {
                            attributes: []
                        }
                    }
                ]
            }).then(function (data) {
                reply(data);
            });
        }
    });
}