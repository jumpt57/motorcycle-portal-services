module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/api/manufacturers',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findAll({
                attributes: ['id', 'name', 'logoUrl'],
                through: {
                    attributes: []
                },
                include: [
                    {
                        model: server.sequelize.model('bike'),
                        as: 'bikes',
                        attributes: ['id'],
                        through: {
                            attributes: []
                        }
                    }
                ]
            }).then(function (data) {
                let dataWithNb = [];

                for (var i = 0; i < data.length; i++) {
                    var element = data[i].dataValues;
                    var nbBikes = element.bikes.length;
                    delete element.bikes;
                    element.nbBikes = nbBikes;
                    dataWithNb.push(element);
                }

                if (i == data.length) {
                    reply(dataWithNb);
                }
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/manufacturers/{id}/bikes',
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
        path: '/api/manufacturers/{id}/bikes/{yearMin}/{yearMax}',
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

    server.route({
        method: 'GET',
        path: '/api/manufacturers/{id}',
        handler: function (request, reply) {
            server.sequelize.model('manufacturer').findOne({
                attributes: {
                    exclude: ['created_at', 'updated_at']
                },
                where: {
                    id: request.params.id
                }
            }).then(function(data){
                reply(data);
            });
        }
    });
}