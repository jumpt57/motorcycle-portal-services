module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/manufacturers',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findAll({
                attributes: ['id', 'name', 'logoUrl']
            }).then(function (data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/manufacturers/{id}/bikes',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findAll({
                attributes: {
                    exclude: ['created_at', 'updated_at']
                },
                where: {
                    id: request.params.id
                },
                include: [
                    {
                        model: server.sequelize.model('bike'),
                        as: 'bikes',
                        through: {
                            attributes: []
                        },
                        attributes: ['id', 'name', 'imagesUrl', 'year'],
                        include: [
                            {
                                model: server.sequelize.model('category'),
                                attributes: ['name']
                            }
                        ]
                    }
                ]
            }).then(function (data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/manufacturers/{id}/bikes/{yearMin}/{yearMax}',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findAll({
                attributes: {
                    exclude: ['created_at', 'updated_at']
                },
                where: {
                    id: request.params.id
                },
                include: [
                    {
                        model: server.sequelize.model('bike'),
                        as: 'bikes',
                        through: {
                            attributes: []
                        },
                        attributes: ['id', 'name', 'imagesUrl', 'year'],
                        include: [
                            {
                                model: server.sequelize.model('category'),
                                attributes: ['name']
                            }
                        ],
                        where: {
                            year: {
                                $between: [request.params.yearMin, request.params.yearMax]
                            }
                        }
                    }
                ]
            }).then(function (data) {
                reply(data);
            });
        }
    });
}